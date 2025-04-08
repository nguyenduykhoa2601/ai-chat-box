import React from "react";
import styles from "./TextMessage.module.scss";
import { ChatItem } from "@/hooks/useChat";

interface Props {
	msg: ChatItem;
}

const TextMessage = ({ msg }: Props) => {
	if (msg.type !== "message") return null;

	return (
		<div className={styles.message}>
			<div className={msg.role === "user" ? styles.userMsg : styles.errorMsg}>
				{msg.text}
			</div>
		</div>
	);
};

export default TextMessage;
