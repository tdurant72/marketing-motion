"use client";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import type { RefObject } from "react";
// Height of the parallax section (not including viewport height)
const SECTION_HEIGHT = 1500;

// ParallaxDivider wraps the sticky image and anchors scroll tracking to this section
const ParallaxDivider = () => {
    // Ref for the section to anchor scroll progress
    // Ref for the section to anchor scroll progress (never null after mount)
    // Use non-null assertion to ensure type matches RefObject<HTMLDivElement>
    const sectionRef = useRef<HTMLDivElement>(null!);

    return (
        <section
            ref={sectionRef}
            className="relative w-full"
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        >
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // This ensures the animation only happens once
            transition={{ duration: 0.5 }}
            className="relative -translate-x-1/2 left-[50%] top-[50%] -translate-y-1/2 z-30 w-full"
            >
                <h2 className="text-[3vw] font-semibold text-center my-16 text-white text-shadow-md text-shadow-neutral-700">Where global innovation<br/>meets local know how.</h2>
            </motion.div>
            <CenterImage sectionRef={sectionRef} />
            <ParallaxImages />
        </section>
    );
};

// CenterImage animates background size and opacity based on section scroll

const CenterImage = ({ sectionRef }: { sectionRef: RefObject<HTMLDivElement> }) => {
    // Use scrollYProgress relative to the section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"], // 0 when section enters, 1 when it leaves
    });

    // Animate background size from 170% to 100% as section scrolls into view
    const backgroundSize = useTransform(scrollYProgress, [0, 1], ["170%", "100%"]);
    // Fade out opacity near the end of the section
    const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

    return (
        <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
                opacity,
                backgroundSize,
                backgroundImage: "url(https://images.pexels.com/photos/29289935/pexels-photo-29289935.jpeg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};
const ParallaxImages = ()=>{
    return(
        <div className="mx-auto max-w-7xl px-4 pt-[200px] overflow-hidden">
            <ParallaxImg 
                src="https://images.pexels.com/photos/4628583/pexels-photo-4628583.jpeg"
                alt="warehouse interior with sunlight streaming through large windows"
                start={-200}
                end={200}
                className="w-1/3 shadow-neutral-800 shadow-md"
            />
            <ParallaxImg 
                src="https://images.pexels.com/photos/2804929/pexels-photo-2804929.jpeg"
                alt="arial view of warehouse"
                start={200}
                end={-250}
                className="mx-auto w-2/3 shadow-neutral-800 shadow-md"
            />
            <ParallaxImg 
                src="https://images.pexels.com/photos/10977420/pexels-photo-10977420.jpeg"
                alt="warehouse through trees"
                start={-100}
                end={100}
                className="ml-auto w-1/3 shadow-neutral-800 shadow-md"
            />
        </div>
    );
}
const ParallaxImg = ({className, alt, src, start,end}:{className?:string, alt:string, src:string, start:number, end:number})=>{
    const imgRef = useRef<HTMLImageElement>(null);
    const { scrollYProgress } = useScroll({ 
        target: imgRef,
        offset: [`${start}px end`, `end ${end *1}px`]
    });
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
    return(
        <motion.img
            src={src}
            alt={alt}
            className={className}
            ref={imgRef}
            style={{ transform, opacity }}
        />
    )
}
export default ParallaxDivider;