import axios from "axios";
import type { EChartsOption } from "echarts";
import { parseChartData } from "@/utils/parseChart";
import { SYSTEM_PROMPT } from "@/utils/prompts";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const GEMINI_API =
	"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export const fetchGeminiResponse = async (
	messages: string[]
): Promise<{ reply: string; chartOption: EChartsOption | null }> => {
	const fullPrompt = [SYSTEM_PROMPT, ...messages];

	const res = await axios.post(`${GEMINI_API}?key=${API_KEY}`, {
		contents: fullPrompt.map((msg) => ({
			role: "user",
			parts: [{ text: msg }],
		})),
	});

	const reply = res.data.candidates?.[0]?.content?.parts?.[0]?.text || "";
	const chartOption = parseChartData(reply) as EChartsOption | null;
	return { reply, chartOption };
};
