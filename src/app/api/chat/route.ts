import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PORTFOLIO_CONTEXT } from '../../../utils/portfolio-context';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    
    const prompt = `
      ${PORTFOLIO_CONTEXT}

      Pertanyaan pengunjung: "${message}"
      Jawaban asisten:
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });
  } catch (error) {
    return NextResponse.json({ error: "Gagal merespon permintaan AI" }, { status: 500 });
  }
}