import { NextRequestHandler } from "@zenstackhq/server/next";
import { getPrisma } from "~/server/db";

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};