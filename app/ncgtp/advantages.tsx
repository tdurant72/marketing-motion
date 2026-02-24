import React from "react";
import BentoCard from "@/components/bento-card";

const Advantages = () => {
    return ( 
        <section id="features" className="pt-14 pb-4 mb-10 md:pb-9 bg-white">
      <div className="container mx-auto px-3 md:px-10">
        <div
          className="top-section grid grid-cols-3 gap-4 mb-4"
          id="advantages"
        >
          <div className="col-span-1">
            <p className="font-kanit-medium text-4xl text-blue-600 mb-2 title">
              Business Advantages
            </p>
            <p className="font-roboto-regular max-w-3xl text-lg text-slate-500 copy">
              North Carolina powers your business with America&apos;s top-ranked
              workforce. Our state&apos;s #1 Business ranking stems from an
              unmatched talent pipeline, fueled by strategic partnerships
              between industry leaders and world-class training institutions.
              When you choose North Carolina, you tap into a workforce ecosystem
              designed to drive your success—today and tomorrow.
            </p>
          </div>
          <div className="col-span-2 border-2 border-blue-600/20 rounded-lg relative  h-80 w-full overflow-hidden main ">
            <BentoCard
              src="/videos/ncgtp-hero.mp4"
              img="/images/founders/image-1.jpg"
              title="John Smith"
              description="Executive Director"
              isVideo
              isMain
            />
          </div>
        </div>
        <div id="bento-cards">
          <div className="grid h-96 grid-cols-3 gap-4 bento">
            <BentoCard
              src="/videos/ncgtp-hero.mp4"
              img="/images/founders/image-2.jpg"
              title="Kevin Johnson"
              description="Property Manager"
              isVideo

            />

            <BentoCard
              src="/videos/ncgtp-hero.mp4"
              img="/images/founders/image-3.jpg"
              title="John McClain"
              description="CEO of Executor"
              isVideo
            />

            <BentoCard
              src="/videos/ncgtp-hero.mp4"
              img="/images/founders/image-4.jpg"
              title="JB Bento"
              description="CEO of Radiant Technologies"
              isVideo
             
            />
          </div>
        </div>
      </div>
    </section>
     );
}
 
export default Advantages;