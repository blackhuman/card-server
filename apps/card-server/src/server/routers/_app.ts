import { type Context } from '../context';
import { createRouter } from './generated/routers';
import { initTRPC } from '@trpc/server';

const t = initTRPC.context<Context>().create();

export const appRouter = createRouter(t.router, t.procedure);
export type AppRouter = typeof appRouter;