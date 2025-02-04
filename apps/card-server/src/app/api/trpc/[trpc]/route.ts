import { createTRPCContext } from "~/server/context";
import { appRouter } from "~/server/routers/_app";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from "next/server";

const handler = (request: NextRequest) => {
  console.log('trpc route')
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: () => createTRPCContext({ req: request }),
    onError: ({ path, error }) => {
      console.error(
        `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
      );
    }
  });
};

export { handler as GET, handler as POST };