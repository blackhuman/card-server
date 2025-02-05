import { type Context } from '../context';
import { initTRPC } from '@trpc/server';

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  echo: publicProcedure
    .query(async () => {
      return {
        echo: 'echo',
      };
    }),
});

export type AppRouter = typeof appRouter;