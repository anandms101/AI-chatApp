import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validate } from "../utils/validators.js";
const userRouter = Router();
userRouter.get("/", getAllUsers);
userRouter.post("/signup", validate(signupValidator), userSignup);
userRouter.post("/login", validate(loginValidator), userSignup);
export default userRouter;
//# sourceMappingURL=user-routes.js.map