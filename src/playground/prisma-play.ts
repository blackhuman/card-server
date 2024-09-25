import { db } from "~/server/db";

const prismaDb = db
const users = await prismaDb.user.findMany()
console.log(users)