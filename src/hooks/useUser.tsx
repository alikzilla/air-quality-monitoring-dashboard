import { currentUser } from "@clerk/nextjs/server";

export const useUser = async () => {
  const user = await currentUser();

  return user;
};
