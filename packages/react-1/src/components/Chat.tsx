import type React from "react";
import { type PropsWithChildren, useEffect, useState } from "react";

export interface Message {
	message: JSX.Element;
	isUser: boolean;
}

export const Chat = (props: PropsWithChildren<{ question: JSX.Element }>) => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!props.question) {
			return;
		}

		sendQuestion(props.question);
	}, [props.question]);

	function sendQuestion(input: JSX.Element) {
		setMessages([...messages, { message: input, isUser: true }]);
		setIsLoading(true);

		// Simulated medical function answer
		setTimeout(() => {
			const medicalAnswer = getMedicalAnswer();
			setMessages((prev) => [...prev, { message: <span>{medicalAnswer}</span>, isUser: false }]);
			setIsLoading(false);
		}, 500);

		setInput("");
	}

	function getMedicalAnswer(): string {
		const answers = [
			"Based on the symptoms, it could be a common cold. Rest and stay hydrated.",
			"Your description suggests a possible case of allergies. Consider taking an antihistamine.",
			"It might be a minor infection. If symptoms persist, consult your doctor.",
			"This could be stress-related. Try some relaxation techniques and get enough sleep.",
			"Your symptoms are consistent with a viral infection. Monitor your condition and rest.",
		];
		return answers[Math.floor(Math.random() * answers.length)];
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			sendQuestion(<span>{input}</span>);
		}
	};

	return (
		<div className="r1-flex r1-h-4/6 r1-flex-col r1-bg-gray-100">
			<div className="r1-flex-1 r1-overflow-y-auto r1-p-4">
				{messages.map((message, index) => (
					<div key={index} className={`r1-mb-4 ${message.isUser ? "r1-text-right" : "r1-text-left"}`}>
						<div
							className={`r1-inline-block r1-rounded-lg r1-p-2 ${message.isUser ? "r1-bg-yellow-500 r1-text-white" : "r1-bg-white r1-text-gray-800"}`}
						>
							{message.message}
						</div>
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit} className="r1-border-t r1-border-gray-200 r1-bg-white r1-pt-4">
				<div className="r1-flex r1-gap-2">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="r1-focus:outline-none r1-focus:ring-2 r1-focus:ring-yellow-500 r1-flex-1 r1-border r1-border-gray-300 r1-p-2"
						placeholder="Type your message..."
					/>
					<sl-button
						type="submit"
						loading={isLoading ? true : undefined}
						className="r1-hover:bg-yellow-600 r1-focus:outline-none r1-focus:ring-2 r1-focus:ring-yellow-500 r1-bg-yellow-500 r1-px-4 r1-py-2 r1-text-white"
					>
						<my-icon slot="prefix" icon="chat"></my-icon>
					</sl-button>
				</div>
			</form>
		</div>
	);
};

export default Chat;
