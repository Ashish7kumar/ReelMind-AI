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
export const GenerateImageScript=model.startChat({
  generationConfig,
  history:[
    {
      role:"user",
      parts:[
        {text:`Generate Image prompt of {style} style with all deatils for each scene for 30 seconds video:script:{script}
- Just Give specifying image prompt depends on the story line
- do not give camera angle image prompt
- Follow the Following schema and return JSON data (Max 4-5 Images)
[
  {
    imagePrompt: '',
    sceneContent: '<Script Content>'
  }
]`}]

    },
    {
      role:"model",
      parts: [
        {
          text: "```json\n{\n  \"imagePrompt\": [\n    {\n      \"sceneContent\": \"...\"\n    }]}\n```",
        },
      ],
    }
  ]

})