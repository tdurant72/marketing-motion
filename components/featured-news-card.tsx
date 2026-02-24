import React from 'react';
import { cn } from '@/lib/utils';
export interface FeaturedNewsCardProps {
    imgSrc?: string;
    imgAlt?: string;
    title?: string;
    children?: React.ReactNode;
    className?: string;
    link?: string;
    isMain?: boolean;
}
const FeaturedNewsCard = ({ imgSrc, imgAlt, title, children, link, isMain = false, className }: FeaturedNewsCardProps) => {
    return (
        <div className={`relative flex flex-col items-end mt-6 text-neutral-800 bg-white drop-shadow-xl shadow-xl bg-clip-border rounded-xl ${isMain ? "w-full" : "w-full md:w-[45%]"}`}>
            <div
                className={`relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 ${isMain ? "h-56 w-[95%] mx-auto" : "h-28 w-28"}`}>
                <img
                    src={imgSrc}
                    alt={imgAlt} className={`object-cover ${isMain ? "h-auto w-full" : "h-full w-auto"}`} />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 text-2xl/7 antialiased font-semibold  tracking-normal text-blue-gray-900">
                    {title}
                </h5>
                {children}
            </div>
            <div className="p-6 pt-0">
                <a href={link} target="_blank" rel="noopener noreferrer"
                    className="align-middle select-none font-semibold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-6 rounded-lg transition-all duration-300 ease-in-out  bg-blue-700 hover:bg-orange-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ">
                    Read More<span className="hidden">Read more about {title}</span>
                </a>
            </div>
        </div>
    );
}

export default FeaturedNewsCard;