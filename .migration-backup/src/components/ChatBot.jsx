"use client";

import { Add, Message, Send } from "iconsax-react";
import React, { useState } from "react";

const ChatBot = () => {
  // State to control chat visibility
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState([]);
  const [input, setInput] = useState("");

  // Predefined survey questions
  const questions = [
    "Hi there! What's your name?",
    "How did you hear about us?",
    "What service are you interested in?",
    "Would you like to receive updates?",
  ];

  // Handle sending user responses
  const handleSend = () => {
    if (input.trim() === "") return;
    setResponses((prev) => [
      ...prev,
      { question: questions[step], answer: input },
    ]);
    setInput("");
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all z-50"
      >
        {isOpen ? (
          <Add color="#fff" className="rotate-45" size={32} />
        ) : (
          <Message color="#fff" size={32} />
        )}
      </button>

      {/* Chatbox Container */}
      <div
        className={`fixed bottom-24 right-6 w-80 border border-gray-300 rounded-lg shadow-lg bg-white transform transition-all duration-300 z-50 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat Header */}
        <div className="bg-green-600 text-white p-3 text-center font-bold rounded-t-lg">
          WhatsApp Chatbot Survey
        </div>

        {/* Chat Body */}
        <div className="p-3 bg-[url('/chatbot/whatsapp-bg.webp')] h-96 overflow-y-auto flex flex-col space-y-2">
          {/* Bot Question */}
          {step < questions.length ? (
            <div className="bg-green-200 text-gray-900 p-2 rounded-lg max-w-xs">
              {questions[step]}
            </div>
          ) : (
            <div className="bg-green-200 text-gray-900 p-2 rounded-lg max-w-xs">
              Thank you for completing the survey!
            </div>
          )}

          {/* User Responses */}
          {responses.map((resp, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="bg-green-200 text-gray-900 p-2 rounded-lg max-w-xs">
                {resp.question}
              </div>
              <div className="bg-white border border-gray-300 p-2 rounded-lg max-w-xs self-end">
                {resp.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Input Field */}
        {step < questions.length && (
          <div className="flex items-center border-t border-gray-300 bg-white p-2">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              placeholder="Type your answer..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 flex items-center"
            >
              <Send color="#fff" size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
