import { WordPullUp } from "@/components/ui/word-up";
import ProcessClient from "@/components/process-client";
const Process = () => {

    return (
        <section id="process" className="pt-[8vh] bg-radial-[at_25%_25%] from-slate-50 to-slate-200 to-75% h-full md:h-screen overflow-hidden">
            <div className="container mx-auto h-full md:w-5xl 2xl:w-7xl content-start overflow-hidden">
                <WordPullUp words="We Make It Easy" className="text-4xl md:text-5xl text-slate-800"/>
                <h1 className="hidden">We Make It Easy</h1>
                <h2 className="text-slate-800 mt-6 mb-10 text-2xl md:text-3xl text-center">Move your business to a place designed for success</h2>
                <ProcessClient />
                <div className="hidden gap-6">
                    <div>
                        <h3>1</h3>
                        <h4>Talk to one of our experts</h4>
                        <p>Whether it's a production facility or corporate headquarters, we'll help you find the perfect space</p>
                    </div>
                    <div>
                        <h3>2</h3>
                        <h4>Zoning & Licensing</h4>
                        <p>We'll make sure you have what you need to be ready for business. With our concierge service, we help you every step of the way.</p>
                    </div>
                    <div>
                        <h3>3</h3>
                        <h4>Start Construction</h4>
                        <p>With minimal red tape you are ready to start building your dream facility.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;