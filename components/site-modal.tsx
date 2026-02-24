"use client"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"


interface ModalProps {
    siteData: any; // Replace 'any' with a more specific type if available
    onClose: () => void;
}
const variants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        transition: { type: "spring", stiffness: 50, damping: 300 },
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        // transition: { type: "spring", stiffness: 100, damping: 300 },
    }),
};
const Modal = ({ siteData, onClose }: ModalProps) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

    const nextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % (siteData.specifics?.photos?.length || 1))
    }

    const prevPhoto = () => {
        setCurrentPhotoIndex(
            (prevIndex) =>
                (prevIndex - 1 + (siteData.specifics?.photos?.length || 1)) % (siteData.specifics?.photos?.length || 1),
        )
    }

    interface SiteAttribute {
        attributeName: string;
        value: string;
    }

    interface SiteAttributeGroup {
        attributes: SiteAttribute[];
    }

    interface SiteContact {
        name?: string;
        title?: string;
        company?: string;
        email?: string;
    }

    interface SiteAttachment {
        url: string;
        label: string;
    }

    interface SiteSpecifics {
        details?: {
            description?: string;
        };
        photos?: string[];
        siteAttributes?: SiteAttributeGroup[];
        contact?: SiteContact;
        attachments?: SiteAttachment[];
        direction?: number;
    }

    interface SiteData {
        name?: string;
        specifics?: SiteSpecifics;
    }

    const getAttributeValue = (attributeName: string): string => {
        const attribute: SiteAttribute | undefined = siteData.specifics?.siteAttributes
            ?.find((group: SiteAttributeGroup) => group.attributes?.some((attr: SiteAttribute) => attr.attributeName === attributeName))
            ?.attributes?.find((attr: SiteAttribute) => attr.attributeName === attributeName);

        return attribute?.value || "N/A";
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-100/50 backdrop-blur-md  flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
                        <h2 className="text-2xl font-bold text-[#2563eb]">{siteData.name || "Site Details"}</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">Site Details</h3>
                            <p className="text-[#64748b]">{siteData.specifics?.details?.description || "No description available."}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Photo Gallery</h3>
                            <div className="relative h-[256px]">
                                <AnimatePresence initial={false} custom={siteData.specifics?.direction}>
                                    <motion.img
                                        src={siteData.specifics?.photos?.[currentPhotoIndex] || "/placeholder.svg"}
                                        key={`Site photo ${currentPhotoIndex + 1}`}
                                        alt={`Site photo ${currentPhotoIndex + 1}`}
                                        width={800}
                                        height={450}
                                        className="absolute inset-0 w-full h-64 object-cover rounded"
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        custom={siteData.specifics?.direction}
                                    />
                                </AnimatePresence>
                                {/* <Image
                                    src={siteData.specifics?.photos?.[currentPhotoIndex] || "/placeholder.svg"}
                                    alt={`Site photo ${currentPhotoIndex + 1}`}
                                    width={800}
                                    height={450}
                                    unoptimized
                                    className="w-full h-64 object-cover rounded"
                                /> */}
                                {(siteData.specifics?.photos?.length || 0) > 1 && (
                                    <>
                                        <button
                                            onClick={prevPhoto}
                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer"
                                        >
                                            &lt;
                                        </button>
                                        <button
                                            onClick={nextPhoto}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer"
                                        >
                                            &gt;
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="relativegrid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Transportation</h3>
                                <ul className="text-[#64748b]">
                                    <li>Nearest Airport: {getAttributeValue("Nearest Airport")}</li>
                                    <li>Distance to Airport: {getAttributeValue("Distance to Airport")}</li>
                                    <li>Nearest Interstate: {getAttributeValue("Nearest Interstate")}</li>
                                    <li>Distance to Interstate: {getAttributeValue("Distance to Interstate")}</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Utilities</h3>
                                <ul className="text-[#64748b]">
                                    <li>Electric: {getAttributeValue("Electric Service Provider")}</li>
                                    <li>Natural Gas: {getAttributeValue("Natural Gas Provider")}</li>
                                    <li>Water: {getAttributeValue("Water Service Provider")}</li>
                                    <li>Sewer: {getAttributeValue("Sewer Provider")}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h3>
                            <div className="text-[#64748b]">
                                <p>{siteData.specifics?.contact?.name || "N/A"}</p>
                                <p>{siteData.specifics?.contact?.title || "N/A"}</p>
                                <p>{siteData.specifics?.contact?.company || "N/A"}</p>
                                <p>
                                    Email:{" "}
                                    {siteData.specifics?.contact?.email ? (
                                        <a href={`mailto:${siteData.specifics.contact.email}`} className="text-blue-600 hover:underline">
                                            {siteData.specifics.contact.email}
                                        </a>
                                    ) : (
                                        "N/A"
                                    )}
                                </p>
                            </div>
                        </div>
                        {
                            siteData.specifics?.attachments[0]?.url && (
                                <div className="mt-6">
                                    <a className="bg-amber-400 hover:bg-amber-500 my-4 p-4  text-black no-underline rounded" href={`${siteData.specifics?.attachments[0]?.url}`} target="_blank">{`${siteData.specifics?.attachments[0].label}`}</a>
                                </div>
                            )
                        }

                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Modal