"use client";
import { Check } from 'lucide-react';
import CountdownTimer from "@/components/CountdownTimer";

export default function PricingSection() {
    return (
        <section className="bg-[#050505] py-20 px-4">
            {/* Parent: Centers the exact width block, stacks on mobile */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-start">

                {/* ✅ Left Card: 784px × 570px */}
                <div className="w-full lg:w-[784px] h-[570px] bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 px-3 py-1.5 rounded-full w-fit mb-6">
                        <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full"></span>
                        <span className="text-xs text-gray-300 font-medium">Introducing</span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-3">The Deep Work Blueprint</h3>
                    <p className="text-gray-400 text-sm mb-8">What extra you will get if you enroll now</p>

                    <ul className="space-y-4">
                        {[
                            "Bonus: 1:1 coaching session to boost focus.",
                            "Discount: Save 30% when you enroll now!"
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

                {/* ✅ Right Card: 480px × Auto Height */}
                <div className="w-full lg:w-[480px] bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                        {/* Price Row */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-white">$349</span>
                                <span className="text-lg text-gray-500 line-through">$500</span>
                            </div>
                            <span className="bg-[#3b82f6] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                                30% off
                            </span>
                        </div>

                        {/* Countdown */}
                        <p className="text-gray-400 text-sm mb-8">
                            30% off until <CountdownTimer />
                        </p>

                        {/* Features List */}
                        <ul className="space-y-4 mb-8">
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