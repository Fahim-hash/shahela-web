import { NextResponse } from 'next/server';
import { MAYA_SYSTEM_PROMPT } from '../../../lib/personality';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
    // route.ts e temperature 0.8 rakho
body: JSON.stringify({
  "model": "llama-3.3-70b-versatile", 
  "messages": [
    { "role": "system", "content": MAYA_SYSTEM_PROMPT },
    ...messages
  ],
  "temperature": 0.85, // Flirty context er jonno ektu high thaka bhalo
  "top_p": 0.9,
})
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      return NextResponse.json(data.choices[0].message);
    } else {
      return NextResponse.json({ role: 'assistant', content: "Jaan, matha ta kaj kortese (ERROR) na ektu por asi?" });
    }
  } catch (error) {
    return NextResponse.json({ role: 'assistant', content: 'Server crash!' });
  }
}