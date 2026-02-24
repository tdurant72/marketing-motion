import React from "react";
import { cn } from "@/lib/utils";

interface ImageSource {
    src: string;
    alt: string;
}

interface ShowImageListItemProps {
    title: string;
    description: string;
    companies: string;
    images: [ImageSource, ImageSource];
}
const Industries = () => {
    const container = "absolute right-8 -top-1 z-40 h-24 w-20";
    const effect =
        "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

    const industries = [
        {
            title: "Fintech",
            description:
                "Financial technology solutions and digital banking services",
            companies:
                "Discover, Stripe, CreditKarma, STC Bank, MoneyLion, Marqeta, Quicken, Lulo Bank, Earnin, Fundbox, StreetBeat, Q2",
            images:[
                { src: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg", alt: "Fintech Image 1" },
                { src: "https://images.pexels.com/photos/6770845/pexels-photo-6770845.jpeg", alt: "Fintech Image 2" },
            ]
        },
        {
            title: "Insurance",
            description: "Digital insurance platforms and insurtech solutions",
            companies:
                "StateFarm, Progressive, Geico, Lemonade, Oscar Health, MetLife",
            images:[
                { src: "https://images.pexels.com/photos/5816291/pexels-photo-5816291.jpeg", alt: "Insurance Image 1" },
                { src: "https://images.pexels.com/photos/4021809/pexels-photo-4021809.jpeg", alt: "Insurance Image 2" },
            ]
        },
        {
            title: "Energy",
            description: "Sustainable energy and power management systems",
            companies:
                "Shell, BP, Chevron, NextEra Energy, Duke Energy, Siemens Energy",
            images:[
                { src: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg", alt: "Energy Image 1" },
                { src: "https://images.pexels.com/photos/157827/pexels-photo-157827.jpeg", alt: "Energy Image 2" },
            ]
        },
        {
            title: "B2B & Enterprise Software",
            description: "Enterprise-grade software solutions",
            companies:
                "Slack, ADP, VMware, Okta, Splunk, Nutanix, Zenefits, Comscore, Papaya, TeamViewer, Cornerstone, WorkBoard, AppDynamics",
            images:[
                { src: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg", alt: "B2B Image 1" },
                { src: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg", alt: "B2B Image 2" },
            ]
        },
        {
            title: "Crypto & Web3",
            description: "Blockchain technology and decentralized applications",
            companies: "Coinbase, Binance, Ripple, OpenSea, MetaMask, Alchemy",
            images:[
                { src: "https://images.pexels.com/photos/5473962/pexels-photo-5473962.jpeg", alt: "Crypto Image 1" },
                { src: "https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg", alt: "Crypto Image 2" },
            ]
        },
        {
            title: "Technology",
            description: "Cutting-edge technology solutions and services",
            companies: "Microsoft, Google, Apple, Amazon, IBM, Intel, Oracle",
            images:[
                { src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", alt: "Technology Image 1" },
                { src: "https://images.pexels.com/photos/15863044/pexels-photo-15863044.jpeg", alt: "Technology Image 2" },
            ]
        },
        {
            title: "Ecommerce & Fashiotech",
            description: "Digital retail and fashion technology",
            companies: "Shopify, ASOS, Farfetch, StitchFix, Rent the Runway, ThredUp",
            images:[
                { src: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg", alt: "Ecommerce Image 1" },
                { src: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg", alt: "Ecommerce Image 2" },
            ]
        },
        {
            title: "Electronics",
            description: "Electronic systems and component solutions",
            companies: "Samsung, Sony, LG, Panasonic, Xiaomi, TSMC",
            images:[
                { src: "https://images.pexels.com/photos/5077042/pexels-photo-5077042.jpeg", alt: "Electronics Image 1" },
                { src: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg", alt: "Electronics Image 2" },
            ]
        },
        {
            title: "Food & Beverages",
            description: "Food service and beverage industry solutions",
            companies: "Coca-Cola, PepsiCo, Nestlé, DoorDash, Uber Eats, Blue Apron",
            images:[
                { src: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg", alt: "Food Image 1" },
                { src: "https://images.pexels.com/photos/5532672/pexels-photo-5532672.jpeg", alt: "Food Image 2" },
            ]
        },
        {
            title: "Startups & VC",
            description: "Solutions for startups and venture capital firms",
            companies:
                "Sequoia, Andreessen Horowitz, Y Combinator, TechStars, 500 Startups",
            images:[
                { src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", alt: "Startups Image 1" },
                { src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg", alt: "Startups Image 2" },
            ]
        },
        {
            title: "Healthcare & Life Sciences",
            description: "Healthcare technology and life science solutions",
            companies:
                "Johnson & Johnson, Pfizer, Moderna, Illumina, Epic Systems, Cerner",
            images:[
                { src: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg", alt: "Healthcare Image 1" },
                { src: "https://images.pexels.com/photos/3845765/pexels-photo-3845765.jpeg", alt: "Healthcare Image 2" },
            ]
        },
        {
            title: "Telecommunications",
            description: "Communication infrastructure and services",
            companies: "AT&T, Verizon, T-Mobile, Vodafone, Orange, Deutsche Telekom",
            images:[
                { src: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg", alt: "Telecommunications Image 1" },
                { src: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg", alt: "Telecommunications Image 2" },
            ]
        },
        {
            title: "Mobility",
            description: "Transportation and mobility solutions",
            companies: "Uber, Lyft, Bird, Lime, Via, BlaBlaCar",
            images:[
                { src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg", alt: "Mobility Image 1" },
                { src: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg", alt: "Mobility Image 2" },
            ]
        },
        {
            title: "Logistics",
            description: "Supply chain and logistics management",
            companies: "FedEx, UPS, DHL, Maersk, Flexport, XPO Logistics",
            images:[
                { src: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg", alt: "Logistics Image 1" },
                { src: "https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg", alt: "Logistics Image 2" },
            ]
        },
        {
            title: "Manufacturing & Automotive",
            description: "Industrial manufacturing and automotive solutions",
            companies: "Tesla, Ford, BMW, Toyota, General Motors, Siemens",
            images:[
                { src: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg", alt: "Manufacturing Image 1" },
                { src: "https://images.pexels.com/photos/2760344/pexels-photo-2760344.jpeg", alt: "Manufacturing Image 2" },
            ]
        },
        {
            title: "Agriculture",
            description: "Agricultural technology and farming solutions",
            companies:
                "John Deere, Corteva, Bayer, Indigo Ag, Farmers Business Network",
            images:[
                { src: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg", alt: "Agriculture Image 1" },
                { src: "https://images.pexels.com/photos/163752/harvest-grain-combine-arable-farming-163752.jpeg", alt: "Agriculture Image 2" },
            ]
        },
        // {
        //     title: "Architecture & Construction",
        //     description: "Building design and construction technology",
        //     companies: "Autodesk, Procore, PlanGrid, Trimble, Bentley Systems",
        // },
        {
            title: "Government & Specialty Projects",
            description: "Public sector and specialized project solutions",
            companies: "Palantir, Booz Allen Hamilton, SAIC, Leidos, CACI",
            images:[
                { src: "https://images.pexels.com/photos/2100942/pexels-photo-2100942.jpeg", alt: "Government Image 1" },
                { src: "https://images.pexels.com/photos/4666/berlin-eu-european-union-federal-chancellery.jpg", alt: "Government Image 2" },
            ]
        },
        {
            title: "Non-Profits",
            description: "Technology solutions for non-profit organizations",
            companies:
                "Gates Foundation, Red Cross, UNICEF, World Wildlife Fund, Charity: Water",
            images:[
                { src: "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg", alt: "Non-Profit Image 1" },
                { src: "https://images.pexels.com/photos/2559749/pexels-photo-2559749.jpeg", alt: "Non-Profit Image 2" },
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-[#17191f] text-white px-6  py-16  ">
            <div className="mx-auto 2xl:w-4/5 md:px-10">
                {/* Header */}
                <h1 className="text-4xl  font-bold mb-8">Industries</h1>
                <p className="md:text-xl mb-24 max-w-2xl">
                    We unite with big brands and startups in various industries to create
                    award-winning work.
                </p>

                {/* Industries List */}
                <div className="space-y-12">
                    {industries.map((industry, index) => (
                        <div key={index} className="border-t border-gray-700 py-8 group relative overflow-visible">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                {/* Title Column - 4 columns wide */}
                                <div className="md:col-span-4">
                                    <h2 className="text-2xl font-semibold">{industry.title} \</h2>
                                </div>

                                {/* Description Column - 4 columns wide */}
                                <div className="md:col-span-4">
                                    <p className="text-gray-300">{industry.description}</p>
                                </div>

                                {/* Companies Column - 4 columns wide */}
                                <div className="md:col-span-4">
                                    <p className="text-gray-300">{industry.companies}</p>
                                </div>
                            </div>
                            <div className={container}>
                                <div className={effect}>
                                    <img alt={industry.images[1].alt} src={industry.images[1].src} className="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div
                                className={cn(
                                    container,
                                    "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12",
                                )}
                            >
                                <div className={cn(effect, "duration-200")}>
                                    <img alt={industry.images[0].alt} src={industry.images[0].src} className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;