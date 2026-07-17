"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Button = ({ href, children, variant = 'primary', className = '' }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = "px-8 py-4 font-bold uppercase tracking-wider rounded-lg transition-all text-center inline-block";
  
  const variants = {
    primary: "bg-pccGold text-[#0B0B0B] hover:bg-white glow-gold-hover",
    outline: "bg-transparent border border-pccGold/50 text-pccGold hover:bg-pccGold/10",
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      className={classes}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
