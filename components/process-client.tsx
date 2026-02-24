"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ProcessCard from "@/components/process-card";
const ProcessClient = () => {
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
        hidden: { opacity: 0, y: 200 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeIn", delay }
        }
    });
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row flex-wrap gap-6 mx-auto justify-center">
            <ProcessCard
                imgSrc="/images/ncgtp/site-card.webp"
                imgAlt="Site card"
                cardNumber="1"
                title="Talk to one of our experts"
                description="Whether it's a production facility or corporate headquarters, we'll help you find the perfect space"
                variants={itemVariants(0)}
            />
            <ProcessCard
                imgSrc="/images/ncgtp/zoning-card.webp"
                imgAlt="Site card"
                cardNumber="2"
                title="Zoning & Licensing"
                description="We'll make sure you have what you need to be ready for business. With our concierge service, we help you every step of the way."
                variants={itemVariants(0.4)}
            />
            <ProcessCard
                imgSrc="/images/ncgtp/build-card.webp"
                imgAlt="Site card"
                cardNumber="3"
                title="Start Construction"
                description="With minimal red tape you are ready to start building your dream facility."
                variants={itemVariants(0.8)}
            />
        </motion.div>
    );
}

export default ProcessClient;