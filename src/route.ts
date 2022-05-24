
import { Express, Request, Response } from 'express';
import { createUserHandler, createUserSessionHandler } from './controller/user_controller';
import validateRequest from './middleware/validate_request';
import { createUserSchema , createUserSessionSchema } from "./schema/user_schema";


export default function (app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

    //REGISTER USER
    app.post('/api/users', validateRequest(createUserSchema), createUserHandler);

    //LOGIN USER
    app.post("/api/sessions", validateRequest(createUserSessionSchema), createUserSessionHandler)

}