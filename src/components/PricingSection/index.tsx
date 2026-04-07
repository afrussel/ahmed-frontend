"use client";
import { Check } from 'lucide-react';
import CountdownTimer from "@/components/CountdownTimer";
import ScrollReveal from "@/components/ScrollReveal";

export default function PricingSection() {
    return (
        <section id="pricing" className="pricing bg-white dark:bg-[#08090A] py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
                {/* Left (58%) */}
                <div className="w-full lg:w-[58%]">
                    <ScrollReveal direction="up" delay={100}>
                        <div className="w-full h-[570px] bg-[#f5f6f7] dark:bg-[#111214] rounded-2xl p-8 lg:p-10 flex flex-col justify-center">

                            {/* Badge */}
                            <div className="badge-glow inline-flex items-center gap-2 w-fit mb-6">
                                <span className="relative flex h-2 w-2 shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                                </span>
                                <span className="text-xs md:text-sm !text-black dark:!text-[#d0d5d9] font-medium">Introducing</span>
                            </div>


                            <h3 className="!text-[#000000] dark:!text-[#e0e3e5] mb-3">The Deep Work Blueprint</h3>
                            <p className="subtitle !text-[#000000] dark:!text-[#d0d5d9] mb-8">What extra you will get if you enroll now</p>

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
                                        <span className="item-text !text-[#000000] dark:!text-[#aaaeb2]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right (42%) */}
                <div className="w-full lg:w-[42%]">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="price-row border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
                            <div>
                                {/* Price Row */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="main-price !text-black dark:!text-[#d0d5d9]">$349</span>
                                        <span className="discount line-through !text-black dark:!text-[#aaaeb2]">$500</span>
                                    </div>
                                    <span className="discount-tag bg-[#2466F2] text-white px-3 py-1.5">
                                        30% off
                                    </span>
                                </div>

                                {/* Countdown */}
                                <p className="!text-black dark:!text-[#d0d5d9] mb-8">
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
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="round-icon bg-section-dark-icon-bg flex items-center justify-center">
                                                <img
                                                    src="/images/icons/t3.svg"
                                                    alt="Price icon"
                                                    className="w-5 h-5"
                                                />
                                            </div>
                                            <span className="item-text !text-black dark:!text-[#aaaeb2]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <button className="cta-btn w-full bg-[#2466F2] hover:bg-[#2563eb] text-white py-3.5 transition-all active:scale-[0.98]">
                                Enroll now
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}