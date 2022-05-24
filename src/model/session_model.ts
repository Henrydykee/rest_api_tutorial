import mongoose from "mongoose";
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
    }


)