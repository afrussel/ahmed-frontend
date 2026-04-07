import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
    const testimonials = [
        { src: "/images/testimonial1.png", alt: "Student testimonial 1" },
        { src: "/images/testimonial2.png", alt: "Student testimonial 2" },
        { src: "/images/testimonial3.png", alt: "Student testimonial 3" },
    ];

    return (
        <footer className="footer-area bg-[#f5f6f7] dark:bg-[#111214] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Brand + CTA Card */}
                <ScrollReveal direction="up">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
                        {/* Left: Title + Subtitle */}
                        <div>
                            <h3 className="text-3xl md:text-4xl leading-tight !text-[#000000] dark:!text-[#E0E3E5]">
                                The Deep<br />Work Blueprint
                            </h3>
                            <p className="subtext !text-[#000000] dark:!text-[#E0E3E5]">
                                Master Focus &amp; Get More Done in Less Time
                            </p>
                        </div>

                        {/* Right: Join Card */}
                        <div className="footer-box bg-[#3b82f6] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <div className="top-area flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {testimonials.map((t, i) => (
                                        <div key={i} className="relative">
                                            <Image
                                                src={t.src}
                                                alt={t.alt}
                                                className="w-10 h-10 rounded-full border-2 border-[#3b82f6] object-cover"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
                                    aria-label="Join now"
                                >
                                    <ArrowRight className="w-4 h-4 text-[#3b82f6]" />
                                </button>
                            </div>
                            <p className="bottom-area">
                                Join with 5K other students
                            </p>
                        </div>
                    </div>
                </ScrollReveal>


                {/* Bottom Section: Copyright + Links */}
                <ScrollReveal direction="up" delay={100}>
                    <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 relative">
                        <div className="absolute top-0 left-0 right-0 glow-line" />

                        <p className="copyright !text-[#000000] dark:!text-[#d0d5d9]">
                            © Copyright 2024, All Rights Reserved
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                            <a href="#" className="footer-link hover:text-white !text-[#000000] dark:!text-[#d0d5d9] transition-colors">Terms &amp; conditions</a>
                            <a href="#" className="footer-link hover:text-white !text-[#000000] dark:!text-[#d0d5d9] transition-colors">Refund policy</a>
                            <Link href="#pricing" className="footer-link hover:text-white !text-[#000000] dark:!text-[#d0d5d9] transition-colors">Pricing</Link>
                            <a href="#" className="footer-link hover:text-white !text-[#000000] dark:!text-[#d0d5d9] transition-colors">Support</a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </footer>
    );
}