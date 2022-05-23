
import {Express, Request, Response} from 'express';
import { createUserHandler } from './controller/user_controller';
import  validateRequest from './middleware/validate_request';


export default function(app: Express){
    app.get('/healthcheck',(req:Request, res:Response) => res.sendStatus(200))

   // app.post('/api/users',validateRequest(createUserSchema), createUserHandler)

}