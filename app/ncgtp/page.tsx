import { Metadata } from "next";
import ShaderBackground from "@/components/ui/shader-background2";
import Hero from "./Hero";
import BusinessAdvantages from "./business-advantages";
import Infrastructure from "./infrastructure";
import ParallaxDivider from "@/components/parallaxdivider";
import {Partners} from "./partners";
import Latest from "./latest";
import SiteSelection from "@/components/site-selection";
import SiteSelectionAlt from "./site-selection-alt";
import Faq from "./faq";
import Process from "./process";
import StickyExpertButton from "@/components/sticky-expert-button";
import ConciergeRelocationBlurb from "@/components/concierge-relocation-blurb";
import MapSection from "./map-section";
export const metadata: Metadata = {
    title: "NCGTP - North Carolina Global TransPark",
    description: "Discover the North Carolina Global TransPark (NCGTP), a premier logistics and aerospace industrial park designed to accelerate business growth and innovation. Explore our state-of-the-art infrastructure, strategic location, and business advantages that make NCGTP the ideal destination for your next venture.",
    keywords: [
        "NCGTP",
        "North Carolina Global TransPark",
        "logistics hub",
        "aerospace park",
        "industrial park",
        "business growth",
        "infrastructure",
        "site selection",
        "business incentives",
        "supply chain solutions",
        "manufacturing",
        "distribution center",
        "transportation network",
        "economic development",
        "Eastern North Carolina"
    ],
    openGraph: {
        title: "NCGTP - North Carolina Global TransPark",
        description: "Discover the North Carolina Global TransPark (NCGTP), a premier logistics and aerospace industrial park designed to accelerate business growth and innovation. Explore our state-of-the-art infrastructure, strategic location, and business advantages that make NCGTP the ideal destination for your next venture.",
        url: "https://www.ncgtp.com/",
        siteName: "NCGTP",
        images: [
            {
                url: "https://www.ncgtp.com/og-image-ncgtp.png",
                width: 1200,
                height: 630,
                alt: "NCGTP - North Carolina Global TransPark",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates:{
        canonical: "https://www.ncgtp.com/ncgtp",
    }
}
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NCGTP - North Carolina Global TransPark",
  "url": "https://www.ncgtp.com/ncgtp",
  "description": "Discover the North Carolina Global TransPark (NCGTP), a premier logistics and aerospace industrial park designed to accelerate business growth and innovation. Explore our state-of-the-art infrastructure, strategic location, and business advantages that make NCGTP the ideal destination for your next venture.",
  "streetAddress": "2711 Gardner Rd",
  "addressLocality": "Kinston",
  "addressRegion": "NC",
  "postalCode": "28504",
  "addressCountry": "USA",
  "image": "https://www.ncgtp.com/og-image-ncgtp.png",
  "keywords": [
    "NCGTP",
    "North Carolina Global TransPark",
    "logistics hub",
    "aerospace park",
    "industrial park",
    "business growth",
    "infrastructure",
    "site selection",
    "business incentives",
    "supply chain solutions",
    "manufacturing",
    "distribution center",
    "transportation network",
    "economic development",
    "Eastern North Carolina"
  ],
  "publisher": {
    "@type": "Organization",
    "name": "NCGTP",
    "url": "https://www.ncgtp.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.ncgtp.com/og-image-ncgtp.png"
    }
  }
};
const Page = () => {
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />;
    return ( 
        <div className="py-8 bg-neutral-200/50 w-full">
            <Hero />
            <BusinessAdvantages />
            <Infrastructure />
            <ConciergeRelocationBlurb />
            {/* <ParallaxDivider /> */}
            <Process />
            <Partners />
            {/* <SiteSelection /> */}
            {/* <SiteSelectionAlt /> */}
            <MapSection />
            <Latest />
            <Faq />
            {/* background graphic webgl */}
            <ShaderBackground/>
            <StickyExpertButton />
        </div>
     );
}
 
export default Page;