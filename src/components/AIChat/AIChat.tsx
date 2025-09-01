import React, { useContext, useState } from "react";
import {
	AiChatBox,
	AiChatForm,
	ChatHeader,
	ChatMessages,
	LoadingIndicator,
} from "./AIChat.styles";
import { VscEyeClosed } from "react-icons/vsc";
import { AppContext } from "../AppWrapper/AppWrapper";
import { LuSendHorizontal } from "react-icons/lu";
import { ImSpinner6 } from "react-icons/im";

interface IAIChatProps {
	closeChatBox: () => void;
}

const AIChat = ({ closeChatBox }: IAIChatProps) => {
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { languageTexts, theme } = useContext(AppContext)!;

	type Message = { role: "system" | "user" | "assistant"; content: string };
	const [messages, setMessages] = useState<Message[]>([]);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		const userMessage: Message = { role: "user", content: input };

		try {
			setIsLoading(true);

			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Typs": "application/json" },
				body: JSON.stringify({ messages: [...messages, userMessage] }),
			});

			if (!res.ok) {
				throw new Error("Request failed");
			}

			const data: { reply?: Message } = await res.json();

			if (!data.reply) {
				throw new Error("There was no reply");
			}

			const reply = data.reply;
			setMessages((prev) => [...prev, userMessage, reply]);
		} catch (err) {
			console.error("Error when trying to submit message", err);
		} finally {
			setIsLoading(false);
			setInput("");
		}
	}

	return (
		<AiChatBox>
			{isLoading && <LoadingIndicator>
					<ImSpinner6/>
				</LoadingIndicator>}
			<div>
				<ChatHeader>
					<button
						onClick={(e) => {
							closeChatBox();
							e.stopPropagation();
						}}
					>
						<VscEyeClosed />
					</button>
					{languageTexts.ai.chatWithAi}
				</ChatHeader>
				<ChatMessages>
					{messages.map((msg, index) => (
						<p
							key={index}
							className={msg.role === "user" ? "user-message" : "agent-message"}
						>
							{" "}
							{msg.content}
						</p>
					))}
				</ChatMessages>
			</div>
			<AiChatForm onSubmit={handleSubmit}>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={languageTexts.ai.textPlaceholder}
				/>
				<button type="submit">
					<LuSendHorizontal color={theme.primaryColor} />
				</button>
			</AiChatForm>
		</AiChatBox>
	);
};

export default AIChat;
