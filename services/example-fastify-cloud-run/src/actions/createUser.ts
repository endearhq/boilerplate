import type { User, UserType } from "../../lib/primary";
import { prisma } from "../database";

export async function createUser({
  role,
  first_name,
  last_name,
  brand_id,
}: {
  role: UserType;
  first_name: string;
  last_name: string;
  brand_id: string;
}): Promise<User> {
  const user = await prisma.primary.user.create({
    data: {
      role,
      first_name,
      last_name,
      brand: { connect: { id: brand_id } },
    },
  });

  return user;
}
