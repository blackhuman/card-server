import { auth } from '@clerk/nextjs/server';
import { enhance } from "@zenstackhq/runtime";
import { NextRequestHandler } from "@zenstackhq/server/next";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

// create an enhanced Prisma client with user context
async function getPrisma() {
  const session = await getServerAuthSession();
  console.log('session', session?.user)
  // return enhance(db, { user: session?.user });
  const authObject = await auth();
  console.log('authObject', authObject)
  const userId = authObject?.userId;
  return enhance(db, {
    user: authObject ? { id: userId! } : undefined,
  });
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};