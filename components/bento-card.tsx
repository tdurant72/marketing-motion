"use client";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { BiPlay } from "react-icons/bi";
import Image from "next/image";
const BentoCard = ({
  src,
  img,
  title,
  description,
  snippet,
  isMain = false,
  isVideo,
  variants,
}: { src: string; img: string; title: string; description: string; snippet?: string; isMain?: boolean; isVideo?: boolean; variants?: Variants }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  function handlePlay() {
    if (isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }
  return (
    <motion.div variants={variants} initial="hidden" animate="visible" className="grid grid-cols-4 grid-rows-4 h-full overflow-hidden">
      {isPlaying ? (
        <video
          ref={videoRef}
          src={src}
          className="col-span-4 row-span-4 size-full object-cover object-center z-50"
        />
      ) : (
        <>
          {/* <div
            className={`col-start-1 row-start-4 row-span-1 z-50  rounded-tr-[50px] bg-white/50 flex items-end py-2 gap-4 md:gap-7 ${isMain ? "col-span-4 md:col-span-4" : "col-span-4 md:col-span-3"
              }`}
          >
            
          </div> */}
          
          <div className="col-span-4 row-span-4 col-start-1 col-end-5 row-start-1 ">
          <Image
            src={img}
            className="object-cover object-center rounded-tl-md rounded-br-md h-full w-full min-h-72 aspect-square"
            alt={title}
            width={566}
            height={318.5}
          />
          </div>
          <div className={`col-start-1 col-span-4  row-span-4   bg-white/70  h-full w-full rounded-tr-[50px] md:pb-8 ${isMain ? "row-start-4":" row-start-3"}`}>
          <div className="flex gap-4 md:gap-6 h-full w-full justify-between items-center p-2 md:px-4 md:py-0 ">
              <div className="max-w-[90%]">
                <h4 className="text-lg md:text-xl text-blue-950 font-medium">{title}</h4>
                <p className="text-base md:text-lg text-slate-700">{description}</p>
                {snippet && <p className="text-sm text-slate-600 mt-1">"{snippet}"</p>}
              </div>
              <div>
                {isVideo && (
                  <button
                    className="z-20  border-orange-600 border-2  rounded-full bg-orange-600/20"
                    onClick={handlePlay}
                  >
                    <BiPlay className="h-7 md:h-10 w-7 md:w-10 text-orange-600" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default BentoCard;