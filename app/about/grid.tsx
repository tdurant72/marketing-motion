"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Pointer from "@/components/pointer";
interface GridItem {
    id: number;
    title: string;
    renderContent: () => React.JSX.Element;
}
const gridItems: GridItem[] = [
    {
        id: 1,
        title: "Item 1",
        renderContent: () => (
            <div id="item1" className="gw-16 md:gw-24 gh-16">
                
                <div className="gw-16 gh-10 gt-1 gl-0 slide-item overflow-hidden">
                    <Pointer>
                    <div className="rounded-2xl bg-slate-50 flex flex-col items-center justify-center p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-lg text-slate-900">Find out how NCGTP helped saved company x save millions</h3>
                    </div>
                </Pointer>
                    <Image
                        src="/images/grid/inspired_california01.jpg"
                        alt="View of San Francisco"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="gw-17 gt-11 gl-0 slide-item flex flex-col gap-4 items-start ">
                    <p className="text-slate-700 font-semibold text-left text-[3.5vw]/[3.6vw] md:text-2xl">Designed by renowned architect Philip Johnson, this architectural achievement is instantly identifiable at both the street and skyline levels.</p>
                    <a href="#" className="rounded-lg py-2 px-3 bg-slate-50">
                        Read Case Study
                    </a>

                </div>
                <div className="gh-8 gw-8 gt-0 gl-14 slide-item overflow-hidden">
                    <Image
                        src="/images/grid/inspired_johnson01.jpg"
                        alt="Philip Johnson"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

            </div>
        ),
    },
    {
        id: 2,
        title: "Item 2",
        renderContent: () => (
            <div className="gw-16 md:gw-24 gh-16">
                <div className="gw-12 gh-10 gt-2 gl-0 overflow-hidden slide-item ">
                    <Image
                        src="/images/grid/BCJ-101_Cal-7268.jpg"
                        alt="interior office space"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="gh-11 gt-12 gl-0 slide-item">
                    <p className="text-slate-800 font-semibold text-[3.5vw] md:text-2xl text-left">
                        A seven story, light-filled atrium creates a dynamic setting for welcoming visitors. Horticultural touches lift spirits, extending the outdoors into the arrival experience.
                    </p>
                </div>
                <div className="gw-6 gh-11 gt-0 gl-14 slide-item">
                    <Image
                        src="/images/grid/inspired_facets01.jpg"
                        alt="Facets"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        ),
    },
    {
        id: 3,
        title: "Item 3",
        renderContent: () => (
            <div className="gw-16 md:gw-24 gh-24">
                <div className="gw-20 gh-10 gt-2 gl-0 overflow-hidden slide-item ">
                    <Image
                        src="/images/grid/inspired_view_night01.jpg"
                        alt="skyline at night"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="gw-13 gt-13 gl-0 slide-item">
                    <p className="text-slate-800 font-semibold text-left text-[3.5vw] md:text-2xl">
                        With its full city block footprint, 101 California enjoys generous natural light and open views. The upper floors offer impressive views to the San Francisco Bay.
                    </p>
                </div>
                <div className="gw-6 gh-6 gt-11 gl-13 slide-item">
                    <Image
                        src="/images/grid/inspired_view_coit01.jpg"
                        alt="Coit Tower"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        ),
    },
    {
        id: 4,
        title: "Item 4",
        renderContent: () => <div>Content for Item 4</div>,
    },
    {
        id: 5,
        title: "Item 5",
        renderContent: () => <div>Content for Item 5</div>,
    }
];
const Grid = () => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
            setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);
    return (
        <section id="grid"
            className="my-32 py-12 text-center w-full h-full mx-auto text-lg text-gray-600 bg-slate-400/70  backdrop-blur-xs ">
            <div className="container mx-auto">
                <div className="mb-8 flex items-end justify-between">
                    <div className="flex flex-col gap-4 pl-[2vw]">
                        <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                            What Our Clients Are Building
                        </h2>
                        <p className="max-w-lg text-slate-900 text-left">Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.</p>
                    </div>
                    <div className="hidden shrink-0 gap-2 md:flex">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{ breakpoints: { "768": { dragFree: true, } } }}
                >
                    <CarouselContent className="ml-0 slider-grid slider-content md:h-screen  2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
                        {gridItems.map((item: GridItem) => (
                            <CarouselItem
                                key={item.id}
                                className="mr-4 w-[80%] md:w-[35%] lg:w-[25%] shrink-0 mx-auto"
                            >
                                <div className=" h-full p-6 slider-grid">
                                    <h3 className="mb-6 text-xl md:text-2xl font-semibold">{item.title}</h3>
                                    <div className="mx-auto w-full h-full flex items-start lg:items-center justify-center">
                                        <div className="slide">{item.renderContent()}</div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="mt-8 flex justify-center gap-2">
                    {gridItems.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-primary/20"
                                }`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Grid;