import { Router } from "express";
import { ILogin, ISignup } from "../../interface/auth";
import account from "../../controller/accountController";
import { hashPassword } from "../../utils/bcrypt";
import * as jwt from "jsonwebtoken";

const authAdminRouter = Router();

authAdminRouter.post("/login", async (req, res) => {
    const loginData: ILogin = req.body;
    const user = await account.checkLogin(loginData.usernameOrEmail, loginData.password, true);
    if (user === -1) {
        res.status(401).json({ message: "Username or email is not existed!" });
        return;
    }
    if (user === -2) {
        res.status(401).json({ message: "Username or email is not existed!" });
        return;
    }
    const token = jwt.sign({ id: user._id, roles: user.roles }, process.env.JWT_PRIVATE_KEY as string, { expiresIn: "1d" });
    res.status(200).json({ token: token });
    return;    
});
export default authAdminRouter;