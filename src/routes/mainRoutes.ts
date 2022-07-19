import {Request, Response} from "express";
import { MerchantController } from "../controllers/mainController";



export class Routes {
    public MerchantController: MerchantController = new MerchantController();

    public routes(app): void{
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successful!'
            });
        });
        
        app.route('/mcre')
        .post(this.MerchantController.addNewMerchant);

    }
}