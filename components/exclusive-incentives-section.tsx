import { WordPullUp } from "./ui/word-up";
import { Building2, GraduationCap, CircleDollarSign } from "lucide-react";
const ExclusiveIncentivesSection = () => {
    return (
        <section className="w-full h-full md:h-screen bg-linear-to-r from-blue-50 to-amber-50 py-[20vh] px-4 flex flex-col items-center">
            <WordPullUp words="Exclusive Incentives for Relocating Businesses" className="text-4xl md:text-5xl font-bold text-blue-900 mb-4" />
            <p className="text-lg text-neutral-700 max-w-2xl mb-10 text-center">
                Unlock industry-leading, performance-based incentives designed to maximize your ROI and accelerate your growth at NCGTP.
            </p>
            {/* Incentive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
                    <span className="text-amber-500 text-4xl mb-2"><CircleDollarSign /></span>
                    <h3 className="text-xl font-semibold mb-1">Performance-Based Grants</h3>
                    <div className="text-2xl font-bold text-blue-800 mb-2">Up to $5M</div>
                    <p className="text-neutral-600 text-center">Receive grants based on job creation and capital investment milestones.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
                    <span className="text-blue-500 text-4xl mb-2"><Building2 /></span>
                    <h3 className="text-xl font-semibold mb-1">Lowest Corporate Tax Rate</h3>
                    <div className="text-2xl font-bold text-blue-800 mb-2">2.5%</div>
                    <p className="text-neutral-600 text-center">Benefit from the lowest corporate tax rate in the US, maximizing your bottom line.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
                    <span className="text-green-500 text-4xl mb-2"><GraduationCap /></span>
                    <h3 className="text-xl font-semibold mb-1">Custom Training Grants</h3>
                    <div className="text-2xl font-bold text-blue-800 mb-2">Up to $1M</div>
                    <p className="text-neutral-600 text-center">Access funding for workforce training tailored to your operational needs.</p>
                </div>
                {/* Add more cards as needed */}
            </div>
            {/* CTA */}
            <button className="mt-10 bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-amber-600 transition-colors duration-200">
                See How Much You Qualify For
            </button>
        </section>
    );
}

export default ExclusiveIncentivesSection;