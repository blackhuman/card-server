import { NextRequestHandler } from "@zenstackhq/server/next";
import { getPrisma } from "~/server/db";

const handler = NextRequestHandler({ getPrisma, useAppDir: true });
const GET: typeof handler = (request, context) =>  {
  console.log('request.url:', request.url)
  return handler(request, context);
}

export {
  handler as DELETE,
  GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};