import { OpenAI } from "openai";
import profileData from "../../../components/AIChat/profileData.json";
import { englishTexts } from "@/utils/text";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request){
  const { messages } = await req.json();

  const systemPrompt = `
You are an AI assistant trained to answer questions about ${
		englishTexts.aboutMe.name
	} and their portfolio.
Use the following data to answer questions regarding this user:

${JSON.stringify(profileData)} 

If the user asks something that you cannot answer, say: "I'm not sure about that. You can contact ${
		englishTexts.aboutMe.name
	} directly by clicking the email icon in the About Me section"
  `;

  const chat = await openai.chat.completions.create({
		model: "gpt-5",
		messages: [{ role: "system", content: systemPrompt }, ...messages],
	});

  return Response.json({reply: chat.choices[0].message})
}