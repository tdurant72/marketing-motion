import React from "react";
import { PiHandshakeFill } from "react-icons/pi";
import { WordPullUp } from "./ui/word-up";
const ConciergeRelocationBlurb = () => (
  <section className="w-full h-full md:h-[50vh] bg-white py-12 px-4 md:px-0 flex justify-center items-center border-t border-b border-neutral-200">
    <div className="flex flex-col items-center gap-6 md:gap-10  2xl:w-4/5 mx-auto">  
        <WordPullUp className="text-3xl md:text-5xl font-bold text-blue-900 mb-2" words="Concierge Relocation Service"/>  
      
      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-6 md:gap-10 mx-auto">
        <div className="shrink-0 flex items-center justify-center bg-amber-100 rounded-full w-20 h-20">
        <PiHandshakeFill className="text-amber-600 text-4xl" />
      </div>
        <p className="text-xl text-neutral-700 text-balance">
          Experience white glove support designed for executives and decision makers. Our dedicated relocation team handles every detail from site selection and permitting to workforce onboarding and executive housing, so you can focus on your business, not the logistics. Discover a seamless, stress free transition to NCGTP.
        </p>
      </div>
    </div>
  </section>
);

export default ConciergeRelocationBlurb;
