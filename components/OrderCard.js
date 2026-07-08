import React from "react";

const OrderCard = ({ children, order, title, style }) => {
  return (
    <div className={`group relative block min-h-60 w-full ${style} transition-transform hover:scale-105`}>
      <span className="absolute inset-0 bg-mewdonRed rounded-xl border-4 border-black"></span>

      <div className="relative h-full transform p-6 border-4 border-black bg-stone-900 text-white rounded-xl transition-transform -translate-x-2 -translate-y-2 shadow-2xl">
        <div className="absolute -left-6 -top-6 border-4 border-black text-white rounded-full w-16 h-16 flex justify-center items-center text-3xl font-stopbuck bg-mewdonYellow text-shadow-black">
          {order}
        </div>

        <div className="p-2 font-mono">
          <h3 className="text-xl text-center font-stopbuck text-mewdonYellow uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
