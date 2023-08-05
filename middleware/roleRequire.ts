import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

async function userRequire() {
    return (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(' ')[1];

        if (token == null) {
            return res.status(401).json({ message: "Token is required!" });
        }

        jwt.verify(token, process.env.JWT_PRIVATE_KEY as string, (err: any, user: any) => {
            if (err) {
                return res.status(403).json({ message: "Token is invalid!" });
            }
            const isRole = user.roles.includes("user");

            if (!isRole) return res.status(403).json({ message: "Forbidden!" });
            req.body.user = user;
            next();
        });
    }
};

async function adminRequire() {
    return (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(' ')[1];

        if (token == null) {
            return res.status(401).json({ message: "Token is required!" });
        }

        jwt.verify(token, process.env.JWT_PRIVATE_KEY as string, (err: any, user: any) => {
            if (err) {
                return res.status(403).json({ message: "Token is invalid!" });
            }
            const isRole = user.roles.includes("admin");

            if (!isRole) return res.status(403).json({ message: "Forbidden!" });
            req.body.user = user;
            next();
        });
    }
};



export default { userRequire, adminRequire };
