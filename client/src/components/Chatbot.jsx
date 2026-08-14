import { useState } from "react";
import { Send, Bot, X, Sparkles } from "lucide-react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! 👋 I'm Mausam's AI Portfolio Assistant. Ask me about her skills, projects, education, achievements or experience.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://ai-portfolio-8xb4.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data.reply ||
            "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "Sorry, I'm unable to connect to the AI server right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* ASK ME BUTTON */}
      {!isOpen && (
        <button
          className="ask-me-button"
          onClick={() => setIsOpen(true)}
          aria-label="Ask Mausam's AI Assistant"
        >
          <span className="ask-me-icon">
            <Sparkles size={18} />
          </span>

          <span className="ask-me-text">Ask Me</span>

          <span className="ask-me-dot"></span>
        </button>
      )}

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="chatbot-container">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <div className="bot-icon">
                <Bot size={20} />
              </div>

              <div>
                <strong>Mausam's AI Assistant</strong>
                <span>Ask me about Mausam</span>
              </div>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.role === "user"
                    ? "user-message"
                    : "assistant-message"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="chat-message assistant-message">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="chatbot-input-area">
            <input
              type="text"
              placeholder="Ask about Mausam..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />

            <button
              onClick={sendMessage}
              disabled={loading || !message.trim()}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;