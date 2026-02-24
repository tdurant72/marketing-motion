import { Button } from "@/components/ui/button";
import { WordPullUp } from "@/components/ui/word-up";
import Image from "next/image";
const SiteSelectionAlt = () => {
    const handleExploreClick = () => {
        window.location.href = "https://properties.zoomprospector.com/NCGLOBALTRANSPARK?page=1&s%5bSortDirection%5d=true&s%5bradiusLat%5d=0&s%5bSizeUnits%5d=1&s%5bradius%5d=0&s%5bradiusLng%5d=0&s%5bSortBy%5d=featured&s%5bAttributes%5d=1324%3A%5B%3D%5D1";
    }
    return ( 
        <section id='site-selection' className="flex items-center overflow-hidden  p-0 pt-[8vh] bg-radial-[at_25%_25%] from-slate-50 to-slate-200 to-75% h-full md:h-screen">
            <div className="container mx-auto h-full md:w-5xl 2xl:w-7xl content-start overflow-hidden">
                <WordPullUp words='Site Selection' className='text-5xl text-slate-800 py-8'/>
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <div id="copy" 
                        className="col-span-3 col-start-1 md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1 flex flex-col justify-center bg-linear-to-r from-slate-50 to-slate-50/70 backdrop-blur-xs p-4 md:p-8 md:mr-[10vw] rounded-l-2xl z-20">
                        <p className='text-2xl text-neutral-800 pb-10'>At NCGTP, site selection isn’t a guessing game it’s a launchpad. Our industrial sites and buildings are fully equipped with the infrastructure you need to hit the ground running. From precision utility planning to high-speed telecommunications, every detail is engineered for operational excellence. </p>
                        {/* <Button variant="outline" className="w-max text-slate-800 border-slate-800 hover:bg-slate-100" onClick={()=>handleExploreClick()}>Explore Available Sites</Button> */}
                        <a className="px-4 py-3 bg-blue-900 text-slate-50 text-lg hover:bg-slate-50 hover:text-blue-900 border-2 border-blue-900 transition-colors duration-300 rounded-2xl w-fit" href="https://properties.zoomprospector.com/NCGLOBALTRANSPARK?page=1&s%5bSortDirection%5d=true&s%5bradiusLat%5d=0&s%5bSizeUnits%5d=1&s%5bradius%5d=0&s%5bradiusLng%5d=0&s%5bSortBy%5d=featured&s%5bAttributes%5d=1324%3A%5B%3D%5D1">Explore Available Sites</a>
                    </div>

                    <div id="graphic" 
                        className="col-span-3 col-start-1 row-span-2 row-start-1 md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-1">
                        <Image
                            src="/images/ncgtp/overview-map.webp"
                            alt="Site Selection Graphic"
                            width={800}
                            height={600}
                            className=" rounded-r-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SiteSelectionAlt;