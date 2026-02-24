"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { cn } from "@/lib/utils";
export interface ProcessCardProps {
    imgSrc?: string;
    imgAlt?: string;
    cardNumber?: string;
    title?: string;
    description?: string;
    className?: string;
    variants?: Variants;
}
const ProcessCard = ({ imgSrc, imgAlt, cardNumber, title, description, className, variants }: ProcessCardProps) => {
    return (
        <motion.div 
            variants={variants} 
            initial="hidden" 
            whileInView="visible"
            className={(cn("flex flex-col rounded-2xl h-full w-full md:max-w-[30%] relative overflow-hidden group p-4 justify-center items-end", className))}>
            <h3 className="bg-amber-400 rounded-full p-4 text-slate-50 text-xl w-14 h-14 text-center -mb-8 mr-2 z-20">{cardNumber}</h3>
            <Image
                src={imgSrc || "/default-image.png"}
                width={400}
                height={400}
                alt={imgAlt || "process step"}
                className="mb-6 rounded-lg shadow-lg  object-cover object-center"
            />
            <div>
                <h4 className="text-slate-800 text-xl md:text-2xl font-semibold  my-3 text-center">{title}</h4>
                <p className="text-slate-700 text-base md:text-lg text-balance text-center">{description}</p>
            </div>
        </motion.div>
    );
}

export default ProcessCard;