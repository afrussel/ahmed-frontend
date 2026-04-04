import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CountdownTimer from "@/components/CountdownTimer";
import { Play } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-[#050505]">

            {/* Background Effects */}
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-[#1e3a8a]/60 via-[#0a192f]/40 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Content */}
                <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

                    {/* Countdown Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 px-4 py-1.5 rounded-full mb-8">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                        </span>
                        <CountdownTimer />
                    </div>

                    {/* Headline - SEO: Proper H1 tag */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-4 tracking-tight">
                        Master Focus & Get <br className="hidden md:block" />
                        More Done in Less Time
                    </h1>

                    {/* Subheadline */}
                    <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                        A step-by-step system to eliminate procrastination, train your brain for deep work, and boost productivity effortlessly.
                    </p>

                    {/* Buttons - SEO: Using Next.js Link */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="#pricing"
                            className="px-6 py-3 rounded-full bg-[#3b82f6] text-white text-sm font-semibold hover:bg-[#2563eb] transition-colors"
                        >
                            Enroll now
                        </Link>
                        <Link
                            href="#curriculum"
                            className="px-6 py-3 rounded-full bg-[#1A1A1A] border border-white/10 text-white text-sm font-medium hover:bg-[#252525] transition-colors"
                        >
                            Curriculum
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Video/Image Section - SEO: Using Next.js Image */}
                <ScrollReveal direction="scale" delay={200} className="relative max-w-5xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 group cursor-pointer">
                        <Image
                            src=""
                            alt="Deep Work course preview - Learn to master focus and eliminate distractions"
                            className="w-full aspect-video object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            width={1280}
                            height={720}
                            priority
                            quality={90}
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center hover:scale-110 hover:animate-none transition-transform shadow-lg animate-heartbeat"
                                aria-label="Play course preview video"
                            >
                                <Play className="w-6 h-6 md:w-8 md:h-8 text-[#050505] ml-1" fill="#050505" />
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}