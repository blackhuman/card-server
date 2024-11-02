import { enhance } from '@zenstackhq/runtime';
import { db } from './db';
import { getServerAuthSession } from './auth';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react';
import { NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';

interface CreateContextOptions {
  headers: Headers;
}

export const createInnerTRPCContext = async (opts: CreateContextOptions) => {
  // const session = await getServerAuthSession();
  // const prisma = enhance(db, {
  //   user: session?.user?.id ? session?.user : undefined,
  // });
  const authObject = await auth();
  console.log('authObject', authObject)
  const userId = authObject?.userId;
  const prisma = enhance(db, {
    user: authObject ? { id: userId! } : undefined,
  });

  return {
    // session,
    headers: opts.headers,
    prisma,
  };
};

export const createTRPCContext = async (opts: { req: NextRequest }) => {
  // console.log('createTRPCContext', opts.req.headers);
  return await createInnerTRPCContext({
    headers: opts.req.headers,
  });
};

export type Context = typeof createTRPCContext;