export default function ScrollIndicator() {
  return (
    <div className="fixed right-0 bottom-32 flex flex-col items-start text-gray-400 text-xs tracking-widest">
      <span className="uppercase rotate-90 origin-left">
        scroll to see more
      </span>
      <div className="ml-1.5 mt-4">
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
