"use client";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function SolutionSection() {
    const aboutImg = "/images/about-person.png";
    const testimonial1 = "/images/testimonial1.png";
    const testimonial2 = "/images/testimonial2.png";
    const testimonial3 = "/images/testimonial3.png";

    const topAvatars = [testimonial1, testimonial2, testimonial3];
    const stackedThumbnails = [testimonial1, testimonial2, testimonial3];

    return (
        <section className="bg-[#08090A] py-20 md:py-32 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-start">

                {/* Left – Large Image */}
                <ScrollReveal direction="left">
                    <div className="hidden md:block relative w-full lg:w-[520px] h-[642px] max-w-[520px] max-h-[642px] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/10">
                        <Image
                            src={aboutImg}
                            alt="Deep Work instructor demonstrating focus techniques"
                            className="object-cover opacity-100"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            quality={90}
                        />
                    </div>
                </ScrollReveal>

                {/* Right – Content Column - ✅ ফিক্সড রেসপন্সিভ ক্লাস */}
                <ScrollReveal direction="right" delay={200}>
                    <div className="flex flex-col justify-between w-full lg:w-[730px] h-auto lg:h-[642px] min-h-[400px] lg:min-h-[642px] rounded-2xl lg:rounded-[24px] p-4 sm:p-6 lg:p-[40px] bg-[#0f0f0f] border border-white/10">

                        {/* Top Row: Badge + Avatars */}
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-4">

                            {/* Badge */}
                            <div className="badge-glow inline-flex items-center gap-2 px-4 py-1.5 rounded-full">
                                <span className="relative flex h-2 w-2 shrink-0">
                                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                                   <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                                </span>
                                <span className="text-xs sm:text-sm text-gray-300 font-medium">
                                  No worries
                                </span>
                            </div>

                            {/* Avatars */}
                            <div className="avatars-area text-center lg:text-right">
                                <div className="flex -space-x-3 justify-start lg:justify-end mb-2">
                                    {topAvatars.map((img, i) => (
                                        <div key={i} className="relative">
                                            <Image
                                                src={img}
                                                alt={`Student ${i + 1} testimonial`}
                                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#0f0f0f]"
                                                width={40}
                                                height={40}
                                                loading="lazy"
                                                quality={85}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <p className="text">Join with 5K other students</p>
                            </div>
                        </div>

                        {/* Middle – Text + Stacked Thumbnails */}
                        <div className="stacked-thumbnails flex flex-col lg:flex-row items-start md:items-end justify-between gap-6 mt-15 lg:mt-0">

                            {/* Text Content */}
                            <div className="flex-1 text-left">
                                <p className="subtext">
                                    The ability to concentrate <br /> deeply is the ultimate <br className="hidden sm:block" /> productivity hack
                                </p>
                                <h2 className="title">
                                    And fortunately it&apos;s <br /> a skill you can train <br className="hidden sm:block" /> & develop.
                                </h2>
                            </div>

                            {/* Stacked Thumbnails */}
                            <div className="flex flex-row lg:flex-col gap-3 shrink-0">
                                {stackedThumbnails.map((img, i) => (
                                    <div
                                        key={i}
                                        className="large-thumbnails w-14 h-14 rounded-xl overflow-hidden border border-white/10 group hover:border-[#3b82f6]/50 transition-colors duration-300"
                                    >
                                        <Image
                                            src={img}
                                            alt={`Student success story ${i + 1}`}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                            width={80}
                                            height={80}
                                            loading="lazy"
                                            quality={85}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}