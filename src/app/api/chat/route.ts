import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { PORTFOLIO_CONTEXT } from "../../../utils/portfolio-context";

export async function POST(req: Request) {
  try {
    // 1. Ambil API Key
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key belum disetting" }, 
        { status: 500 }
      );
    }

    // 2. Setup Google AI (Model Gratis: gemini-1.5-flash)
    const genAI = new GoogleGenerativeAI(apiKey);
   const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const { message } = await req.json();

    // 3. Gabungkan Data Otak + Pertanyaan User
    const prompt = `
      ${PORTFOLIO_CONTEXT}
      
      User bertanya: "${message}"
      
      Jawablah sesuai peranmu:
    `;

    // 4. Minta Jawaban ke AI
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error("Error AI:", error);
    return NextResponse.json(
      { reply: "Maaf, server AI sedang sibuk. Coba lagi nanti ya." }, 
      { status: 500 }
    );
  }
}