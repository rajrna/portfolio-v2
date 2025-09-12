import { useState, useEffect } from "react";

export default function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Automatically respects the user's locale and hour format
  const time = now.toLocaleTimeString(
    undefined, // Let browser pick user's locale
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: undefined, // This makes it follow system/browser/user settings!
    }
  );

  return (
    <div
      className="fixed top-5 left-5 z-50 px-5 py-2 text-red-500 font-mono text-xl"
      style={{
        letterSpacing: "0.1em",
        textShadow: "0 0 3px #ff2222, 0 0 16px #911",
        userSelect: "none",
      }}
    >
      {time}
    </div>
  );
}
