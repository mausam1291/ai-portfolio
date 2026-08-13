import { useState } from "react";
import {
  Send,
  Bot,
  X,
  Sparkles,
  MessageCircle,
  Minimize2,
} from "lucide-react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! 👋 I'm Mausam's AI Portfolio Assistant. Ask me anything about her skills, projects, education, achievements, or experience.",
    },
  ]);

  const suggestedQuestions = [
    "What are Mausam's skills?",
    "Tell me about her projects",
    "What is her AI experience?",
    "Does she know Spring Boot?",
  ];

  const sendMessage = async (question = null) => {
    const userMessage = (question || message).trim();

    if (!userMessage || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("AI server returned an error");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data.reply ||
            "Sorry, I couldn't generate a response right now.",
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I couldn't connect to the AI server right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating AI Button */}
      {!isOpen && (
        <button
          className="ai-floating-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Mausam AI Assistant"
        >
          <div className="ai-button-glow"></div>

          <div className="ai-button-icon">
            <Bot size={28} />
          </div>

          <span className="ai-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-header-left">
              <div className="ai-avatar">
                <Bot size={22} />
                <span className="online-dot"></span>
              </div>

              <div className="ai-header-info">
                <div className="ai-header-title">
                  Mausam's AI Assistant
                  <Sparkles size={14} />
                </div>

                <div className="ai-header-status">
                  <span></span>
                  Online • Powered by AI
                </div>
              </div>
            </div>

            <div className="ai-header-actions">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Minimize chatbot"
              >
                <Minimize2 size={18} />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="ai-chat-body">
            {messages.length === 1 && (
              <div className="ai-welcome">
                <div className="welcome-icon">
                  <Sparkles size={25} />
                </div>

                <h3>Hey there! 👋</h3>

                <p>
                  I'm Mausam's AI assistant. Ask me anything about her
                  professional background.
                </p>

                <div className="suggested-title">
                  Try asking
                </div>

                <div className="suggested-questions">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => sendMessage(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="messages-list">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message-row ${
                    msg.role === "user"
                      ? "message-row-user"
                      : "message-row-assistant"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="message-avatar">
                      <Bot size={15} />
                    </div>
                  )}

                  <div
                    className={`message-bubble ${
                      msg.role === "user"
                        ? "user-bubble"
                        : "assistant-bubble"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="message-row message-row-assistant">
                  <div className="message-avatar">
                    <Bot size={15} />
                  </div>

                  <div className="typing-bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <div className="ai-input-wrapper">
            <div className="ai-input-box">
              <input
                type="text"
                placeholder="Ask about Mausam..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />

              <button
                onClick={() => sendMessage()}
                disabled={!message.trim() || loading}
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </div>

            <div className="ai-input-footer">
              <span>
                <Sparkles size={11} />
                AI Portfolio Assistant
              </span>

              <span>Enter to send</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* =========================
           FLOATING AI BUTTON
        ========================= */

        .ai-floating-button {
          position: fixed;
          right: 28px;
          bottom: 28px;
          width: 66px;
          height: 66px;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            #6366f1,
            #7c3aed
          );
          box-shadow:
            0 12px 35px rgba(79, 70, 229, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.2) inset;
          transition: all 0.3s ease;
        }

        .ai-floating-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow:
            0 18px 45px rgba(79, 70, 229, 0.45),
            0 0 35px rgba(99, 102, 241, 0.25);
        }

        .ai-button-icon {
          position: relative;
          z-index: 2;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
        }

        .ai-button-glow {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.2);
          filter: blur(15px);
          animation: aiGlow 2.5s ease-in-out infinite;
        }

        .ai-pulse {
          position: absolute;
          right: 3px;
          top: 3px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #34d399;
          border: 3px solid white;
          z-index: 4;
        }

        @keyframes aiGlow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(0.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        /* =========================
           CHAT WINDOW
        ========================= */

        .ai-chat-window {
          position: fixed;
          right: 28px;
          bottom: 28px;
          width: 390px;
          height: 610px;
          max-height: calc(100vh - 45px);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.97);
          border: 1px solid rgba(229, 231, 235, 0.9);
          box-shadow:
            0 30px 80px rgba(15, 23, 42, 0.22),
            0 10px 30px rgba(79, 70, 229, 0.08);
          backdrop-filter: blur(20px);
          animation: chatOpen 0.3s ease;
        }

        @keyframes chatOpen {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* =========================
           HEADER
        ========================= */

        .ai-chat-header {
          min-height: 76px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(129, 140, 248, 0.35),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #111827,
              #1e1b4b
            );
          color: white;
        }

        .ai-header-left {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .ai-avatar {
          width: 43px;
          height: 43px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.13);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #c7d2fe;
        }

        .online-dot {
          position: absolute;
          right: -2px;
          bottom: -2px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #34d399;
          border: 2px solid #111827;
        }

        .ai-header-title {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
          font-weight: 750;
        }

        .ai-header-title svg {
          color: #a5b4fc;
        }

        .ai-header-status {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 4px;
          color: #a5b4fc;
          font-size: 10px;
        }

        .ai-header-status span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #34d399;
        }

        .ai-header-actions {
          display: flex;
          gap: 4px;
        }

        .ai-header-actions button {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 9px;
          background: transparent;
          color: #c7d2fe;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .ai-header-actions button:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* =========================
           CHAT BODY
        ========================= */

        .ai-chat-body {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          padding: 18px;
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(99, 102, 241, 0.06),
              transparent 35%
            ),
            #f9fafb;
        }

        .ai-chat-body::-webkit-scrollbar {
          width: 5px;
        }

        .ai-chat-body::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background: #d1d5db;
        }

        /* =========================
           WELCOME
        ========================= */

        .ai-welcome {
          text-align: center;
          padding: 8px 5px 18px;
        }

        .welcome-icon {
          width: 54px;
          height: 54px;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 17px;
          color: #6366f1;
          background: #eef2ff;
          border: 1px solid #e0e7ff;
        }

        .ai-welcome h3 {
          margin: 0 0 7px;
          color: #111827;
          font-size: 17px;
        }

        .ai-welcome p {
          max-width: 290px;
          margin: 0 auto 18px;
          color: #6b7280;
          font-size: 12px;
          line-height: 1.6;
        }

        .suggested-title {
          margin-bottom: 8px;
          color: #9ca3af;
          text-align: left;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .suggested-questions {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .suggested-questions button {
          padding: 10px 12px;
          text-align: left;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          background: white;
          color: #374151;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .suggested-questions button:hover {
          color: #4f46e5;
          border-color: #c7d2fe;
          background: #eef2ff;
          transform: translateX(3px);
        }

        /* =========================
           MESSAGES
        ========================= */

        .messages-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .message-row {
          display: flex;
          align-items: flex-end;
          gap: 7px;
        }

        .message-row-user {
          justify-content: flex-end;
        }

        .message-row-assistant {
          justify-content: flex-start;
        }

        .message-avatar {
          flex-shrink: 0;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #6366f1;
          background: #eef2ff;
          border: 1px solid #e0e7ff;
        }

        .message-bubble {
          max-width: 78%;
          padding: 10px 13px;
          border-radius: 15px;
          font-size: 12px;
          line-height: 1.6;
          word-break: break-word;
          white-space: pre-wrap;
        }

        .assistant-bubble {
          color: #374151;
          background: white;
          border: 1px solid #e5e7eb;
          border-bottom-left-radius: 5px;
        }

        .user-bubble {
          color: white;
          background: linear-gradient(
            135deg,
            #6366f1,
            #4f46e5
          );
          border-bottom-right-radius: 5px;
          box-shadow: 0 5px 15px rgba(79, 70, 229, 0.15);
        }

        /* =========================
           TYPING
        ========================= */

        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 14px;
          border-radius: 15px;
          border-bottom-left-radius: 5px;
          background: white;
          border: 1px solid #e5e7eb;
        }

        .typing-bubble span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #818cf8;
          animation: typing 1.2s infinite ease-in-out;
        }

        .typing-bubble span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .typing-bubble span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }

          30% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }

        /* =========================
           INPUT
        ========================= */

        .ai-input-wrapper {
          padding: 12px 14px 10px;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .ai-input-box {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 5px 5px 13px;
          border-radius: 13px;
          border: 1px solid #d1d5db;
          background: #f9fafb;
          transition: all 0.2s ease;
        }

        .ai-input-box:focus-within {
          border-color: #818cf8;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.08);
          background: white;
        }

        .ai-input-box input {
          flex: 1;
          min-width: 0;
          border: none;
          outline: none;
          background: transparent;
          color: #111827;
          font-size: 12px;
        }

        .ai-input-box input::placeholder {
          color: #9ca3af;
        }

        .ai-input-box button {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 9px;
          color: white;
          background: #4f46e5;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ai-input-box button:hover:not(:disabled) {
          background: #4338ca;
          transform: scale(1.05);
        }

        .ai-input-box button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .ai-input-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 7px;
          color: #9ca3af;
          font-size: 9px;
        }

        .ai-input-footer span:first-child {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 520px) {
          .ai-floating-button {
            right: 18px;
            bottom: 18px;
            width: 60px;
            height: 60px;
          }

          .ai-chat-window {
            right: 10px;
            bottom: 10px;
            width: calc(100vw - 20px);
            height: calc(100vh - 20px);
            max-height: none;
            border-radius: 20px;
          }
        }
      `}</style>
    </>
  );
}

export default Chatbot;