import {Request,Response} from 'express';
import * as express from 'express';
import { ContactController } from '../controllers/crmController';
import { PhotoController } from '../controllers/photoController';

export class Routes {
    public contactController : ContactController = new ContactController();
    public photoController : PhotoController = new PhotoController();

    public routes(app : express.Application) : void {

        app.route('/contact')
        .post(this.contactController.addNewContact)
        .get(this.contactController.getContact);

        app.route('/contact/:contactId')
        .get(this.contactController.getContactWithId)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact);


        app.route('/photo')
        .post(this.photoController.savePhoto)
        .get(this.photoController.getAllPhotos);

        
        app.route('/photo/:id')
        .put(this.photoController.updatePhoto);
        

        app.route('/photo/auto')
        .get(this.photoController.autoGenerateProcess);






        //OLD ROUTES, STAY HERE TO SERVE AS EXAMPLE
        // app.route('/')
        // .get((req:Request,res:Response) => {
        //     res.status(200).send({
        //         message: 'Sucesso no get'
        //     })
        // })

        // //Contact
        // app.route('/contact')
        // .get((req: Request,res: Response) => {
        //     res.status(200).send({
        //         message:'Get request contact'
        //     })
        // })
        // .post((req: Request,res: Response) => {
        //     res.status(200).send({
        //         message: 'Post contact'
        //     })
        // });

        // //Contact detail
        // app.route('/contact/:contactId')
        // .get((req: Request,res: Response) => {
        //     res.status(200).send({
        //         message: 'get request ID'
        //     })
        // })
        // .put((req: Request, res: Response) => {
        //     res.status(200).send({
        //         message: 'PUT request ID'
        //     })
        // })
        // .delete((req: Request, res: Response) => {
        //     res.status(200).send({
        //         message: 'DELETE request ID'
        //     })
        // });

    }
}