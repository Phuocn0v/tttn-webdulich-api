import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const rolesRequire = (roles: String[]) => {
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
            let isRole = false;
            for (let i = 0; i < roles.length; i++) {
                if (roles[i] === user.roles) {
                    isRole = true;
                    break;
                }
            }

            if (!isRole) return res.status(403).json({ message: "Forbidden!" });
            req.body.user = user;
            next();
        });
    }
};

export default { rolesRequire };