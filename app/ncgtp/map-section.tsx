"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, MapControls, MapMarker, MarkerContent, MarkerLabel } from "@/components/ui/map";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { properties } from "@/lib/properties";
import { WordPullUp } from "@/components/ui/word-up";

interface Property {
    id: number;
    name: string;
    specifics: any;
}


interface PropertyDetailsDrawerProps {
    property: Property;
    onClose: () => void;
}

// Helper to get attribute value by name from a group
function getAttributeValue(property: Property, attributeName: string): string {
    const siteAttributes = property?.specifics?.siteAttributes;
    if (!Array.isArray(siteAttributes)) return "N/A";
    const group = siteAttributes.find(
        (group: any) => group.attributes?.some((attr: any) => attr.attributeName === attributeName)
    );
    const attribute = group?.attributes?.find((attr: any) => attr.attributeName === attributeName);
    return attribute?.value || "N/A";
}

const PropertyDetailsDrawer: React.FC<PropertyDetailsDrawerProps> = ({ property, onClose }) => {
    // Get Transportation attributes
    console.log('siteAttributes:', property.specifics.details.siteAttributes);

    const transportationAttrs = property.specifics.details.siteAttributes?.find(
        (g: any) => g.groupName === "Transportation"
    )?.attributes || [];
    console.log('transportationAttrs:', transportationAttrs);
    const nearestAirport = getAttributeValue(property, "Nearest Airport");
    const distanceToAirport = getAttributeValue(property, "Distance to Airport");
    const port = getAttributeValue(property, "Port");
    const distanceToPort = getAttributeValue(property, "Distance to Port");
    const nearestInterstate = getAttributeValue(property, "Nearest Interstate");
    const distanceToInterstate = getAttributeValue(property, "Distance to Interstate");
    const electricProvider = getAttributeValue(property, "Electric Service Provider");
    const gasProvider = getAttributeValue(property, "Natural Gas Provider");
    const waterProvider = getAttributeValue(property, "Water Service Provider");
    const sewerProvider = getAttributeValue(property, "Sewer Provider");

    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-2/5 bg-white shadow-lg p-6 z-50 overflow-y-auto"
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-4 text-2xl">×</button>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">{property.name}</h2>
                {property.specifics.photos && property.specifics.photos.length > 0 && (
                    <div className="mb-6">
                        <Carousel className="w-[90%] mx-auto">
                            <CarouselContent>
                                {property.specifics.photos.map((photo: string, idx: number) => (
                                    <CarouselItem key={idx} className="flex items-center justify-center">
                                        <Image
                                            src={photo}
                                            alt={`${property.name} photo ${idx + 1}`}
                                            width={500}
                                            height={300}
                                            className="w-full rounded-lg object-cover h-60"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                )}
                <div className="mb-2 text-gray-600">
                    <span className="font-semibold">{property.specifics.details.cityName}, {property.specifics.details.stateAbbreviation.trim()}</span>: {property.specifics.details.minSize / 43560} acres
                </div>
                <div className="mb-2 text-gray-500">
                    <span className="font-semibold">Zoning:</span> {property.specifics.details.subTypes?.join(', ') || 'N/A'} <br /> <span className="font-semibold">Runway Access:</span> {property.specifics.details.CustomerDefinedAttributes?.includes('Runway Access') ? 'Yes' : 'No'}
                </div>
                <div className="mb-2 text-gray-500">
                    <span className="font-semibold">Nearest Airport:</span> {nearestAirport} ({distanceToAirport} mi) <br /> <span className="font-semibold">Nearest Port:</span> {port} ({distanceToPort} mi)
                </div>
                <div className="mb-2 text-gray-500">
                    <span className="font-semibold">Nearest Interstate:</span> {nearestInterstate} ({distanceToInterstate} mi)
                </div>
                <div className="mb-2 text-gray-500 text-sm">
                    <span className="font-semibold text-lg">Utilities:</span><br />
                    <div className="flex flex-wrap gap-2"><h4 className="text-base font-medium">Electric: {electricProvider},</h4> <h4 className="text-base font-medium">Gas: {gasProvider},</h4> <h4 className="text-base font-medium">Water: {waterProvider},</h4> <h4 className="text-base font-medium">Sewer: {sewerProvider}</h4></div>

                </div>
                <div className="mb-4 text-gray-700 text-base">
                    {property.specifics.details.description}
                </div>
                <div className="flex gap-2 mb-4">
                    {property.specifics.attachments?.[0]?.url && (
                        <Button size="sm" asChild>
                            <a href={property.specifics.attachments[0].url} target="_blank" rel="noopener noreferrer">Download PDF</a>
                        </Button>
                    )}
                    {property.specifics.contact?.email && (
                        <Button size="sm" variant="outline" asChild>
                            <a href={`mailto:${property.specifics.contact.email}?subject=Inquiry about ${property.name}`}>Contact Broker</a>
                        </Button>
                    )}
                </div>
                <div className="mt-2 text-xs text-gray-500">
                    Broker: {property.specifics.contact?.name} ({property.specifics.contact?.company})<br />
                    Phone: {property.specifics.contact?.cell}<br />
                    Email: {property.specifics.contact?.email}
                </div>
            </div>
        </motion.div>
    );
};

const MapSection: React.FC = () => {
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

    return (
        <section id='site-selection' className="flex flex-col gap-4 items-center overflow-hidden  p-0 py-[8vh] bg-radial-[at_25%_25%] from-slate-50 to-slate-200 to-75% h-full md:h-screen">
            <WordPullUp words='Site Selection' className='text-5xl text-slate-800 py-8' />
            <div id="copy"
                className="flex flex-col gap-4 md:w-5xl 2xl:w-7xl mx-auto p-0 ">
                <p className='text-2xl text-neutral-800 pb-10'>At NCGTP, site selection isn't a guessing game it's a launchpad. Our industrial sites and buildings are fully equipped with the infrastructure you need to hit the ground running. From precision utility planning to high-speed telecommunications, every detail is engineered for operational excellence. </p>
                {/* <Button variant="outline" className="w-max text-slate-800 border-slate-800 hover:bg-slate-100" onClick={()=>handleExploreClick()}>Explore Available Sites</Button> */}
                {/* <a className="px-4 py-3 bg-blue-900 text-slate-50 text-lg hover:bg-slate-50 hover:text-blue-900 border-2 border-blue-900 transition-colors duration-300 rounded-2xl w-fit" href="https://properties.zoomprospector.com/NCGLOBALTRANSPARK?page=1&s%5bSortDirection%5d=true&s%5bradiusLat%5d=0&s%5bSizeUnits%5d=1&s%5bradius%5d=0&s%5bradiusLng%5d=0&s%5bSortBy%5d=featured&s%5bAttributes%5d=1324%3A%5B%3D%5D1">Explore Available Sites</a> */}
            </div>
            <Card className="h-[75vh] md:w-5xl 2xl:w-7xl mx-auto p-0 overflow-hidden">
                {/* 35.33091811544694, -77.60923274711917 */}
                <Map center={[-77.60923274711917, 35.33091811544694]} zoom={13}>
                    {properties.map((place: Property) => (
                        <MapMarker
                            key={place.id}
                            longitude={place.specifics.details.lng}
                            latitude={place.specifics.details.lat}
                            onClick={() => setSelectedProperty(place)}
                        >
                            <MarkerContent>
                                <div className="size-5 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                    <Image
                                        src="/images/ncgtp/gtp-marker-icon.svg"
                                        alt={place.name}
                                        width={32}
                                        height={40}
                                        className="object-contain "
                                    />
                                </div>
                                <MarkerLabel position="bottom">{place.name}</MarkerLabel>
                            </MarkerContent>
                        </MapMarker>
                    ))}
                    <MapControls
                        position="bottom-right"
                        showZoom
                        showCompass
                        showLocate
                        showFullscreen
                    />
                </Map>
                <AnimatePresence>
                    {selectedProperty && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-slate-50/75 backdrop-blur-xs z-40"
                                onClick={() => setSelectedProperty(null)}
                            />
                            <PropertyDetailsDrawer
                                property={selectedProperty}
                                onClose={() => setSelectedProperty(null)}
                            />
                        </>
                    )}
                </AnimatePresence>
            </Card>
        </section>
    );
};

export default MapSection;