"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const testimonials = [
    { name: "Alex Carter", role: "Freelance Designer", avatar: "/images/testimonial-alex.jpg", text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!", hasVideo: false },
    { name: "Daniel Foster", role: "Content Creator", avatar: "/images/testimonial-daniel.png", text: "", hasVideo: true, image: "/images/daniel-video.jpg" },
    { name: "Mark Davidson", role: "Software Developer", avatar: "/images/testimonial-mark.jpg", text: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and my energy. My efficiency has doubled!", hasVideo: false },
    { name: "Tom David", role: "Entrepreneur", avatar: "/images/testimonial-tom.jpg", text: "", hasVideo: true, image: "/images/tom-video.jpg" },
    { name: "James Miller", role: "Entrepreneur", avatar: "/images/testimonial-miller.jpg", text: "Procrastination used to control my life. Until I discovered these deep work courses. Now I can concentrate on what matters most, and my productivity has skyrocketed.", hasVideo: false },
    { name: "Sarah Johnson", role: "Product Manager", avatar: "/images/testimonial-shah.jpg", text: "The techniques in this course completely changed how I approach my workday.", hasVideo: false },
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4.5);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef<HTMLDivElement>(null);
    const touchStart = useRef(0);
    const touchEnd = useRef(0);

    // Responsive slidesToShow
    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            if (w >= 1280) setSlidesToShow(4.5);
            else if (w >= 1024) setSlidesToShow(3);
            else if (w >= 768) setSlidesToShow(2);
            else setSlidesToShow(1.15);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalOriginal = testimonials.length;
    const cardsToShow = Math.ceil(slidesToShow);
    const cardWidthPercent = 100 / slidesToShow;

    const clonedTestimonials = [
        ...testimonials.slice(-cardsToShow),
        ...testimonials,
        ...testimonials.slice(0, cardsToShow),
    ];

    useEffect(() => {
        setActiveIndex(cardsToShow);
    }, [cardsToShow]);

    const handleSlideChange = useCallback((newIndex: number) => {
        setIsTransitioning(true);
        setActiveIndex(newIndex);
    }, []);

    const nextSlide = () => {
        handleSlideChange(activeIndex + 1);
    };

    const prevSlide = () => {
        handleSlideChange(activeIndex - 1);
    };

    const handleTransitionEnd = () => {
        if (!isTransitioning) return;

        if (activeIndex >= totalOriginal + cardsToShow) {
            setIsTransitioning(false);
            setActiveIndex(activeIndex - totalOriginal);
        }
        else if (activeIndex < cardsToShow) {
            setIsTransitioning(false);
            setActiveIndex(activeIndex + totalOriginal);
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStart.current = e.targetTouches[0].clientX;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };
    const handleTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const diff = touchStart.current - touchEnd.current;
        if (diff > 50) nextSlide();
        if (diff < -50) prevSlide();
        touchStart.current = 0;
        touchEnd.current = 0;
    };

    return (
        <section id="testimonials" className="testimonials bg-white dark:bg-[#08090A] py-20 md:py-32">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8">
                <div className="flex justify-center mb-6">
                    <div className="badge-glow inline-flex items-center gap-2">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                        </span>
                        <span className="text-xs md:text-sm !text-black dark:!text-[#d0d5d9] transition-colors duration-300">Testimonials</span>
                    </div>
                </div>

                <h2 className="!text-[#000000] dark:!text-[#e0e3e5] transition-colors duration-300 mb-12">
                    Real Results from <br className="hidden md:block" /> Real People
                </h2>

                <div className="flex items-center justify-between">
                    <p className="subtext !text-[#000000] dark:!text-[#D0D5D9] transition-colors duration-300">Join with 5K other students</p>
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="h-10 w-10 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-white hover:bg-[#222] transition-colors"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="h-10 w-10 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-white hover:bg-[#222] transition-colors"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Slider Container */}
            <div
                ref={sliderRef}
                className="slick-box-row pl-4 md:pl-6 lg:pl-8 overflow-visible"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${activeIndex * cardWidthPercent}%)`,
                            transition: isTransitioning ? 'transform 500ms ease-out' : 'none',
                            willChange: 'transform'
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {clonedTestimonials.map((t, i) => (
                            <div
                                key={`clone-${i}-${t.name}`}
                                className="flex-shrink-0 px-2"
                                style={{ width: `${cardWidthPercent}%` }}
                            >
                                <div className="h-[400px] md:h-[400px] rounded-2xl overflow-hidden relative bg-[#f5f6f7] dark:bg-[#0f0f0f] border border-white/10 group">
                                    {t.hasVideo && t.image ? (
                                        <div className="relative h-full">
                                            <Image
                                                src={t.image}
                                                alt={`${t.name} video testimonial`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 25vw"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                            {/* Avatar Top-Left */}
                                            <div className="video-avatar absolute top-4 left-4 z-10">
                                                <Image
                                                    src={t.avatar}
                                                    alt={`${t.name} avatar`}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover border-2 border-white/20"
                                                    unoptimized
                                                />
                                            </div>

                                            {/* Play Button */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <button className="flex items-center justify-center hover:scale-110 transition-transform">
                                                    <Image
                                                        src="/images/icons/play-button-small.svg"
                                                        alt="Play video"
                                                        width={24}
                                                        height={24}
                                                        className="h-14 w-14 object-contain"
                                                        priority
                                                    />
                                                </button>
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 px-4 pb-8">
                                                <p className="avatar-name">{t.name}</p>
                                                <p className="avatar-role">{t.role}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col h-full p-5">
                                            <div className="mb-4 avatar-area">
                                                <Image
                                                    src={t.avatar}
                                                    alt={`${t.name} avatar`}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <p className="card-text flex-1 !text-[#000000] dark:!text-[#aaaeb2] transition-colors duration-300 mb-4">{t.text}</p>
                                            <div className="pb-4">
                                                <p className="avatar-name !text-[#000000] dark:!text-[#d0d5d9] transition-colors duration-300">{t.name}</p>
                                                <p className="avatar-role !text-[#000000] dark:!text-[#aaaeb2] transition-colors duration-300">{t.role}</p>
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