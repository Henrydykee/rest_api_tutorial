import mongoose from "mongoose";
import { boolean } from "yup";
import {UserDocument} from "./user_model"

export interface SessionDocument extends mongoose.Document{
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string
    createdAt: Date;
    updatedAt: Date;
}

const SessionSchema = new mongoose.Schema(
    {
           user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}, 
           valid: {type: boolean, default: true},
           userAgent: {type: String}
    },
    {
        timestamps: true
    }
)

const User = mongoose.model<SessionDocument>("session",SessionSchema);

export default User;