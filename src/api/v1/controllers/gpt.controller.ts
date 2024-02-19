import {Request, Response} from "express";
import OpenAI from "openai";
import {gptConfig} from "../../../config/constant";

const openai = new OpenAI();

export default class GptController {

    public async createRequest(req: Request, res: Response): Promise<Response> {
        try {
            const {message} = req.body;
            if (!message) return res.status(400).send({error: "Message is required"});

            const completion = await openai.chat.completions.create({
                messages: [{ role: gptConfig.role, content: message }],
                model: gptConfig.model,
            });

            return res.status(200).send(completion.choices);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
