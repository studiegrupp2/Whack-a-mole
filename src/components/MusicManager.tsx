"use client";
import React from "react";

const MusicManager: React.FC = () => {
  return (
    <div className="flex absolute top-[90dvh] ">
      <iframe
        src="https://open.spotify.com/embed/track/6FUwPb4mGlUDbx42uspXaZ?utm_source=generator&theme=0"
        width="300px"
        height="100"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MusicManager;