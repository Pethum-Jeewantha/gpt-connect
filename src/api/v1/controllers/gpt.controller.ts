import {Request, Response} from "express";
import OpenAI from "openai";
import {gptConfig} from "../../../config/constant";

const openai = new OpenAI();

export default class GptController {

    public async createRequest(req: Request, res: Response): Promise<void> {
        try {
            const completion = await openai.chat.completions.create({
                messages: [{ role: gptConfig.role, content: "Translate the following English text to French: 'Hello, how are you?'" }],
                model: gptConfig.model,
            });

            res.status(200).send(completion.choices);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
