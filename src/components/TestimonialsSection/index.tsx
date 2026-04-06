"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const testimonials = [
    { name: "Alex Carter", role: "Freelance Designer", avatar: "/images/testimonial-alex.jpg", text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!", hasVideo: false },
    { name: "Daniel Foster", role: "Content Creator", avatar: "/images/testimonial-daniel.png", text: "", hasVideo: true, image: "/images/testimonial-daniel.jpg" },
    { name: "Mark Davidson", role: "Software Developer", avatar: "/images/testimonial-mark.png", text: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and my energy. My efficiency has doubled!", hasVideo: false },
    { name: "Tom David", role: "Entrepreneur", avatar: "/images/testimonial-tom.png", text: "", hasVideo: true, image: "/images/testimonial-tom.png" },
    { name: "James Miller", role: "Entrepreneur", avatar: "/images/testimonial-james.png", text: "Procrastination used to control my life. Until I discovered these deep work courses. Now I can concentrate on what matters most, and my productivity has skyrocketed.", hasVideo: false },
    { name: "Sarah Johnson", role: "Product Manager", avatar: "/images/testimonial-sarah.png", text: "The techniques in this course completely changed how I approach my workday.", hasVideo: false },
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4.5); // ✅ ডেস্কটপে 4.5 কার্ড
    const [isTransitioning, setIsTransitioning] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    // Responsive breakpoints
    useEffect(() => {
        const updateSlides = () => {
            const w = window.innerWidth;
            if (w >= 1280) setSlidesToShow(4.5);
            else if (w >= 1024) setSlidesToShow(3);
            else if (w >= 768) setSlidesToShow(2);
            else setSlidesToShow(1);
        };
        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const step = 100 / slidesToShow; // প্রতিটি কার্ডের width %
    const totalSlides = testimonials.length;
    const maxIndex = Math.max(0, totalSlides - Math.ceil(slidesToShow)); // লুপ লিমিট

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning]);

    const handleNext = () => {
        goToSlide(activeIndex >= maxIndex ? 0 : activeIndex + 1);
    };

    const handlePrev = () => {
        goToSlide(activeIndex <= 0 ? maxIndex : activeIndex - 1);
    };

    // Touch/Swipe support
    const touchStartX = useRef(0);
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? handleNext() : handlePrev();
    };

    return (
        <section id="testimonials" className="bg-[#050505] py-20 md:py-32">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8">
                <div className="flex justify-center mb-6">
                    <div className="badge-glow inline-flex items-center gap-2">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                        </span>
                        <span className="text-xs md:text-sm text-gray-300 font-medium">Testimonials</span>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl text-white text-center leading-tight mb-12">
                    Real Results from <br className="hidden md:block" /> Real People
                </h2>

                <div className="flex items-center justify-between">
                    <p className="text-gray-300 text-lg font-medium">Join with 5K other students</p>
                    <div className="flex gap-2">
                        <button onClick={handlePrev} className="h-10 w-10 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-white hover:bg-[#222] transition-colors">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button onClick={handleNext} className="h-10 w-10 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-white hover:bg-[#222] transition-colors">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Custom Slider Container */}
            <div
                className="slick-box-row pl-4 md:pl-6 lg:pl-8 overflow-visible"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Visible Track */}
                <div className="overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex transition-transform duration-500 ease-out will-change-transform"
                        style={{ transform: `translateX(-${activeIndex * step}%)` }}
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 px-2"
                                style={{ width: `${step}%` }}
                            >
                                <div className="h-[340px] md:h-[400px] rounded-2xl overflow-hidden relative bg-[#0f0f0f] border border-white/10 group">
                                    {t.hasVideo && t.image ? (
                                        <div className="relative h-full">
                                            <Image src={t.image} alt={`${t.name} video testimonial`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" unoptimized />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <button className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:scale-110 transition-transform group-hover:bg-white/30">
                                                    <Play className="h-6 w-6 text-white fill-white ml-1" />
                                                </button>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <p className="text-white font-medium text-sm">{t.name}</p>
                                                <p className="text-gray-300 text-xs">{t.role}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col h-full p-5">
                                            <div className="mb-4">
                                                <Image src={t.avatar} alt={`${t.name} avatar`} width={40} height={40} className="rounded-full object-cover" unoptimized />
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">&quot;{t.text}&quot;</p>
                                            <div className="pt-4 border-t border-white/10">
                                                <p className="text-white text-sm">{t.name}</p>
                                                <p className="text-gray-500 text-xs">{t.role}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}