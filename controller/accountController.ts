import { IAccount } from "../interface/user";
import accountSchema from "../schema/account";
import { comparePassword } from "../utils/bcrypt";
import mongoose from "mongoose";

async function checkLogin(usernameOrEmail: string, password: string) {
  // Return -1 when username or email not found
  // -2 when password not match
  const res: IAccount | null = await accountSchema.findOne({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  });
  if (!res) {
    return -1;
  }else {
    const isMatch = await comparePassword(password, res.password);
    if (!isMatch) return -2;
    return res;
  }
}

async function checkValidSignup(username: string, email: string) {
  // Return -1 when username is already taken
  // -2 when email is already taken
  // 0 when valid
  let res = await accountSchema.findOne({ username: username });
  if (res) return -1;
  res = await accountSchema.findOne({ email: email });
  if (res) return -2;
  return 0;
}

async function createAccount(username: string, password: string, email: string, firstName: string, lastName: string) {
  const account = new accountSchema({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    password: password,
    email: email,
    firstName: firstName,
    lastName: lastName,
    role: ["user"],
  });
  await account.save();
}

export default { checkLogin, checkValidSignup, createAccount };
