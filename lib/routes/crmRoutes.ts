import {Request,Response} from 'express';
import * as express from 'express';

export class Routes {
    public routes(app : express.Application) : void {

        app.route('/')
        .get((req:Request,res:Response) => {
            res.status(200).send({
                message: 'Sucesso no get'
            })
        })

        //Contact
        app.route('/contact')
        .get((req: Request,res: Response) => {
            res.status(200).send({
                message:'Get request contact'
            })
        })
        .post((req: Request,res: Response) => {
            res.status(200).send({
                message: 'Post contact'
            })
        });

        //Contact detail
        app.route('/contact/:contactId')
        .get((req: Request,res: Response) => {
            res.status(200).send({
                message: 'get request ID'
            })
        })
        .put((req: Request, res: Response) => {
            res.status(200).send({
                message: 'PUT request ID'
            })
        })
        .delete((req: Request, res: Response) => {
            res.status(200).send({
                message: 'DELETE request ID'
            })
        });

    }
}