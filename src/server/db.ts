import { PrismaClient } from "@prisma/client";
import { GetServerSidePropsContext } from "next";

import { env } from "~/env";
import { enhance } from "@zenstackhq/runtime";
import { createClient } from './supabase-server';

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

// create an enhanced Prisma client with user context
export async function getPrisma() {
  // const session = await getServerAuthSession();
  // console.log('session', session?.user)
  // return enhance(db, { user: session?.user });
  const supabase = createClient();
  const authObject = await supabase.auth.getUser();
  console.log('authObject', authObject)
  const userId = authObject.data.user?.id;
  return enhance(db, {
    user: authObject ? { id: userId! } : undefined,
  });
}
