"use client";
import React from "react";

interface ButtonProps {
  btnText: string;
  onClick: () => void;
  disabled?: boolean;
}
const StartButton: React.FC<ButtonProps> = ({
  btnText,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition-all ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {btnText}
    </button>
  );
};

export default StartButton;
