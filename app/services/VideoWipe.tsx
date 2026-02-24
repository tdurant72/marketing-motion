import React, {useRef, useEffect, use} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
interface VideoItem {
  src: string;
  poster: string;
  title: string;
  // copy: string;
  bgColor: string; // Tailwind class string for background color
  background: 'poster' | 'bgColor';
  renderContent: () => React.JSX.Element;
}

// --- 2. Video Data (Typed) ---
const VIDEOS: VideoItem[] = [
  { 
    src: 'https://videos.pexels.com/video-files/6572598/6572598-hd_1920_1080_25fps.mp4', 
    poster: '/images/projects/sony.jpg', 
    title: 'Sony', 
    bgColor: 'bg-blue-300' ,
    background: 'poster',
    renderContent: () => (
      <>
        <h2 className="text-[2.6rem] max-w-[53%] font-extrabold text-gray-900">Sony</h2>
        <h3 className="mt-4 text-xl text-gray-700">Our first section introduces the concept with a calming blue background.</h3>
      </>
    ),
  },
  { 
    src: 'https://videos.pexels.com/video-files/4126123/4126123-uhd_2732_1440_25fps.mp4', 
    poster: '/images/projects/adidas.jpg', 
    title: 'Adidas', 
    bgColor: 'bg-green-100' ,
    background: 'bgColor',
    renderContent: () => (
      <>
        <h2 className="text-[2.6rem] max-w-[53%] font-extrabold text-gray-900">Adidas</h2>
        <p className="mt-4 text-lg text-gray-700">This section drives the main wipe animation. Click below for more info!</p>
        <a 
          href="#info" 
          className="mt-6 inline-block! justify-self-start px-6 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Watch the Demo
        </a>
      </>
    ),
  },
  { 
    src: 'https://videos.pexels.com/video-files/2909914/2909914-uhd_2732_1440_24fps.mp4', 
    poster: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg', 
    title: 'Tokyo Roast', 
    bgColor: 'bg-pink-100' ,
    background: 'poster',
    renderContent: () => (
      <>
        <h1 className="text-4xl md:text-[7vw] max-w-[53%]  text-pink-700 mb-4">Tokyo Roast</h1>
        <p className="mt-4 text-2xl font-medium text-gray-800">The third video fades in as we scroll. The background is a soft pink.</p>
        <p className="mt-2 text-lg text-gray-950">This demonstrates the flexibility of using React components inside your content areas.</p>
      </>
    ),
  },
  { 
    src: 'https://videos.pexels.com/video-files/5077471/5077471-uhd_1440_2732_25fps.mp4', 
    poster: 'https://images.pexels.com/photos/340103/pexels-photo-340103.jpeg', 
    title: 'Spotify', 
    bgColor: 'bg-white',
    background: 'bgColor',
    renderContent: () => (
      <p className="text-4xl italic text-gray-800">The journey ends here.</p>
    ), 
  },
];
const VideoWipe = () => {
    const wrapRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Example: Scale an element within the pinned section as you scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
//   useEffect(() => {
//     const wrap = wrapRef.current;
//     if (!wrap) return;

//     const triggers = wrap.querySelectorAll<HTMLElement>(".scroll_trigger");
//     triggers.forEach((trigger, index) => {
//         const background = trigger.querySelector<HTMLElement>(".background");
//         if(background){

//         }
//     });
//   },[]);
    return ( 
        <div ref={containerRef} style={{ height: "200vh", position: "relative" }}> {/* A tall container for scroll */}
      <motion.div
        style={{
          position: "sticky",
          top: 0, // Pins to the top of the viewport
          height: "100vh", // The height of the pinned section
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}
      >
        <motion.h1 style={{ scale }}>
          Pinned Section Content
        </motion.h1>
      </motion.div>
      {/* Other content below the pinned section */}
      <div style={{ height: "100vh", backgroundColor: "lightcoral" }}>
        Scrollable Content Below
      </div>
    </div>
     );
}
 
export default VideoWipe;