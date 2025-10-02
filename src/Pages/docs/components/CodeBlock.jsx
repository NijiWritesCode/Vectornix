import React, { useState } from "react";
import { Copy } from "lucide-react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 w-full">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 text-xs rounded-md 
                   bg-gray-700 text-gray-200 hover:bg-gray-600 transition 
                   dark:bg-gray-600 dark:hover:bg-gray-500"
      >
        {copied ? "✅ Copied" : <><Copy size={14} /> Copy</>}
      </button>

      {/* Code Block */}
      <pre
        className="w-full min-w-full max-w-full bg-gray-900 text-green-400 p-4 pr-14 
                   rounded-lg text-sm font-mono border border-gray-800 dark:border-gray-700 
                   whitespace-pre-wrap break-words"
      >
        <code className="block w-full">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;