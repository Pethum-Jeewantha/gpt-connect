import {Request, Response} from "express";
import {gptConfig, openai} from "../../../config/constant";

export default class ChatController {

    public async createRequest(req: Request, res: Response): Promise<Response> {
        try {
            const {message} = req.body;
            if (!message) return res.status(400).send({error: "Message is required"});

            const completion = await openai.chat.completions.create({
                messages: [{ role: gptConfig.role, content: `${message} in json type` }],
                response_format: {type: "json_object"},
                max_tokens: gptConfig.max_tokens,
                model: gptConfig.model,
            });

            return res.status(200).send(completion.choices);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
