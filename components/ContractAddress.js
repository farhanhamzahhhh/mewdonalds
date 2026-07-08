"use client";

import React, { useState } from "react";
import { Copy } from "@/components/icons";
import { contractAddress } from "@/constants";

const ContractAddress = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [textToCopy] = useState(contractAddress);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      setCopySuccess("Failed!");
    }
  };

  return (
    <div className="relative bg-white text-black p-4 rounded-lg shadow-lg border-t-8 border-dashed border-mewdonRed font-mono text-sm sm:text-base border border-gray-300">
      <div className="text-center border-b border-dashed border-gray-400 pb-2 mb-2">
        <h4 className="font-bold tracking-widest uppercase">MEWDONALD&apos;S INC.</h4>
        <p className="text-xs">ORDER #777 - SOLANA CHAIN</p>
      </div>
      
      <div className="flex justify-between items-center my-2 gap-4">
        <span className="font-bold uppercase tracking-wider text-xs">CONTRACT ADDR:</span>
        <span className="font-mono text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded select-all truncate max-w-[240px] md:max-w-none">
          {textToCopy}
        </span>
      </div>

      <div className="flex justify-between items-center mt-3 pt-3 border-t border-dashed border-gray-400">
        <div>
          <span className="text-xs block text-gray-500">TAX: 0% | SLIPPAGE: AUTO</span>
          <span className="font-bold text-mewdonRed">{copySuccess ? "COPIED TO DOMPET!" : "PENDING RECEIPT..."}</span>
        </div>
        <button
          onClick={copyText}
          className="transition duration-200 font-stopbuck text-base rounded-lg px-4 py-2 text-white bg-mewdonRed hover:bg-mewdonYellow hover:text-black border border-black flex items-center gap-2 shadow"
        >
          <Copy /> COPY TICKET
        </button>
      </div>
    </div>
  );
};

export default ContractAddress;

