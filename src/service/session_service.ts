
import { LeanDocument } from "mongoose";
import { config } from "process";
import Session, {SessionDocument} from "../model/session_model";
import { UserDocument } from "../model/user_model";

export async function createSession(userId: string, userAgent: string) {
    const session = await Session.create({user: userId, userAgent});
    return session.toJSON();
}

export  function createAccessToken({user, session}:{
    user: 
        |Omit<UserDocument, "password">
        |LeanDocument<Omit<UserDocument, "password">>
    session:
        |Omit<SessionDocument, "password">
        |LeanDocument<Omit<SessionDocument, "password">>  
}) {
    // BUILD AND RETURN NEW ACESSTOKEN
    const accessToken = sign(
        {...user, session: session._id},
        {expiresIn: config.get("accessToken")}
    )

    return accessToken
    
}