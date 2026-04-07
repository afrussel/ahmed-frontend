"use client";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const problemImages = [
    { src: "/images/p1.png", alt: "Person feeling overwhelmed with tasks" },
    { src: "/images/p2.png", alt: "Person distracted by phone notifications" },
    { src: "/images/p3.png", alt: "Person procrastinating instead of working" }
];

export default function ProblemSection() {
    return (
        <section className="problem-section bg-[#08090A] py-20 md:py-32 px-4 text-center">
            <div className="max-w-4xl mx-auto">

                {/* Badge with ScrollReveal */}
                <ScrollReveal direction="up">
                    <div className="badge-glow mb-8">
                        <span className="relative flex h-2 w-2 shrink-0">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                        </span>
                        <span className="text">
                          Are Distractions Holding You Back?
                        </span>
                    </div>
                </ScrollReveal>

                {/* Main Text with ScrollReveal - SEO: Proper H2 tag */}
                <ScrollReveal direction="up" delay={100}>
                    <h2 className="problem-section-title mb-12">
                        If you struggle to focus, feel <br className="hidden md:block" /> overwhelmed
                        by endl<span className="text-gray-500 font-normal">ess tasks, or <br className="hidden md:block" />
                        procrastinate instead of making <br className="hidden md:block" />
                        progress, you&apos;re not alone. </span>
                    </h2>
                </ScrollReveal>

                {/* 3 Images Grid with ScrollReveal */}
                <ScrollReveal direction="scale" delay={200}>
                    <div className="flex flex-row md:flex-row items-center justify-center gap-4">
                        {problemImages.map((img, index) => (
                            <div
                                key={index}
                                className="relative group"
                            >
                                {/* Next.js Image with exact dimensions */}
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={118}
                                    height={120}
                                    className="w-[118px] h-[120px] object-cover rounded-[12px] border border-white/10 opacity-90
                           group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                    loading="lazy"
                                    quality={85}
                                />

                                {/* Optional: Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-[12px] bg-[#3b82f6]/0 group-hover:bg-[#3b82f6]/10
                             transition-colors duration-300 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}