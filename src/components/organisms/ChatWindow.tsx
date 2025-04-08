// src/components/organisms/ChatWindow.tsx
"use client";
import { Input, Spin } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useChat } from "@/hooks/useChat";
import styles from "./ChatWindow.module.scss";
import TextMessage from "../atoms/TextMessage";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

const ChatWindow = () => {
	const { chatItems, sendMessage, loading } = useChat();
	const [input, setInput] = useState("");

	const handleSend = () => {
		if (!input.trim()) return;
		sendMessage(input.trim());
		setInput("");
	};

	return (
		<div className={styles.container}>
			<div className={styles.chatBox}>
				{chatItems.map((item, idx) => {
					if (item.type === "message") {
						return <TextMessage msg={item} key={idx} />;
					}
					if (item.type === "chart") {
						return (
							<div key={idx} className={styles.chartWrap}>
								<ReactECharts
									option={item.option}
									style={{ height: 400, width: "100%" }}
								/>
							</div>
						);
					}
					return null;
				})}
				{loading && <Spin className={styles.loading} />}
			</div>
			<div className={styles.inputWrap}>
				<Input.Search
					placeholder="Ask to draw a chart..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onSearch={handleSend}
					enterButton
					loading={loading}
				/>
			</div>
		</div>
	);
};

export default ChatWindow;
