
import { validatePassword } from "../service/user_service";
import { Request, Response } from "express";
import {createSession} from "../service/session_service";

export async function createUserSessionHandler(req: Request, res: Response) {

    // validate email and password
    const user = await validatePassword(req.body)

    if(!user){
        return res.status(401).send("Invalid email or password")
    }

    //create user session
    const session = await createSession(user._id,req.get("user-agent") || "" );
    
}