"use client";
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";

interface CursorPointerProps {
    content?: React.ReactNode;
    children?: React.ReactNode;
}

const CursorPointer = ({ content: contentProp, children }: CursorPointerProps) => {
        const [position, setPosition] = useState({ x: 0, y: 0 });
        const [content, setContent] = useState('scroll');

    useEffect(()=>{
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };
        
        const handleMouseOver = (event: MouseEvent) => {
            const targetClassList = (event.target as HTMLElement).classList;
            const classMapping = {
                play:"play",
                view:"view",
                custom:"custom",
            }
            for (const key in classMapping){
                if (targetClassList.contains(key)){
                    setContent(classMapping[key as keyof typeof classMapping]);
                    return;
                }
            }
            setContent('scroll');
        }
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    },[])
    // If content prop is provided, use it; otherwise use internal state
    const displayContent = contentProp ?? content;

    return ( 
        <motion.div 
            animate={{
                x: position.x - 5, // Center the cursor (assuming 70px size)
                y: position.y + 5,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            className="fixed z-999 w-[70px] h-[70px] rounded-full backdrop-blur-sm bg-neutral-950/20 flex justify-center items-center overflow-hidden will-change-transform pointer-events-none">
            {/* Render children if provided, otherwise displayContent */}
            {children ? (
              children
            ) : (
              <div className="text-sm text-white leading-none pointer-events-none">
                {displayContent}
              </div>
            )}
        </motion.div> 
    );
}
 
export default CursorPointer;