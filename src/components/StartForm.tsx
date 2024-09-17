"use client"
import React, { FormEvent } from 'react'
import HighScoreModalButton from './OpenHighScoreModalButton'
import { useRouter } from "next/navigation";


const StartForm = () => {
    const router = useRouter()
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        // const formData = new FormData(event.currentTarget)
        // const response = await fetch('/api/submit', {
        //   method: 'POST',
        //   body: formData,
          
        // })
        
        router.push("/game");
    }
     
      return (
        <>
        <form className='flex flex-col items-center gap-2 pb-2' onSubmit={onSubmit}>
          <button className='px-4 py-2 font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition-all ' 
           type="submit">Start Game</button>
          <input className='text-center p-2 rounded-full border-red-600 text-red-600 border-[2px]'
           placeholder='Input Player Name' type="text" required name="name" />
        </form>
        <HighScoreModalButton/>  
        </>
  )
}

export default StartForm
