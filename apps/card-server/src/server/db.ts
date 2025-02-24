import { PrismaClient } from "@prisma/client";
import { env } from "~/env";
import { enhance } from "@zenstackhq/runtime";
import { createClient } from './supabase-server';
import { jwtVerify } from 'jose';
import { headers } from 'next/headers';

const createPrismaClient = () => {
  const db = new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
  return db
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export async function verifyAndExtractJWT(authHeader: string | null): Promise<string | null> {
  if (!authHeader?.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split(' ')[1];
  const secret = process.env.NEXT_PUBLIC_SUPABASE_SECRET;
  
  if (!secret) {
    throw new Error('NEXT_PUBLIC_SUPABASE_SECRET is not set');
  }
  if (!token) {
    return null
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret)
    );

    return payload.sub || null;
  } catch (error) {
    console.error('JWT verification failed:', error);
    return null;
  }
}

// create an enhanced Prisma client with user context
export async function getPrisma() {
  const headersList = await headers();
  const authHeader = headersList.get('Authorization');
  const userId = await verifyAndExtractJWT(authHeader);

  console.log('userId from JWT', userId)
  
  if (!userId) {
    // Fall back to Supabase auth if no valid JWT
    const supabase = await createClient();
    const authObject = await supabase.auth.getUser();
    const userId2 = authObject.data.user?.id
    if (userId2) {
      return enhance(db, { user: { id: userId2 } });
    } else {
      throw new Error('No user ID found');
    }
  }
  
  return enhance(db, { user: { id: userId } });
}
