"use client";
import React, { FormEvent, useState } from "react";
import HighScoreModalButton from "./OpenHighScoreModalButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// const StartForm = () => {
//   const router = useRouter();
//   const [userName, setUserName] = useState("");
//   localStorage.clear();
//   function onSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     localStorage.setItem("userName", userName);
//     router.push("./game")
//     if (userName.trim()) {
//       router.push(`/game?name=${encodeURIComponent(userName)}`);
//     }
//   }
const StartForm = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    localStorage.clear()
  },[]);
  
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    localStorage.setItem("userName", userName);
    router.push("./game");
  }
  return (
    <>
      <form
        className="flex flex-col items-center gap-2 pb-2"
        onSubmit={onSubmit}
      >
        <button
          className="px-4 py-2 font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition-all "
          type="submit"
        >
          Start Game
        </button>
        <input
          className="text-center p-2 rounded-full border-red-600 text-red-600 border-[2px]"
          placeholder="Input Player Name"
          type="text"
          required
          name="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </form>
      <HighScoreModalButton />
    </>
  );
};

export default StartForm;
