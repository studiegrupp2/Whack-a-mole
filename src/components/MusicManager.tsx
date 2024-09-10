"use client";
import React from 'react';



const MusicManager: React.FC = () => {
  return (
    <div className='flex ' >
      <iframe className='fixed bottom-0'
        src="https://open.spotify.com/embed/album/2w6DV9mIOPHldiUheAN2RD?utm_source=generator"
        width="300" 
        height="300" 
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

    </div>
  );
};

export default MusicManager;
