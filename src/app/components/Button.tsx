"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ButtonProps {
  name: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  borderColor?: string;
  navigateTo?: string;
}

const Button: React.FC<ButtonProps> = ({
  name,
  width = "auto",
  height = "auto",
  backgroundColor = "#f3f4f6",
  textColor = "#000",
  borderRadius = "6px",
  borderColor = "#000",
  navigateTo = "/",
}) => {
  const [hoverPosition, setHoverPosition] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100 + "%";
    const y = ((e.clientY - top) / height) * 100 + "%";
    setHoverPosition({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    router.push(navigateTo);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative overflow-hidden border-2 cursor-pointer transition-all duration-300"
      style={{
        width,
        height,
        backgroundColor: isHovered ? "black" : backgroundColor,
        color: isHovered ? "white" : textColor,
        borderRadius,
        border: `2px solid ${borderColor}`,
        position: "relative",
      }}
    >
      {/* Ripple Effect */}
      {isHovered && (
        <motion.div
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }} // Smooth ripple effect
          className="absolute w-32 h-32 bg-white rounded-full"
          style={{
            top: hoverPosition.y,
            left: hoverPosition.x,
            transform: "translate(-50%, -50%)",
            mixBlendMode: "difference", // Creates a cool effect on black background
          }}
        />
      )}

      <span className="relative z-10">{name}</span>
    </motion.button>
  );
};

export default Button;
