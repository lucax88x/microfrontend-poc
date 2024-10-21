import React, { useState } from "react";

interface Message {
  text: string;
  isUser: boolean;
}

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setIsLoading(true);

      const apiUrl = "https://api.chucknorris.io/jokes/random";
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const joke = data.value;
          setMessages((prev) => [...prev, { text: joke, isUser: false }]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsLoading(false);
        });

      setInput("");
    }
  };

  return (
    <div className="r1-flex r1-flex-col r1-h-4/6 r1-bg-gray-100">
      <div className="r1-flex-1 r1-overflow-y-auto r1-p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`r1-mb-4 ${message.isUser ? "r1-text-right" : "r1-text-left"}`}
          >
            <div
              className={`r1-inline-block r1-p-2 r1-rounded-lg ${message.isUser ? "r1-bg-yellow-500 r1-text-white" : "r1-bg-white r1-text-gray-800"}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="r1-p-4 r1-bg-white r1-border-t r1-border-gray-200"
      >
        <div className="r1-flex r1-gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="r1-flex-1 r1-p-2 r1-border r1-border-gray-300 r1-focus:outline-none r1-focus:ring-2 r1-focus:ring-yellow-500"
            placeholder="Type your message..."
          />
          <sl-button
            type="submit"
            loading={isLoading ? true : undefined}
            className="r1-bg-yellow-500 r1-text-white r1-px-4 r1-py-2 r1-hover:bg-yellow-600 r1-focus:outline-none r1-focus:ring-2 r1-focus:ring-yellow-500"
          >
            <my-icon slot="prefix" icon="chat"></my-icon>
          </sl-button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
