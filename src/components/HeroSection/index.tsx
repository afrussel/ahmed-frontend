"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import { X } from "lucide-react";
import gsap from "gsap";

const YOUTUBE_VIDEO_ID = "2VhFwKz8a8I";

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // GSAP refs
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadlineRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const playButtonRef = useRef<HTMLButtonElement>(null);
    const thumbnailRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    // ESC key handler for modal
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsModalOpen(false);
        };
        if (isModalOpen) {
            window.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    // GSAP Animations - Wrapped in gsap.context() for React safety
    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Headline: Slide up + fade in
            if (headlineRef.current) {
                gsap.from(headlineRef.current, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out",
                    delay: 0.2
                });
            }

            // 2. Subheadline: Fade in with delay
            if (subheadlineRef.current) {
                gsap.from(subheadlineRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.5
                });
            }

            // 3. Buttons: Pop in effect
            if (buttonsRef.current) {
                gsap.from(buttonsRef.current, {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    delay: 0.7
                });
            }

            // 4. Play Button: Continuous heartbeat pulse
            if (playButtonRef.current) {
                gsap.to(playButtonRef.current, {
                    scale: 1.08,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }

            // 5. Thumbnail: Subtle float effect
            if (thumbnailRef.current) {
                gsap.to(thumbnailRef.current, {
                    y: 10,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    delay: 1
                });
            }
        }, sectionRef);

        // Cleanup: Revert all GSAP animations on unmount
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative pt-24 pb-20 md:pt-50 md:pb-24 overflow-hidden bg-[#08090A]"
        >
            {/* Horizontal accent line */}
            <div className="absolute top-24 left-0 right-0 glow-line" />

            <div className="absolute inset-0 glow-bg bg-white dark:bg-[#08090A] transition-colors duration-300 pointer-events-none" />

            {/* Background Effects */}
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-[#1245B3]/60 via-[#1245B3]/40 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

                    {/* Countdown Badge */}
                    <div className="badge-glow mb-8 inline-flex items-center gap-2 !bg-white dark:!bg-[#171B21] transition-colors duration-300">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                      </span>
                        <CountdownTimer />
                    </div>

                    {/* Headline - GSAP Animated */}
                    <h1
                        ref={headlineRef}
                        className="hero-title tracking-tight mb-4 !text-[#000000] dark:!text-[#E0E3E5] transition-colors duration-300"
                    >
                        Master Focus & Get <br className="hidden md:block" />
                        More Done in Less Time
                    </h1>

                    {/* Subheadline - GSAP Animated */}
                    <p
                        ref={subheadlineRef}
                        className="hero-subheadline !text-[#000000] dark:!text-[#AAAEB2] transition-colors duration-300"
                    >
                        A step-by-step system to eliminate procrastination, train your <br className="hidden md:block" /> brain for deep work, and boost productivity effortlessly.
                    </p>

                    {/* Buttons - GSAP Animated */}
                    <div ref={buttonsRef} className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="#pricing"
                            className="common-btn px-6 py-3 hover:bg-[#2563eb] transition-colors"
                        >
                            Enroll now
                        </Link>
                        <Link
                            href="#curriculum"
                            className="common-btn-dark px-6 py-3 !bg-white dark:!bg-[#171B21] !text-black dark:!text-white hover:!bg-[#f5f5f5] dark:hover:!bg-[#252525] transition-colors duration-300"
                        >
                            Curriculum
                        </Link>
                    </div>
                </div>

                {/* Video Thumbnail - GSAP Animated (ScrollReveal removed) */}
                <div className="relative max-w-5xl mx-auto">
                    <div
                        ref={thumbnailRef}
                        className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 group cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <Image
                            src="/images/hero-banner.png"
                            alt="Deep Work course preview - Learn to master focus and eliminate distractions"
                            className="w-full aspect-video object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            width={1280}
                            height={720}
                            priority
                            quality={90}
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                        {/* Play Button - GSAP Heartbeat */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    ref={playButtonRef}
                                    className="w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform cursor-pointer bg-transparent border-none p-0"
                                    aria-label="Play course preview video"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsModalOpen(true);
                                    }}
                                >
                                    <Image
                                        src="/images/icons/play-button.svg"
                                        alt="Play video"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-contain"
                                        priority
                                        unoptimized
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-Screen Video Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 z-[101] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close video"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Video Container */}
                    <div
                        className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                            title="Course Preview Video"
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}