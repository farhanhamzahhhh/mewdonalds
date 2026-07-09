import React from "react";

const OrderCard = ({ children, order, title, style }) => {
  return (
    <div className={`group relative block min-h-44 w-full max-w-xs sm:max-w-sm ${style} transition-transform hover:scale-105`}>
      <span className="absolute inset-0 bg-mewdonRed rounded-xl border-4 border-black"></span>

      <div className="relative h-full transform p-4 sm:p-5 border-4 border-black bg-stone-900 text-white rounded-xl transition-transform -translate-x-2 -translate-y-2 shadow-2xl">
        <div className="absolute -left-4 -top-4 border-4 border-black text-white rounded-full w-12 h-12 flex justify-center items-center text-xl font-stopbuck bg-mewdonYellow text-shadow-black">
          {order}
        </div>

        <div className="p-1 font-mono">
          <h3 className="text-lg text-center font-stopbuck text-mewdonYellow uppercase tracking-wider mb-3 border-b border-stone-800 pb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
