import { PrismaClient } from "../lib/primary";

export const prisma = {
  primary: new PrismaClient(),
};
