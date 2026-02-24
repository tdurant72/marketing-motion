"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaBuilding, FaHandshake } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoIosBoat } from "react-icons/io";
import IncentiveCard from "@/components/incentive-card";

const IncentiveCardSection = () => {
    const containerVariants: Variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                staggerChildren: 0.5,
                ease: "easeIn"
            }
        }
    };

    const itemVariants = (delay: number): Variants => ({
        hidden: { opacity: 0, x: 200 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeIn", delay }
        }
    });
    return (
        <>
            <div className="flex flex-col md:flex-row md:gap-4 mt-2 md:-mt-52">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-stretch md:flex-row gap-4 h-full bg-linear-900 to-r from-slate-200/0 to-slate-400 p-4 rounded-t-2xl">

                    <IncentiveCard
                        imgSrc="/images/ncgtp/infrastructure.webp" imgAlt="infrastructure" title="Grow Jobs, Earn Grants" description="Cash grants tied to job creation, Up to 75% payroll tax reimbursement."
                        className="bg-blue-700/90"
                        variants={itemVariants(0)}
                    >
                        <FaBuilding className="text-white relative flex items-center justify-center h-6 w-6" size={24} />
                    </IncentiveCard>
                    <IncentiveCard
                        imgSrc="/images/ncgtp/approval.webp" imgAlt="infrastructure"
                        title="Build with State Support" description="Matching grants for capital investment, Fast-track approval for qualifying projects"
                        className="bg-teal-700/70"
                        variants={itemVariants(0.4)}
                    >
                        <BsPatchCheckFill className="text-white relative flex items-center justify-center h-6 w-6" size={24} />
                    </IncentiveCard>
                    <IncentiveCard
                        imgSrc="/images/ncgtp/ribbon.webp" imgAlt="infrastructure"
                        title="Revitalize, Reclaim, Reinvest" description="Grants for renovating vacant industrial buildings, Encourages sustainable redevelopment"
                        className="bg-amber-700/70"
                        variants={itemVariants(0.8)}
                    >
                        <FaHandshake className="text-white relative flex items-center justify-center h-6 w-6" size={24} />
                    </IncentiveCard>
                    <IncentiveCard
                        imgSrc="/images/ncgtp/truck.webp" imgAlt="infrastructure"
                        title="Train Your Workforce, On Us" description="Tailored training via NC Community Colleges, Curriculum aligned to your tech stack"
                        className="bg-indigo-700/70"
                        variants={itemVariants(1.2)}
                    >
                        <IoIosBoat className="text-white relative flex items-center justify-center h-6 w-6" size={24} />
                    </IncentiveCard>
                </motion.div>
            </div>
            {/* <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1.3 }}
                className="col-start-2 col-span-1 row-start-1 row-end-4 bg-neutral-500/25 w-full" /> */}
        </>
    );
}

export default IncentiveCardSection;