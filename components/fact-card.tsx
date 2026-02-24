"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosBusiness, IoMdPeople, IoIosAirplane } from "react-icons/io";
import { MdPrecisionManufacturing } from "react-icons/md";
const iconMap = {
    IoIosBusiness,
    IoMdPeople,
    RiMoneyDollarCircleFill,
    MdPrecisionManufacturing,
    IoIosAirplane
};
const FactCard = ({ src, fact, description }: { src: string | React.ElementType; fact: string; description: string; }) => {
    return (
        <motion.figure className="relative overflow-hidden group bg-slate-50 w-full rounded-t-2xl">
            <div className="relative flex items-center justify-center h-[150px] w-[200px]">
                {/* If src is a string and matches an icon, render the icon. Otherwise, treat as image path. */}
                {typeof src === "string" && iconMap[src as keyof typeof iconMap] ? (
                    React.createElement(iconMap[src as keyof typeof iconMap], { size: 50, className: "text-slate-200" })
                ) : typeof src === "string" ? (
                    <Image
                        width={50}
                        height={50}
                        src={src}
                        alt="facts"
                        className="object-cover w-full "
                    />
                ) : (
                    React.createElement(src, { size: 50, className: "text-slate-200" })
                )}
                <div className="absolute bottom-0 left-0 p-4 ">
                    <h3 className="ext-slate-900 text-xl font-semibold">{fact}</h3>
                    <p className="text-slate-800 text-sm">{description}</p>
                </div>
            </div>
        </motion.figure>
    );
}

export default FactCard;