import { Marquee } from "./ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
const companies = [
    { name: "coca-cola", logo: "/logos/logo-1.svg" },
    { name: "amazon", logo: "/logos/logo-2.svg" },
    { name: "forbes", logo: "/logos/logo-3.svg" },
    { name: "booking", logo: "/logos/logo-4.svg" },
    { name: "microsoft", logo: "/logos/logo-5.svg" },
    { name: "paypal", logo: "/logos/logo-6.svg" },
    { name: "redbull", logo: "/logos/logo-1.svg" },
    { name: "salesforce", logo: "/logos/logo-2.svg" },
    { name: "spotify", logo: "/logos/logo-3.svg" },
    { name: "lift", logo: "/logos/logo-4.svg" },
];

const firstRow = companies.slice(0, Math.ceil(companies.length / 2));
const secondRow = companies.slice(Math.ceil(companies.length / 2));

const CompanyLogo = ({ name, logo }: { name: string; logo: string }) => {
    return (
        <div className="mx-8 flex items-center justify-center">
            <Image
                priority
                width={200}
                height={200}
                src={logo}
                alt={`${name} logo`}
                className="w-16 h-16"
            />
        </div>
    );
};
const Trusted = () => {
    return (
        <section className={cn("w-full overflow-hidden bg-white py-12 ")}>
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Trusted by industry leaders worldwide
                </h2>
                <p className="text-gray-600">
                    Our platform is used by the world&apos;s most innovative companies.
                </p>
            </div>
            <div className="flex w-full flex-col items-center mt-10 md:mt-0 ">
                <Marquee pauseOnHover className="[--duration:30s]">
                    {firstRow.map((company, idx) => (
                        <CompanyLogo key={`${company.name}-${idx}`} {...company} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:30s] mt-10 md:mt-0">
                    {secondRow.map((company, idx) => (
                        <CompanyLogo key={`${company.name}-${idx}`} {...company} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}

export default Trusted;