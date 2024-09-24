import { useState, useEffect } from "react";

interface CountdownModalProps {
  onCountdownFinish: () => void;
}

const CountdownModal: React.FC<CountdownModalProps> = ({
  onCountdownFinish,
}) => {
  const [count, setCount] = useState<number>(3);

  useEffect(() => {
    if (count === 0) {
      onCountdownFinish();
      return;
    }

    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onCountdownFinish]);

  if (count === 0) {
    return null; // Hide the modal once countdown is done
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="text-white text-center text-[10rem]">
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default CountdownModal;
