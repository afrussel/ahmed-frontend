"use client";
import { Check } from 'lucide-react';
import CountdownTimer from "@/components/CountdownTimer";

export default function PricingSection() {
    return (
        <section id="pricing" className="pricing bg-[#050505] py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-start">
                <div className="w-full lg:w-[784px] h-[570px] bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-center">

                    {/* Badge */}
                    <div className="badge-glow inline-flex items-center gap-2 w-fit mb-6">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                        </span>
                        <span className="text-xs md:text-sm text-gray-300 font-medium">Introducing</span>
                    </div>


                    <h3 className="mb-3">The Deep Work Blueprint</h3>
                    <p className="subtitle mb-8">What extra you will get if you enroll now</p>

                    <ul className="space-y-6">
                        {[
                            "Bonus: 1:1 coaching session to boost focus.",
                            "Discount: Save 30% when you enroll now!"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="round-icon bg-section-dark-icon-bg flex items-center justify-center">
                                    <img
                                        src="/images/icons/p-plus.svg"
                                        alt="Price icon"
                                        className="w-5 h-5"
                                    />
                                </div>
                                <span className="item-text">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="price-row w-full lg:w-[480px] bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                        {/* Price Row */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-baseline gap-2">
                                <span className="main-price">$349</span>
                                <span className="discount line-through">$500</span>
                            </div>
                            <span className="discount-tag bg-[#2466F2] text-white px-3 py-1.5">
                                30% off
                            </span>
                        </div>

                        {/* Countdown */}
                        <p className="text-gray-400 text-sm mb-8">
                            30% off until <CountdownTimer />
                        </p>

                        {/* Features List */}
                        <ul className="space-y-8 price-box">
                            {[
                                "6h of videos - Step-by-step deep work strategies.",
                                "Templates & Trackers - Stay on track effortlessly.",
                                "Live Q&As - Expert guidance & accountability.",
                                "Exclusive Community - Connect with others."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-[#111] border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Check size={14} className="text-[#3b82f6]" />
                                    </div>
                                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-3.5 rounded-xl transition-all active:scale-[0.98]">
                        Enroll now
                    </button>
                </div>

            </div>
        </section>
    );
}