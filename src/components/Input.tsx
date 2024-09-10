"use client"
import React, { useState } from 'react'

// const Input1 = () => {

//   const [playerName, setPlayerName] = useState<string>("")
//   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPlayerName(event.target.value);
//       };  
    
//   return (
//     <div className='flex justify-center items-center  p-2'>
//         <input className='text-center p-2 rounded-full border-slate-900 border-[2px]' placeholder='Input Player Name' onChange={(event) => handleOnChange(event)} ></input> 
//     </div>
//   )
// }

// export default Input1




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
        className='text-center p-2 rounded-full border-slate-900 border-[2px]'
        placeholder='Input Player Name'
        onChange={onChange}
        disabled={disabled}
        >
        </input> 
    </div>
  );
};

export default Input;

