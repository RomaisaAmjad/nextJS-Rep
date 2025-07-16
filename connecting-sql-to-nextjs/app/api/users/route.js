import { getAllUsers,createUser } from "@/controllers/users.controller";
import { asyncWrapper } from "@/middlewares/asyncWrapper.middleware";

export const GET = asyncWrapper(getAllUsers);
export const POST = asyncWrapper(createUser);