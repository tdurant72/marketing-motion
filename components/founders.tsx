'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import {
    PiArrowArcLeft,
    PiArrowArcRight,
    PiGlobe,
    PiLinkedinLogo,
    PiTwitterLogo,
} from "react-icons/pi";
// Social links for each founder
interface Social {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
}

// Founders data structure
interface Founders {
    name: string;
    role: string;
    image: string;
    description: string;
    social: Social
}

// Array of founder profiles
const foundersArrary: Founders[] = [
    {
        name: "Alex Johnson",
        role: "CEO & Founder",
        image: "/images/founders/image-1.jpg",
        description:
            "Leading our vision with over a decade of experience in AI and business strategy",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            website: "https://website.com",
        },
    },
    {
        name: "Jamie Lee",
        role: "CTO",
        image: "/images/founders/image-2.jpg",
        description:
            "Expert in AI technologies, driving innovation and technical excellence across our projects",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            website: "https://website.com",
        },
    },
    {
        name: "Morgan Smith",
        role: "Marketing Director",
        image: "/images/founders/image-3.jpg",
        description:
            "Crafting impactful marketing strategies that resonate with our clients and their audiences",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        name: "Taylor Brown",
        role: "Lead Developer",
        image: "/images/founders/image-4.jpg",
        description:
            "Creating innovative solutions with our expert development team",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        name: "John Smith",
        role: "Head of Design",
        image: "/images/founders/john-smith.jpg",
        description:
            "Driving creative direction and design excellence across all our projects",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        name: "Emily Green",
        role: "Product Manager",
        image: "/images/founders/image-5.jpg",
        description:
            "Leading product development and strategy with a focus on user experience",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        name: "Ethan Black",
        role: "Data Scientist",
        image: "/images/founders/image-6.jpg",
        description:
            "Applying advanced data science techniques to drive insights and innovation",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        name: "Ava Brown",
        role: "Customer Success",
        image: "/images/founders/image-7.jpg",
        description:
            "Ensuring our clients receive the best possible service and support",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        name: "Noah White",
        role: "Business Development",
        image: "/images/founders/image-1.jpg",
        description:
            "Building relationships and driving growth through strategic partnerships",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
]

// Founders component displays a carousel/grid of founder profiles
const Founders = () => {
    // Index of the first founder to show
    const [startIndex, setStartIndex] = useState(0);
    // Number of founder cards to show at once
    const [itemsToShow, setItemsToShow] = useState(4);
    // Whether the view is mobile (affects itemsToShow and drag)
    const [isMobile, setIsMobile] = useState(false);

    // Framer Motion animation variants for the container
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                duration: 0.2,
            },
        },
    };
    // Animation variants for each founder card
    const item: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                duration: 0.5,
                bounce: 0.4,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.3,
            },
        },
    };

    // Go to next set of founders in carousel
    const next = () => {
        setStartIndex((prev) => {
            const nextIndex = prev + 1;
            const maxStart = foundersArrary.length - itemsToShow;
            return nextIndex > maxStart ? 0 : nextIndex;
        });
    };

    // Go to previous set of founders in carousel
    const prev = () => {
        setStartIndex((prev) => {
            const nextIndex = prev - 1;
            return nextIndex < 0 ? foundersArrary.length - itemsToShow : nextIndex;
        });
    };

    // Type for drag event info
    type PanInfo = {
        offset: {
            x: number;
            y: number;
        };
        velocity: {
            x: number;
        };
    };

    // Handle drag end for swipe navigation on mobile
    const handleDragEnd = (_event: never, info: PanInfo) => {
        const swipeThreshold = 50;
        if (
            info.offset.x < -swipeThreshold &&
            startIndex < foundersArrary.length - itemsToShow
        ) {
            next();
        } else if (info.offset.x > swipeThreshold && startIndex > 0) {
            prev();
        }
    };

    // Slice the founders array to get only the visible founders
    const visibleFounders = foundersArrary.slice(startIndex, startIndex + itemsToShow);

    // Update itemsToShow and isMobile on window resize
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setItemsToShow(mobile ? 2 : 4);
            setStartIndex((prev) => {
                const maxStartIndex = foundersArrary.length - (mobile ? 2 : 4);
                return prev > maxStartIndex ? maxStartIndex : prev;
            })
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [foundersArrary.length]);

    // Render founders section with carousel/grid and navigation
    return (<section className="px-6 
      mx-auto 2xl:w-4/5 md:px-16
      py-16 md:py-32">
        {/* Header and navigation arrows */}
        <div className="flex justify-between items-center mb-12">
            <div>
                <h2 className="text-3xl font-bold mb-2">
                    Trusted by 400+ Business Owners
                </h2>
                <p className="text-gray-600">
                    Meet the passionate experts driving our AI solutions.
                </p>
            </div>
            <div className="hidden md:flex gap-2">
                <motion.button onClick={prev}>
                    <PiArrowArcLeft className="text-black border rounded-full flex items-center justify-center text-5xl p-3 hover:bg-black/10 transition-colors" />
                </motion.button>
                <motion.button onClick={next}>
                    <PiArrowArcRight className="text-black border rounded-full flex items-center justify-center text-5xl p-3 hover:bg-black/10 transition-colors" />
                </motion.button>
            </div>
        </div>

        {/* Carousel/grid of founder cards */}
        <div className="relative max-w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
                    key={startIndex}
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    drag={isMobile ? "x" : false}
                    dragSnapToOrigin
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    style={{
                        touchAction: "none",
                        x: 0,
                    }}
                >
                    {visibleFounders.map((founder, index) => (
                        <motion.div
                            key={`${founder.name}-${index}`}
                            variants={item}
                            className="md:mb-0 mb-8"
                        >
                            {/* Founder image */}
                            <div className="bg-gray-100 aspect-square mb-4 overflow-hidden">
                                <Image
                                    priority
                                    width={500}
                                    height={500}
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Founder name and role */}
                            <h3 className="font-bold text-lg mb-1">{founder.name}</h3>
                            <p className="text-[#7b7b7b] text-sm mb-2">{founder.role}</p>
                            {/* Founder description */}
                            <p className="text-gray-700 text-sm mb-4">
                                {founder.description}
                            </p>
                            {/* Social icons */}
                            <div className="flex gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <PiLinkedinLogo className="w-5 h-5 text-[#7b7b7b] hover:text-gray-900 cursor-pointer" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <PiTwitterLogo className="w-5 h-5 text-[#7b7b7b] hover:text-gray-900 cursor-pointer" />
                                </motion.div>
                                {founder.social.website && (
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 17,
                                        }}
                                    >
                                        <PiGlobe className="w-5 h-5 text-[#7b7b7b] hover:text-gray-900 cursor-pointer" />
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    </section>);
}

export default Founders;