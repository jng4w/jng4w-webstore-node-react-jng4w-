import { Merchant } from "../models/mainModel";
import { Request, Response } from 'express';

// const Contact = mongoose.model('Contact', ContactSchema);

export class MerchantController{

    public async addNewMerchant (req: Request, res: Response) {
        try {
            let newMerchant = new Merchant();
            if(req.body.msgId=="MCRE")
                newMerchant.create(req.body.body);
            
            res.status(200).send({
                msgId : req.body.msgId,
                type : "RES",
                header : req.body.header,
                body : {
                    resultCd: 0
                }
            });
        } catch (error) {
            console.log(error);
            res.status(200).send({
                msgId : req.body.msgId,
                type : "RES",
                header : req.body.header,
                body : {
                    resultCd: 417
                }
            });
        }
    }
}