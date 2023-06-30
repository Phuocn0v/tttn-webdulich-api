import { Router } from "express";
import { ILogin, ISignup } from "../interface/auth";
import account from "../controller/account";
import { hashPassword } from "../utils/bcrypt";
import * as jwt from "jsonwebtoken";

const router = Router();

router.post("/login", async (req, res) => {
    const loginData: ILogin = req.body;
    const user = await account.checkLogin(loginData.usernameOrEmail, loginData.password);
    if (user === -1) {
        res.status(401).json({ message: "Username or email is not existed!" });
        return;
    }
    if (user === -2) {
        res.status(401).json({ message: "Username or email is not existed!" });
        return;
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_PRIVATE_KEY as string, { expiresIn: "1d" });
    res.status(200).json({ token: token });
    return;    
});

router.post("/register", async (req, res) => {
    const signupData: ISignup = req.body;
    const valid = await account.checkValidSignup(signupData.username, signupData.email);
    switch (valid) {
        case -1:
            res.status(400).json({ message: "Username is already taken!" });
            return;
        case -2:
            res.status(400).json({ message: "Email is already taken!" });
            return;
        default:
            const hashedPassword: string = await hashPassword(signupData.password);
            await account.createAccount(signupData.username, hashedPassword, signupData.email, signupData.firstName, signupData.lastName);
            res.status(200).json({ message: "Register successfully!" });
            break;
    }
});

export default router;