"use client";

import StartForm from "@/components/StartForm";

// import { useState } from "react";

export default function WhackAMole() {
  // const [playerName, setPlayerName] = useState<string>("");

  // const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPlayerName(event.target.value);
  // };

  return (
    <div className="flex flex-col h-dvh items-center justify-center bg-cover bg-center"
      style={{
      backgroundImage: "url('/start-bg.png')",
    }}>
      <StartForm/>
    </div>
  );
}


// import { sql } from "@vercel/postgres";

// export default async function Cart() {
//   const { rows } = await sql`SELECT * from HighScore`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.name} - {row.score}
//         </div>
//       ))}
//     </div>
//   );
// }