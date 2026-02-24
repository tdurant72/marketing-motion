import { Marquee } from "@/components/ui/marquee";
import FactCard from "@/components/fact-card";
import BentoCard from "@/components/bento-card";
import TestimonialCard from "@/components/testimonial-card";

const stats = [
    { src: "IoIosBusiness", fact: "#1", description: "Best State for Business" },
    { src: "IoMdPeople", fact: "5.2M", description: "Skilled Labor Force" },
    { src: "RiMoneyDollarCircleFill", fact: "5%", description: "Below National Cost of Living" },
    { src: "MdPrecisionManufacturing", fact: "#1", description: "Largest Manufacturing Workforce in the Southeast" },
    { src: "IoIosAirplane", fact: "11,500", description: "Square Foot Runway at NCGTP" }
];


const BusinessAdvantages = () => {
    return (
        <section id="business-advantages" className="pt-[8vh] bg-radial-[at_25%_25%] from-slate-50 to-slate-200 to-75% h-full overflow-hidden gap-4 flex flex-col">
            <div
                className="container mx-auto px-3 flex flex-col md:flex-row gap-4 h-full md:h-[60vh] md:w-5xl 2xl:w-7xl md:content-end items-center justify-center overflow-hidden">
                <div className="md:basis-1/3">
                    <h2 className="font-kanit-medium text-5xl font-bold text-teal-700 mb-4 title">
                        Hear from Industry Leaders
                    </h2>
                    <p className="font-roboto-regular text-2xl/9 text-slate-700 copy text-balance mb-4">
                        Discover why top executives and business owners chose NCGTP for their next phase of growth. Our partners share their real-world results, cost savings, access to talent, and a business friendly environment that sets North Carolina apart from the competition.
                    </p>
                    <p className="font-roboto-regular text-lg text-slate-600 copy text-balance">
                        Watch the testimonials to see how NCGTP delivers on its promise of performance, partnership, and prosperity.
                    </p>
                </div>
                <div className="md:basis-1/3 h-full w-full min-h-72">
                    <TestimonialCard
                        description="video card of John Smith Executive Director talking about the benefits of NCGTP"
                    >
                        <BentoCard
                            src="/videos/ncgtp-hero.mp4"
                            img="/images/founders/image-1.jpg"
                            title="John Smith"
                            description="Executive Director"
                            snippet="Saved $2M in year one"
                            isVideo
                            isMain
                        />
                    </TestimonialCard>
                </div>
                <div className="md:basis-1/3 h-full w-full">
                    <div className="flex flex-col gap-8 h-full w-full">
                        <div className="self-start h-full md:h-1/2 w-full p-0 md:pr-10 ">
                            <TestimonialCard
                                description="video card of Kel Johnson Property Manager talking about the benefits of NCGTP"
                            >
                                <BentoCard
                                    src="/videos/ncgtp-hero.mp4"
                                    img="/images/founders/image-2.jpg"
                                    title="Kel Johnson"
                                    description="Property Manager"
                                    snippet="Reduced logistics time by 30%"
                                    isVideo
                                />
                            </TestimonialCard>
                        </div>
                        <div className="self-end h-full w-full md:h-1/2 p-0 md:pl-10 ">
                            <TestimonialCard
                                description="video card of JB Bento CEO of Radiant Technologies talking about the benefits of NCGTP"
                            >
                                <BentoCard
                                    src="/videos/ncgtp-hero.mp4"
                                    img="/images/founders/image-4.jpg"
                                    title="JB Bento"
                                    description="CEO of Radiant Technologies"
                                    snippet="Grew workforce by 150% in 2 years"
                                    isVideo
                                />
                            </TestimonialCard>
                        </div>
                    </div>


                </div>
            </div>
            <div className="flex items-end justify-center h-20 md:h-44 w-full md:w-5xl 2xl:w-7xl mx-auto px-3 md:px-0 overflow-hidden">
                <div className="h-full w-[50%] md:w-[25%]">
                    <div className="bg-sky-600 h-full w-full rounded-t-2xl ">
                        <div className="p-2 md:p-4 flex flex-col gap-2">
                            <h3 className="text-slate-50 text-lg md:text-2xl font-semibold md:font-black">Lowest Corporate Tax Rate in the US</h3>

                        </div>
                    </div>
                </div>
                <div className="h-full w-[50%] md:w-[75%] flex items-end">
                    <Marquee pauseOnHover className="[--duration:90s] pb-0">
                        {stats.map((stat, index) => (
                            <div key={index} className="mx-1 min-w-[200px] cursor-pointer">
                                <FactCard
                                    src={stat.src}
                                    fact={stat.fact}
                                    description={stat.description}
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}

export default BusinessAdvantages;