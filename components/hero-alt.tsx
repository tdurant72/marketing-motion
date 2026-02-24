import React from "react";
import Image from "next/image";
const HeroAlt = () => {
    return ( 
        <section className="h-[400vh] w-full bg-neutral-50 flex flex-col items-center py-5 mt-[5vh] [perspective-800px] transform-3d">
                <h1 className="text-8xl font-bold text-center leading-[0.8]">Empowering Businesses<br/><span className="text-7xl">with Great Design</span></h1>
            <div 
            style={{
                transform: "rotateX(45deg) translateZ(50px)",
            }}
            className="w-1/2 rounded-3xl -mt-6 h-auto aspect-video bg-white shadow-2xl p-2 border border-neutral-100">
                <div className="bg-black h-full w-full rounded-2xl p-10">
                    <div className="bg-neutral-100 h-full w-full rounded-xl">
                        {/* <video
                        src="/videos/hero-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover pointer-events-none rounded-xl"
                    /> */}
                    <Image
                        src="/images/projects/redbull.jpg"
                        alt="Hero Alt Image"
                        width={800}
                        height={450}
                        priority
                        className="w-full h-auto object-cover pointer-events-none rounded-xl"
                    />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HeroAlt;