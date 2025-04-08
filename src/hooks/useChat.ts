/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { fetchGeminiResponse } from "@/services/gemini";
import type { EChartsOption } from "echarts";

export type ChatItem =
	| { type: "message"; role: "user" | "error"; text: string }
	| { type: "chart"; option: EChartsOption };

export const useChat = () => {
	const [chatItems, setChatItems] = useState<ChatItem[]>([]);
	const [loading, setLoading] = useState(false);

	const sendMessage = async (msg: string) => {
		setLoading(true);
		setChatItems((prev) => [
			...prev,
			{ type: "message", role: "user", text: msg },
		]);

		try {
			const { chartOption } = await fetchGeminiResponse([msg]);
			if (chartOption) {
				setChatItems((prev) => [
					...prev,
					{ type: "chart", option: chartOption },
				]);
			} else {
				setChatItems((prev) => [
					...prev,
					{
						type: "message",
						role: "error",
						text: "I couldn’t parse chart data. Please try asking with clearer chart details.",
					},
				]);
			}
		} catch (err) {
			setChatItems((prev) => [
				...prev,
				{
					type: "message",
					role: "error",
					text: "Something went wrong. Please try again.",
				},
			]);
		} finally {
			setLoading(false);
		}
	};

	return { chatItems, sendMessage, loading };
};
