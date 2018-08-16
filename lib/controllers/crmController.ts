

import {Request,Response} from 'express';



export class ContactController {

    public addNewContact(req: Request,res: Response) {
       
    }

    public getContact(req: Request,res: Response) {
       
    }

    public getContactWithId(req: Request,res: Response) {
        
    }

    public updateContact(req: Request,res: Response) {
        //esse new true 
        
    }

    public deleteContact (req: Request, res: Response) {      
        

        // Contact.remove({ _id: req.params.contactId }, (err, contact) => {
        //     if(err){
        //         res.send(err);
        //     }
        //     res.json({ message: 'Successfully deleted contact!'});
        // });
    }

    

}