import OpenAI from "openai";

export const port = process.env.PORT || 3100;

interface GptConfigInterface {
    model: string,
    role: "system",
    max_tokens: number
}

export const gptConfig: GptConfigInterface = {
    model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
    role: "system",
    max_tokens: parseInt(process.env.MAX_TOKENS || "150")
}

export const openai = new OpenAI();
