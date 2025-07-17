const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
export const GenerateScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Write two different scripts for a 30-second video on the topic: {topic}. Only include the spoken  lines. Do not include any descriptions, camera directions, scene transitions, or bracketed notes. Return the response in the following JSON format:\n\n{\n  \"scripts\": [\n    {\n      \"content\": \"\"\n    },\n    {\n      \"content\": \"\"\n    }\n  ]\n}`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"...\"\n    },\n    {\n      \"content\": \"...\"\n    }\n  ]\n}\n```",
        },
      ],
    },
  ],
});
