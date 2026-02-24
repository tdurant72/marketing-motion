import Image from "next/image";
import {motion} from "framer-motion";
import type { Variants } from "framer-motion";
import { cn } from "@/lib/utils";
export interface IncentiveCardProps {
    imgSrc?: string;
    imgAlt?: string;
    title?: string;
    description?: string;
    className?: string;
    variants?: Variants;
}
const IncentiveCard = ({ imgSrc, imgAlt, title, description, children, className, variants }: IncentiveCardProps & { children: React.ReactNode, className?: string }) => {
    // Animation state is now controlled by parent container
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className={cn("flex flex-col flex-1 rounded-2xl w-full md:w-1/4 relative overflow-hidden group p-4 justify-center items-center", className)}>
            <div className="image-container w-full h-full absolute top-0 left-0 bottom-0 right-0 pointer-events-none">
                <Image
                    src={imgSrc || "/default-image.png"}
                    alt={imgAlt || "infrastructure"}
                    width={300}
                    height={200}
                    className="object-cover w-full h-auto opacity-30 transition-opacity duration-300 rounded-2xl"
                />
            </div>
            {/* <FaBuilding className="text-white relative flex items-center justify-center h-12 w-12" size={48} /> */}
            {children}
            <h4 className="text-slate-50 text-lg text-center text-shadow-md text-shadow-slate-800 mt-3 z-20">{title}</h4>
            <p className="text-slate-50 text-sm text-center text-shadow-md text-shadow-slate-800 mt-1 z-20">{description}</p>
        </motion.div>
    );
}

export default IncentiveCard;