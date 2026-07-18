"use client";

import React, { useState } from "react";

const ClipboardCopy = ({ textToCopy, label = "CA:" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-2 bg-[#111] border border-[#333] rounded-lg p-2 w-full max-w-md">
      <div className="flex items-center gap-2 overflow-hidden flex-1">
        <span className="text-xs text-hbaoCream/50 uppercase tracking-widest pl-2 whitespace-nowrap">{label}</span>
        <code className="text-sm font-mono text-hbaoCream/80 truncate">{textToCopy}</code>
      </div>
      <button
        onClick={handleCopy}
        className="bg-[#222] hover:bg-[#333] text-hbaoCream/70 hover:text-hbaoGold px-4 py-2 rounded text-sm transition-colors whitespace-nowrap flex-shrink-0"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default ClipboardCopy;
