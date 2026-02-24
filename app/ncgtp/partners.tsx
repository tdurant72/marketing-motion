import {PartnersClient} from "@/components/PartnersClient";
import { WordPullUp } from "@/components/ui/word-up";

export function Partners() {
    return (
        <section className="w-full h-full md:h-[90vh] bg-neutral-100/50 backdrop-blur-xs py-16 md:mx-auto 2xl:w-4/5 md:px-16">
            <div className="mx-auto mb-12 px-6 md:px-0">
                <WordPullUp className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" words="Some of our partners" />
                <h2 className="hidden">Some of our partners</h2>
                <p className="text-neutral-800 text-xl md:text-2xl">
                    We are proud to collaborate with a diverse range of partners who share our commitment to excellence and innovation. Together, we strive to deliver exceptional solutions that drive success and create lasting value.
                </p>
            </div>
            <PartnersClient />
        </section>
    );
}