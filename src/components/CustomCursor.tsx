"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    // Reference to the cursor element
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        if (!cursor) return;

        const handleMouseMove = (e: MouseEvent) => {
            cursor.style.top = `${e.pageY}px`;
            cursor.style.left = `${e.pageX}px`;
        };

        const handleClick = () => {
            cursor.classList.add('rotate');
            setTimeout(() => {
                cursor.classList.remove('rotate');
            }, 200);
        };

        // Add event listeners
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        // Cleanup function to remove event listeners
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 text-2xl transition-transform duration-500 cursor-none"
        >
            <Image src="/hammer.png" alt='' width={60} height={60} />
        </div>
    );
};

export default CustomCursor;
