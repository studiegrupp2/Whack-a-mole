"use client";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const Input: React.FC<InputProps> = ({ onChange }) => {
  return (
    <div className="flex justify-center items-center  p-2">
      <input
        className="text-center p-2 rounded-full border-red-600 text-red-600 border-[2px]"
        placeholder="Input Player Name"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
