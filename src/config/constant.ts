interface GptConfigInterface {
    model: string,
    role: "system"
}

export const gptConfig: GptConfigInterface = {
    model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
    role: "system"
}
