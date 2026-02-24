"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Brands from "./Brands";
import Process from "./Process";
import Impact from "./Impact";
import Industries from "./Industries";
import VideoWipe from "./VideoWipe";

const services = [
    {
        title: "AI Solutions",
        description: `Our AI solutions help businesses automate processes, gain insights, and create personalized experiences. We specialize in developing custom AI models and integrating them into existing systems to help you achieve your business goals.`,
        benefits: [
            "AI Strategy",
            "Machine Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Predictive Analytics",
            "AI Integration",
        ],
        image: "/images/projects/ai.jpg",
    },

    {
        title: "Branding",
        description: `At the core of our approach, we maintain that brand and UX are closely connected and work together. Our team specializes in creating and representing digital brand identities across channels, providing strategy assistance and guidelines to ensure consistency. `,
        benefits: [
            "Brand Strategy",
            "Brand Architecture",
            "Verbal Identity",
            "Visual Identity",
            "Brand Guidelines",
            "Brand Experiences",
        ],
        image: "/images/projects/adidas.jpg",
    },
    {
        title: "Digital Products",
        description: `We create memorable enterprise and consumer products that drive real business value while delivering exceptional user experiences. Our comprehensive approach combines strategic thinking with cutting-edge design and technology to build products that users love. `,
        benefits: [
            "Product Strategy",
            "UX/UI Design",
            "Design Systems",
            "Mobile Applications",
            "Web Applications",
            "Product Analytics",
        ],
        image: "/images/projects/nord.jpg",
    },
    {
        title: "Websites",
        description: `Our portfolio features award-winning websites designed to give users the best experience possible while meeting crucial business objectives. We combine stunning visual design with optimized performance and accessibility to create digital experiences that leave a lasting impression. `,
        benefits: [
            "Website Design",
            "Content Strategy",
            "Performance Optimization",
            "SEO Integration",
            "Analytics Setup",
            "Maintenance Services",
        ],
        image: "/images/projects/airbnb.jpg",
    },
    {
        title: "Content",
        description: `We work with brands to identify their unique content needs and deliver custom-made assets at the highest quality. Our content strategy encompasses everything from initial concept development to final production, ensuring that every piece of content aligns with your brand's voice and business objectives. `,
        benefits: [
            "Content Strategy",
            "Copywriting",
            "Video Production",
            "Photography",
            "Animation",
            "Social Media Content",
        ],
        image: "/images/projects/paypal.jpg",
    },
    {
        title: "Development",
        description: `Our designers and developers collaborate closely to create websites and products that provide exceptional user experiences and functionality.
    
    We specialize in building custom solutions that are tailored to your unique business needs, ensuring that your digital presence stands out from the competition. `,
        benefits: [
            "Frontend Development",
            "Backend Development",
            "Mobile Development",
            "API Integration",
            "Performance Optimization",
            "Technical Consulting",
        ],
        image: "/images/projects/redbull.jpg",
    },
];
const Services = () => {
    const servicesVariants: Variants = {
        offscreen: {
            y: 100,
            opacity: 0.5,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    }
    return (
        <main className="md:min-h-screen bg-white">
            <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
                <div className="md:w-2/3">
                    <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
                        A full service design agency crafting beautiful digital experiences.
                    </h1>
                    <p className="text-xl text-neutral-500">
                        Our rich design services encompass everything from brand identity and web design to UX/UI and digital marketing. We partner with businesses to create compelling, user-centric designs that drive engagement and deliver results.
                    </p>
                </div>
            </div>    
                <Brands />
                <Separator className="my-16" />
                <section className="md:py-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
                    <h2 className="text-xl font-bold text-[#7b7b7b] mb-10">
                        Our Services
                    </h2>
                    <div 
                        className="space-y-16 md:space-y-32"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={servicesVariants}
                                className="grid grid-cols-1 md:grid-cols-2 gap-10"
                            >
                                {/* image section */}
                                <div className="w-full">
                                    <Image
                                        priority
                                        width={1200}
                                        height={675}
                                        src={service.image}
                                        alt={`${service.title} image`}
                                        className="shadow-lg md:w-[640px] h-[400px] aspect-square object-cover"
                                    />
                                </div>

                                {/* content section */}
                                <div className="w-full">
                                    <h2 className="text-2xl font-bold mb-8">{service.title}</h2>
                                    <p className="text-[#7b7b7b] mb-12">{service.description}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {service.benefits.map((benefit, benefitIndex) => (
                                            <div
                                                className="flex items-center space-x-2"
                                                key={benefitIndex}
                                            >
                                                <span className="text-[#7b7b7b]">/ {benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
                <Separator className="my-8" />
                <Process />
                <Impact />
                <Industries />
                <VideoWipe />
            
        </main>
    );
}

export default Services;