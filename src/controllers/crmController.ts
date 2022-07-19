import { Admin } from "../models/mainModel";
import { Request, Response } from 'express';

// const Contact = mongoose.model('Contact', ContactSchema);

export class AdminController{

    public async addNewAdmin (req: Request, res: Response) {
        let newAdmin = new Admin();
        // newAdmin.phone = '123';
        newAdmin.fullname = "Jane Doe";
        newAdmin.gender = "F";
        newAdmin.phone = "5555555555";
        newAdmin.age = 29;
        await newAdmin.save();
        res.status(200).send({
            message: 'GET request successful!'
        });
    }

    // public addNewContact (req: Request, res: Response) {                
    //     let newContact = new Contact(req.body);
    //     newContact.save((err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }    
    //         res.json(contact);
    //     });
    // }

    // public getContacts (req: Request, res: Response) {           
    //     Contact.find({}, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public getContactWithID (req: Request, res: Response) {           
    //     Contact.findById(req.params.contactId, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public updateContact (req: Request, res: Response) {           
    //     Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public deleteContact (req: Request, res: Response) {           
    //     Contact.remove({ _id: req.params.contactId }, (err) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json({ message: 'Successfully deleted contact!'});
    //     });
    // }
}