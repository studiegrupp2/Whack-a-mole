"use client";
import StartForm from "@/components/StartForm";

export default function WhackAMole() {
  return (
    <div
      className="flex flex-col h-dvh items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/start-bg.png')",
      }}
    >
      <StartForm />
    </div>
  );
}
