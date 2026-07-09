"use client";

import React, { useState, useRef, useEffect } from "react";
import { Copy } from "@/components/icons";
import { contractAddress } from "@/constants";

const ContractAddress = () => {
  const [copyStatus, setCopyStatus] = useState("idle"); // "idle" | "copied" | "failed"
  const [textToCopy] = useState(contractAddress);
  const timeoutRef = useRef(null);

  const copyText = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyStatus("copied");
      timeoutRef.current = setTimeout(() => setCopyStatus("idle"), 2000);
    } catch (error) {
      setCopyStatus("failed");
      timeoutRef.current = setTimeout(() => setCopyStatus("idle"), 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-white text-black p-4 sm:p-5 rounded-lg shadow-lg border-t-8 border-dashed border-mewdonRed font-sans text-sm sm:text-base border border-gray-300">
      <div className="text-center border-b border-dashed border-gray-400 pb-2.5 mb-3">
        <h4 className="font-extrabold tracking-widest uppercase">MEWDONALD&apos;S INC.</h4>
        <p className="text-xs font-mono text-gray-500 mt-0.5">ORDER #777 - SOLANA CHAIN</p>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center my-3 gap-2 sm:gap-4">
        <span className="font-bold uppercase tracking-wider text-xs text-gray-700">CONTRACT ADDR:</span>
        <span className="inline-block font-mono text-xs sm:text-sm bg-gray-100 px-2 py-1.5 rounded select-all truncate max-w-full sm:max-w-[280px] md:max-w-none border border-gray-200">
          {textToCopy}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mt-4 pt-3 gap-3 border-t border-dashed border-gray-400">
        <div className="text-center sm:text-left">
          <span className="text-[10px] sm:text-xs block text-gray-500 font-bold tracking-wider">TAX: 0% | SLIPPAGE: AUTO</span>
          <span className="font-sans font-black text-mewdonRed text-sm sm:text-base">
            {copyStatus === "copied"
              ? "COPIED TO DOMPET! 🍔"
              : copyStatus === "failed"
              ? "FAILED TO COPY! ❌"
              : "PENDING RECEIPT..."}
          </span>
        </div>
        <button
          onClick={copyText}
          disabled={textToCopy === "COMING SOON"}
          className={`transition duration-200 font-sans font-extrabold text-sm sm:text-base rounded-lg px-4 py-2.5 text-white border flex items-center justify-center gap-2 shadow ${
            textToCopy === "COMING SOON"
              ? "bg-stone-400 text-stone-600 border-stone-500 cursor-not-allowed opacity-60"
              : "bg-mewdonRed hover:bg-mewdonYellow hover:text-black border-black active:scale-95"
          }`}
        >
          <Copy /> COPY TICKET
        </button>
      </div>
    </div>
  );
};

export default ContractAddress;

