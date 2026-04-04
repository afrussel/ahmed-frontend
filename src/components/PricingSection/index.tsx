"use client";
import { Check } from 'lucide-react';

export default function PricingSection() {
    return (
        <section className="bg-[#050505] py-20 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Card */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 px-3 py-1.5 rounded-full w-fit mb-4">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span className="text-xs text-gray-300 font-medium">Introducing</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">The Deep Work Blueprint</h3>
                    <p className="text-gray-400 text-sm mb-6">What extra you will get if you enroll now</p>
                    <ul className="space-y-3">
                        {["Bonus: 1:1 coaching session to boost focus.", "Discount: Save 30% when you enroll now!"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                    <Check size={12} className="text-blue-500" />
                                </div>
                                <span className="text-gray-300 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Card */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md">30% off</div>
                    <div>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-bold text-white">$349</span>
                            <span className="text-lg text-gray-500 line-through">$500</span>
                        </div>
                        <p className="text-gray-400 text-xs mb-6">30% off until 4d : 2h : 41m : 17s</p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "6h of videos - Step-by-step deep work strategies.",
                                "Templates & Trackers - Stay on track effortlessly.",
                                "Live Q&As - Expert guidance & accountability.",
                                "Exclusive Community - Connect with others."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                        <Check size={12} className="text-blue-500" />
                                    </div>
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-3 rounded-lg transition-all">
                        Enroll now
                    </button>
                </div>
            </div>
        </section>
    );
}