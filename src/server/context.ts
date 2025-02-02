import { enhance } from '@zenstackhq/runtime';
import { db } from './db';
import { NextRequest } from 'next/server';
import { createClient } from './supabase-server';

interface CreateContextOptions {
  headers: Headers;
}

export const createInnerTRPCContext = async (opts: CreateContextOptions) => {
  // const session = await getServerAuthSession();
  // const prisma = enhance(db, {
  //   user: session?.user?.id ? session?.user : undefined,
  // });
  const supabase = createClient();
  const response = await supabase?.auth.getUser();
  const user = response?.data.user ?? null;
  console.log('user', user)
  const prisma = enhance(db, {
    user: user ? { id: user.id } : undefined,
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