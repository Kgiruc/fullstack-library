import express from "express"
import {
    getRegister,
    getLogin,
    getLogout,
} from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.post('/register', getRegister);
userRouter.post('/login', getLogin);
userRouter.post('/logout', getLogout);

export default userRouter;