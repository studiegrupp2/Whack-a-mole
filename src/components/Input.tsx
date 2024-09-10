"use client"
import React, { useState } from 'react'
interface InputProps {
  onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
  value : string;
  disabled?: boolean;
}
const Input: React.FC<InputProps> = ({
  onChange,
  disabled = false
}) => {
  return (
    <div className='flex justify-center items-center  p-2'>
        <input 
        className={`text-center p-2 rounded-full border-red-600 text-red-600 border-[2px] ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          } `}
        placeholder='Input Player Name'
        onChange={onChange}
        >
        </input> 
    </div>
  );
};

export default Input;

