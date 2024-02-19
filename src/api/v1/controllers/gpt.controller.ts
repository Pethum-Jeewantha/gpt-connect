import {Request, Response} from "express";

export default class GptController {

    public async createRequest(req: Request, res: Response): Promise<void> {
        try {
            // const gptRequest = new GptRequest(req.body);
            // await gptRequest.save();
            // res.status(201).send(gptRequest);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
