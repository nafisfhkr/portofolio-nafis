import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { PORTFOLIO_CONTEXT } from "../../../utils/portfolio-context";

export async function POST(req: Request) {
  try {
    // 1. CEK API KEY
    const apiKey = process.env.GEMINI_API_KEY;
    
    // Kalau Key kosong, bot akan lapor
    if (!apiKey) {
      return NextResponse.json({ 
        reply: "⚠️ FATAL ERROR: API Key tidak ditemukan di Server Vercel! Mohon cek menu Settings > Environment Variables." 
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Gunakan model yang tadi berhasil di local
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const { message } = await req.json();

    const prompt = `
      ${PORTFOLIO_CONTEXT}
      User bertanya: "${message}"
      Jawablah:
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error: any) {
    console.error("Error Server:", error);
    
    return NextResponse.json({ 
      reply: `🐞 DEBUG MODE: Terjadi Error! \nPesan: ${error.message}` 
    });
  }
}