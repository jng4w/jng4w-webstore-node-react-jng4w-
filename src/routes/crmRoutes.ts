import {Request, Response} from "express";
import { AdminController } from "../controllers/crmController";



export class Routes {
    public contactController: AdminController = new AdminController();

    public routes(app): void{
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successful!'
            });
        });
        
        app.route('/admin')
        .get(this.contactController.addNewAdmin)
        

        // app.route('/contact')
        // .get(this.contactController.getContacts)
        // .post(this.contactController.addNewContact);

        // app.route('/contact/:contactId')
        // .get(this.contactController.getContactWithID)
        // .put(this.contactController.updateContact)
        // .delete(this.contactController.deleteContact);
    }
}