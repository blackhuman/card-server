import { createTRPCReact, createTRPCProxyClient, httpBatchLink } from "@trpc/react-query";
import { createTRPCNext } from '@trpc/next';
import { type AppRouter } from "~/server/routers/_app";

export const trpcReact = createTRPCReact<AppRouter>();
export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc'
    })
  ]
});
export const trpcNext = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc'
        })
      ]
    }
  }
})
