import { useEffect, useState } from "react";

const messages = [
  "Loading modules...",
  "Initializing sequence...",
  "Calibrating flux capacitor...",
  "Installing AI core...",
  "Decrypting data packets...",
  "Starting mainframe...",
];

export default function Loading() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let messageTimeout;

    if (typing) {
      const nextChar = messages[messageIndex].slice(
        0,
        currentMessage.length + 1
      );
      typingTimeout = setTimeout(() => {
        setCurrentMessage(nextChar);
        if (nextChar.length === messages[messageIndex].length) {
          setTyping(false);
        }
      }, 80);
    } else {
      messageTimeout = setTimeout(() => {
        setTyping(true);
        setMessageIndex((messageIndex + 1) % messages.length);
        setCurrentMessage("");
      }, 1200);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(messageTimeout);
    };
  }, [currentMessage, typing, messageIndex]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 select-none">
      <div className="font-mono text-red-500 text-2xl md:text-3xl flex gap-2">
        <span>{currentMessage}</span>
        <span className="animate-blink">|</span>
      </div>
      <div className="mt-8 text-sm text-red-600 opacity-70 font-mono tracking-widest">
        v2.1.3-beta - © Raj Rana
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
}
