"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Alex Carter",
        role: "Freelance Designer",
        avatar: "/images/testimonial-alex.png",
        text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
        hasVideo: false,
    },
    {
        name: "Daniel Foster",
        role: "Content Creator",
        avatar: "/images/testimonial-daniel.png",
        text: "",
        hasVideo: true,
        image: "/images/testimonial-daniel.png",
    },
    {
        name: "Mark Davidson",
        role: "Software Developer",
        avatar: "/images/testimonial-mark.png",
        text: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and my energy. My efficiency has doubled!",
        hasVideo: false,
    },
    {
        name: "Tom David",
        role: "Entrepreneur",
        avatar: "/images/testimonial-tom.png",
        text: "",
        hasVideo: true,
        image: "/images/testimonial-tom.png",
    },
    {
        name: "James Miller",
        role: "Entrepreneur",
        avatar: "/images/testimonial-james.png",
        text: "Procrastination used to control my life. Until I discovered these deep work courses. Now I can concentrate on what matters most, and my productivity has skyrocketed.",
        hasVideo: false,
    },
];

export default function TestimonialsSection() {
    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4.5); // Default 4.5 cards

    // Handle resize for fractional slides
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) setSlidesToShow(4.5);
            else if (window.innerWidth >= 1024) setSlidesToShow(3.5);
            else if (window.innerWidth >= 768) setSlidesToShow(2.5);
            else setSlidesToShow(1.5);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        afterChange: (index: number) => setCurrentSlide(index),
        // Fractional responsive settings
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 3.5 } },
            { breakpoint: 1024, settings: { slidesToShow: 2.5 } },
            { breakpoint: 768, settings: { slidesToShow: 1.5 } }
        ]
    };

    // Correctly calculate last slide for fractional slides
    const isLastSlide = currentSlide >= testimonials.length - Math.floor(slidesToShow);

    return (
        <section className="bg-[#050505] py-20 md:py-32">
            {/* Header Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 px-4 py-1.5 rounded-full">
                        <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                        <span className="text-xs md:text-sm text-gray-300 font-medium">Testimonials</span>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight mb-12">
                    Real Results from <br className="hidden md:block" /> Real People
                </h2>

                {/* Subheading + Arrows */}
                <div className="flex items-center justify-between">
                    <p className="text-gray-300 text-lg font-medium">
                        Join with 5K other students
                    </p>
                    <div className="flex gap-2">
                        <button
                            onClick={() => sliderRef.current?.slickPrev()}
                            disabled={currentSlide === 0}
                            className="h-10 w-10 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#222] transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => sliderRef.current?.slickNext()}
                            disabled={isLastSlide}
                            className="h-10 w-10 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#222] transition-colors"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Slider Section - Left Aligned, Right Overflow */}
            <div className="w-full pl-[calc((100vw-1280px)/2)] md:pl-[calc((100vw-1280px)/2)] lg:pl-[calc((100vw-1440px)/2)] overflow-visible">
                {/* Custom CSS to fix slick slider height and padding issues */}
                <div className="testimonials-slider [&_.slick-list]:!p-0 [&_.slick-slide]:!h-auto [&_.slick-slide>div]:!h-full">
                    <Slider ref={sliderRef} {...settings}>
                        {testimonials.map((t, i) => (
                            <div key={i} className="px-2 h-full">
                                <div className="h-[340px] md:h-[380px] rounded-2xl overflow-hidden relative bg-[#0f0f0f] border border-white/10 group">
                                    {t.hasVideo && t.image ? (
                                        /* Video Card */
                                        <div className="relative h-full">
                                            <Image
                                                src={t.image}
                                                alt={`${t.name} video testimonial`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                unoptimized
                                            />
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
                                        /* Text Card */
                                        <div className="flex flex-col h-full p-5">
                                            <div className="mb-4">
                                                <Image
                                                    src={t.avatar}
                                                    alt={`${t.name} avatar`}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                                                &quot;{t.text}&quot;
                                            </p>
                                            <div className="pt-4 border-t border-white/10">
                                                <p className="text-white text-sm font-semibold">{t.name}</p>
                                                <p className="text-gray-500 text-xs">{t.role}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}