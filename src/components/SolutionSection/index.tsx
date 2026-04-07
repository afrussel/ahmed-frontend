"use client";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function SolutionSection() {
    const aboutImg = "/images/about-person.png";
    const testimonial1 = "/images/testimonial1.png";
    const testimonial2 = "/images/testimonial2.png";
    const testimonial3 = "/images/testimonial3.png";
    const testimonial4 = "/images/testimonial-alex.jpg";
    const testimonial5 = "/images/testimonial-mark.jpg";
    const testimonial6 = "/images/testimonial-shah.jpg";

    const topAvatars = [testimonial4, testimonial5, testimonial6];
    const stackedThumbnails = [testimonial1, testimonial2, testimonial3];

    return (
        <section className="bg-white dark:bg-[#08090A] py-20 md:py-32 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
                {/* Left (40%) */}
                <div className="w-full lg:w-[40%] relative">
                    <ScrollReveal direction="left">
                        <div className="h-[642px] max-w-[520px] max-h-[642px] overflow-hidden left-img">
                            <Image
                                src={aboutImg}
                                alt="Deep Work instructor demonstrating focus techniques"
                                className="object-cover opacity-100 rounded-[24px]"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                                quality={90}
                            />
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right (60%) */}
                <div className="w-full lg:w-[60%] solution-right-box">
                    <ScrollReveal direction="right" delay={200}>
                        <div className="main-content flex flex-col justify-between w-full h-auto lg:h-[642px] min-h-[400px] lg:min-h-[642px] rounded-2xl lg:rounded-[24px] p-4 sm:p-6 lg:p-[40px] bg-[#f5f6f7] dark:bg-[#0f0f0f] border border-white/10">
                            {/* Top Row: Badge + Avatars */}
                            <div className="top-row flex flex-col lg:flex-row items-start justify-between">

                                {/* Badge */}
                                <div className="flex justify-center mb-6">
                                    <div className="badge-glow">
                                    <span className="relative flex h-2 w-2 shrink-0">
                                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                                       <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                                    </span>
                                        <span className="text !text-black dark:!text-[#d0d5d9] transition-colors duration-300">
                                          No worries
                                        </span>
                                    </div>
                                </div>

                                {/* Avatars */}
                                <div className="avatars-area text-center">
                                    <div className="flex -space-x-3 justify-start lg:justify-end mb-1 top-avatar-box">
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
                                    <p className="text !text-[#000] dark:!text-[#d0d5d9] transition-colors duration-300">
                                        Join with 5K other students
                                    </p>
                                </div>
                            </div>

                            {/* Middle – Text + Stacked Thumbnails */}
                            <div className="stacked-thumbnails flex flex-col lg:flex-row items-start md:items-end justify-between gap-6">

                                {/* Text Content */}
                                <div className="flex-1">
                                    <p className="subtext !text-[#000] dark:!text-[#aaaeb2]">
                                        The ability to concentrate <br /> deeply is the ultimate <br /> productivity hack
                                    </p>
                                    <h2 className="title !text-[#000] dark:!text-[#d0d5d9]">
                                        And fortunately it&apos;s <br /> a skill you can train <br /> & develop.
                                    </h2>
                                </div>

                                {/* Stacked Thumbnails */}
                                <div className="flex flex-row lg:flex-col gap-3 shrink-0 thumbnails-parents">
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
            </div>
        </section>
    );
}