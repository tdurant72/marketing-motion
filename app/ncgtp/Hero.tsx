import Image from "next/image";
import { PiPlayFill, PiPhoneFill } from "react-icons/pi";
import { WordPullUp } from "@/components/ui/word-up";
import NCGTPHeroVideo from "@/components/ncgtp-hero-video";
import MotionButton from "@/components/motion/motion-button";
const Hero = () => {
    return (
        <section id="hero-section" className="flex flex-col gap-4 h-full md:h-[90vh] pt-[8vh] pb-0 w-full md:w-5xl 2xl:w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 h-full">
                <div id="left" className="flex flex-col gap-4 items-center justify-center  md:basis-1/2 h-full">
                    <h1 className="text-6xl md:text-[10vw] text-blue-950 text-shadow-xs text-shadow-blue-400">NCGTP<span className="hidden">North Carolina Global TransPark</span></h1>
                    <div className="flex flex-col p-4 bg-neutral-100/30 backdrop-blur-xs rounded-t-2xl ">
                        <h2 className="text-3xl md:text-4xl text-neutral-800 mb-6 font-bold">Relocate to NCGTP and unlock millions in performance-based incentives</h2>
                        <h3 className="text-neutral-800 text-2xl md:text-3xl text-balance">North Carolina’s Global TransPark offers unmatched support for manufacturers ready to scale.</h3>
                        <button className="mt-6 bg-amber-500 text-neutral-50 backdrop-blur-sm px-4 py-2 rounded-lg text-lg font-medium hover:bg-white/90 hover:text-amber-700 transition-colors duration-200 cursor-pointer drop-shadow-xs drop-shadow-amber-900 w-fit self-start">
                            Talk to one of our experts <PiPhoneFill className="inline-block ml-2" />
                        </button>
                    </div>
                </div>
                <div id="right" className="flex flex-col md:basis-1/2">
                    <div className="grid md:grid md:grid-cols-4 md:grid-rows-3 gap-2 h-full w-full">
                        <NCGTPHeroVideo />
                        <div className="col-start-2 col-end-4 row-start-2 row-end-4 bg-blue-500 h-[450px] width-full z-20 rounded-bl-2xl relative">
                            <Image
                                src="/images/ncgtp/runway.webp"
                                alt="Runway at North Carolina Global TransPark"
                                priority
                                width={450}
                                height={450}
                                style={{ height: 450, width: "auto" }}
                                className=" rounded-bl-2xl drop-shadow-xs drop-shadow-neutral-700"
                            />

                            <div className="bg-slate-50/40 h-full w-full absolute top-0 left-0 right-0 bottom-0" />
                            <Image
                                src="/images/ncgtp/grow-ftz.webp"
                                alt="grow with Free Trade Zones at NCGTP"
                                className="absolute top-4 right-6 md:-right-6 drop-shadow-xs drop-shadow-neutral-700"
                                priority
                                width={150}
                                height={56}
                                style={{ height: 100, width: "auto" }}
                            />
                            <Image
                                src="/images/ncgtp/work-employers.webp"
                                alt="grow with Free Trade Zones at NCGTP"
                                className="absolute top-1/2 -translate-y-1/2  left-8 md:-left-8 drop-shadow-xs drop-shadow-neutral-700"
                                priority
                                width={150}
                                height={56}
                                style={{ height: 100, width: "auto" }}
                            />
                            <Image
                                src="/images/ncgtp/jeremy-stroud.webp"
                                alt="grow with Free Trade Zones at NCGTP"
                                className="absolute  top-2/3 -translate-y-2/3 right-10 drop-shadow-xs drop-shadow-neutral-700"
                                priority
                                width={56}
                                height={150}
                                style={{ height: 100, width: "auto" }}
                            />
                            <MotionButton
                                className="absolute bottom-4 left-4 bg-neutral-500 text-neutral-50 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-100 hover:text-amber-700 transition-colors duration-200 self-start"
                            >
                                Watch Video
                                <PiPlayFill className="inline-block mx-2" />
                            </MotionButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:col-span-4 md:row-start-4 content-center h-12 md:h-full w-full justify-center">
                <WordPullUp words="Unlock Millions in Incentives, Without the Red Tape" className="text-lg md:text-[2vw]" />
            </div>
        </section>
    );
}

export default Hero;