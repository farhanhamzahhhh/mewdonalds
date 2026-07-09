"use client";

import React, { useState, useEffect } from "react";

const Countdown = () => {
  // Target: July 14, 2026 at 11:00:00 AM local time (+07:00)
  const targetDate = new Date("2026-07-14T11:00:00+07:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mx-auto mt-8 bg-black border-4 border-mewdonRed rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
      {/* LED panel matrix pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#db0007_1px,transparent_1px)] [background-size:8px_8px]"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h4 className="font-sans font-extrabold text-mewdonYellow text-center text-lg sm:text-xl tracking-wider mb-4 animate-pulse">
          🍳 KITCHEN PREP TIME / GRAND LAUNCH IN: 🍟
        </h4>

        {isExpired ? (
          <p className="font-sans font-black text-mewdonYellow text-3xl text-center tracking-widest py-2 animate-bounce">
            🔥 NOW SERVED! 🔥
          </p>
        ) : (
          <div className="flex gap-3 sm:gap-4 justify-center items-center">
            {timeBlocks.map((block, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <span className="text-mewdonRed text-2xl sm:text-4xl font-bold animate-pulse self-start mt-2">
                    :
                  </span>
                )}
                <div className="flex flex-col items-center">
                  <div className="bg-stone-900 border-2 border-stone-700 rounded-lg w-12 sm:w-16 h-14 sm:h-20 flex justify-center items-center shadow-inner relative">
                    <span className="font-sans text-2xl sm:text-4xl font-extrabold text-mewdonRed tracking-tight">
                      {String(block.value).padStart(2, "0")}
                    </span>
                    {/* Retro physical divider line across LED slots */}
                    <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/50"></div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-stone-400 font-bold uppercase mt-2 tracking-wider">
                    {block.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Countdown;
