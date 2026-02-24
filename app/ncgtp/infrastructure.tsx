import { WordPullUp } from "@/components/ui/word-up";
import Image from "next/image";
import IncentiveCardSection from "@/components/incentive-card-section";

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="container pt-[8vh] h-full w-full md:h-screen flex-col items-center justify-center bg-neutral-100/50 backdrop-blur-xs md:mx-auto 2xl:w-4/5">
      <div className="flex flex-col gap-4 mx-auto md:w-5xl 2xl:w-7xl overflow-hidden px-4">
        <div className="flex flex-col gap-4 mx-auto mb-[1vw] px-6 md:px-0">
          <WordPullUp words="Exclusive Incentives for Relocating Businesses" className="text-5xl mt-4 text-teal-600" />
          <h2 className="hidden">Exclusive Incentives for Relocating Businesses</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col content-center w-full md:w-1/4">
            <h3 className="text-3xl/8 font-semibold text-slate-900 mb-2">Unlock Industry-Leading Financial Advantages</h3>
            <h4 className="text-xl text-gray-700 mt-2 font-normal">
              NCGTP partners enjoy exclusive, performance-based incentives designed to maximize ROI and accelerate growth. These benefits are available only to businesses relocating or expanding at the Global TransPark.
            </h4>
          </div>
          <div className="flex w-full md:w-3/4 content-center h-full overflow-hidden">
            <Image
              width={800}
              height={600}
              src="/images/ncgtp/composite-center.webp"
              alt="infrastructure image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
        </div>
        <IncentiveCardSection />
        <div className="flex justify-center mt-[1vw]">
          <button className="bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-amber-600 transition-colors duration-200">
            See How Much You Qualify For
          </button>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;