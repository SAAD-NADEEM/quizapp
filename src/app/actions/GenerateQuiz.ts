"use server";

import { GoogleGenAI, Type } from "@google/genai";
import { FormTypes } from "../Utils/interfaces";

const ResponseScheme = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      question: {
        type: Type.STRING,
        description:
          "Generate a clear and concise multiple-choice question. Ensure the question is relevant and engaging.",
        nullable: false,
      },
      options: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING, nullable: false },
            isCorrect: { type: Type.BOOLEAN, nullable: false },
          },
        },
        description:
          "Provide four answer choices for the following question. Only one option should be correct, and the rest should be plausible but incorrect.",
        nullable: false,
      },
    },
    required: ["question", "options"],
  },
};

export async function GenQuiz(formData: FormTypes) {
  try {
    const api_key = process.env.GEMINI_API_KEY;
    if (!api_key) throw new Error("No api key present");

    const genai = new GoogleGenAI({ apiKey: api_key });

    const Prompt = `
        Generate ${formData.quizCount} multiple-choice quiz questions based on the following:
      
        Learning Material: ${formData.description}
      
        Topics: ${formData.allTopics.join(", ")}
      
        Requirements:
        - Each question should be clear and relevant
        - Provide 4 options per question
        - Only one correct answer per question
        - Make incorrect answers plausible
        - Format as JSON according to the schema
    `;

    const response = await genai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: Prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: ResponseScheme,
      },
    });

    if (!response.text)
      throw new Error(
        "Error Generating the Quizzes, ensure you provide the correct informations!!"
      );

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Quiz generation failed:", error);
    throw new Error("Failed to generate quiz. Please try again.");
  }
}
