"use client";
import { useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    { name: "Alex Carter", role: "Freelance Designer", text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    { name: "Daniel Foster", role: "Content Creator", text: "My productivity has never been better! The techniques are practical and easy to implement immediately.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
    { name: "Mark Davidson", role: "Software Developer", text: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
    { name: "Tom David", role: "Entrepreneur", text: "The community aspect alone is worth the investment. Surrounding yourself with focused people changes everything.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" }
];

export default function TestimonialsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const amount = 320;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-[#050505] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 px-3 py-1.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span className="text-xs text-gray-300 font-medium">Testimonials</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real Results from Real People</h2>
                    <p className="text-gray-400 mb-8">Join with 5K other students</p>
                </div>

                <div className="relative">
                    <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                        {testimonials.map((t, i) => (
                            <div key={i} className="min-w-[280px] md:min-w-[320px] bg-[#0a0a0a] border border-white/10 rounded-xl p-5 snap-start flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="text-white font-semibold text-sm">{t.name}</p>
                                        <p className="text-gray-500 text-xs">{t.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm mb-4 flex-grow">"{t.text}"</p>
                                <div className="relative h-36 rounded-lg overflow-hidden mt-auto group cursor-pointer">
                                    <img src={t.img} alt="video thumb" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Play size={20} className="text-black ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={() => scroll('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#111] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#222] transition-colors hidden md:flex">
                        <ChevronLeft size={18} className="text-white" />
                    </button>
                    <button onClick={() => scroll('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#111] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#222] transition-colors hidden md:flex">
                        <ChevronRight size={18} className="text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}