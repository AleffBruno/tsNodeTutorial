import * as mongoose from 'mongoose';
import {ContactSchema} from '../models/crmModel';
import {Request,Response} from 'express';

const Contact = mongoose.model('Contact',ContactSchema);

export class ContactController {

    public addNewContact(req: Request,res: Response) {
        let newContact = new Contact(req.body);

        newContact.save((err,contact) => {
            if(err) {
                res.send(err);
                return;
            }
            res.json(contact);
        });
    }

    public getContact(req: Request,res: Response) {
        Contact.find({},(err,contact) => {
            if(err) {
                res.send(err);
                return;
            }
            res.json(contact);
        });
    }

    public getContactWithId(req: Request,res: Response) {
        Contact.findById(req.params.contactId,(err,contact) => {
            if(err) {
                res.send(err);
                return;
            }
            res.json(contact);
        });
    }

    public updateContact(req: Request,res: Response) {
        //esse new true 
        Contact.findByIdAndUpdate({_id: req.body.contactId},req.body,{ new: true },(err,contact) => {
            if(err) {
                res.send(err);
                return;
            }
            res.json(contact);
        })
    }

    public deleteContact (req: Request, res: Response) {      
        Contact.deleteOne({_id: req.params.contactId},(err) => {
            if(err) {
                res.send(err);
                return;
            }
            res.send("deletado com sucesso");
        }) 

        // Contact.remove({ _id: req.params.contactId }, (err, contact) => {
        //     if(err){
        //         res.send(err);
        //     }
        //     res.json({ message: 'Successfully deleted contact!'});
        // });
    }

    

}