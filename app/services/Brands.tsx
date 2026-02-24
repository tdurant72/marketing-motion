import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const projects = [
    {
        video: "https://videos.pexels.com/video-files/30442221/13045784_2560_1440_30fps.mp4",
        width: 320,
        height: 200,
        className: "w-80 h-52"
    },
    {
        video: "https://videos.pexels.com/video-files/5076634/5076634-uhd_2732_1440_25fps.mp4",
        width: 400,
        height: 300,
        className: "w-96 h-72"
    },
    {
        video: "https://videos.pexels.com/video-files/27421705/12140050_2730_1440_30fps.mp4",
        width: 280,
        height: 250,
        className: "w-72 h-64"
    },
    {
        video: "https://videos.pexels.com/video-files/4419251/4419251-hd_1920_1080_25fps.mp4",
        width: 360,
        height: 220,
        className: "w-80 h-56"
    },
    {
        video: "https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4",
        width: 300,
        height: 280,
        className: "w-72 h-64"
    },
    {
        video: "https://videos.pexels.com/video-files/5077471/5077471-uhd_1440_2732_25fps.mp4",
        width: 420,
        height: 240,
        className: "w-96 h-60"
    },
];

const VideoCard = ({ video, className, height, width }: { video: string; className: string; height: number; width: number }) => {
    return (
        <div className={cn("relative overflow-hidden cursor-pointer mx-4", className)}>
            <div className="flex flex-row items-center">
                <video
                    src={video}
                    height={height}
                    width={width}
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    )
}
const Brands = () => {
    return (
        <section className='relative flex w-full flex-col items-center justify-center overflow-hidden py-8'>
            <Marquee pauseOnHover className='[--duration:30s]'>
                {projects.map((project, index) => (
                    <VideoCard key={index} {...project} />
                ))}
            </Marquee>
        </section>
    );
}

export default Brands;