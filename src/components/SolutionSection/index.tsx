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
        <section className="bg-[#050505] py-20 md:py-32 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-start">
                {/* Left – Large Image */}
                <ScrollReveal direction="left">
                  <div className="relative w-full lg:w-[520px] h-[642px] max-w-[520px] max-h-[642px] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/10">
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
                {/* Right – Content Column */}
                <ScrollReveal direction="right" delay={200}>
                    <div className="flex flex-col justify-between w-full lg:w-[730px] h-[642px] min-w-[520px] rounded-[24px] p-[40px] bg-[#0f0f0f] border border-white/10">

                        {/* Top Row: Badge + Avatars */}
                        <div className="flex items-start justify-between">

                            {/* Badge */}
                            <div className="flex justify-center mb-6">
                                <div className="badge-glow">
                                    <span className="relative flex h-2 w-2 shrink-0">
                                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                                       <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                                    </span>
                                    <span className="text">
                                      No worries
                                    </span>
                                </div>
                            </div>

                            {/* Avatars */}
                            <div className="avatars-area text-center">
                                <div className="flex -space-x-3 justify-end mb-1">
                                    {topAvatars.map((img, i) => (
                                        <div key={i} className="relative">
                                            <Image
                                                src={img}
                                                alt={`Student ${i + 1} testimonial`}
                                                className="w-10 h-10 rounded-full object-cover border-2 border-[#050505]"
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
                        <div className="stacked-thumbnails flex items-end justify-between gap-6">

                            {/* Text Content */}
                            <div className="flex-1">
                                <p className="subtext">
                                    The ability to concentrate <br /> deeply is the ultimate <br /> productivity hack
                                </p>
                                <h2 className="title">
                                    And fortunately it&apos;s <br /> a skill you can train <br /> & develop.
                                </h2>
                            </div>

                            {/* Stacked Thumbnails */}
                            <div className="flex flex-col gap-3 shrink-0">
                                {stackedThumbnails.map((img, i) => (
                                    <div
                                        key={i}
                                        className="large-thumbnails rounded-xl overflow-hidden border border-white/10 group hover:border-[#3b82f6]/50 transition-colors duration-300"
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