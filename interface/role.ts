import { Schema } from "mongoose";

export default interface IRole {
    _id?: string;
    name: string;
    description: string;
}