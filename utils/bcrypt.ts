import {genSalt, hash, compare} from "bcrypt";

async function hashPassword(password: string) {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
}

async function comparePassword(password: string, hashedPassword: string) {
    const isMatch = await compare(password, hashedPassword);
    return isMatch;
}

export { hashPassword, comparePassword };
