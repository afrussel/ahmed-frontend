"use client";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
    { label: "Overview", href: "#overall" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
                ? "bg-white dark:bg-[#08090A]/90 backdrop-blur-md border-b border-white/10"
                : "bg-transparent border-b border-transparent"
        }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-4 lg:px-0 py-3">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="#" className="flex items-center gap-2.5">
                        <Image
                            src="/images/logo.svg"
                            alt="PPA Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto transition-all duration-300 filter brightness-0 dark:brightness-100 dark:filter-none"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden min-[981px]:flex items-center gap-8">
                        {links.map((l) => (
                            <Link
                                key={l.label}
                                href={l.href}
                                className="text-black dark:text-gray-400 hover:text-black/20 dark:hover:text-white transition-colors font-medium"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Link
                            href="#pricing"
                            className="common-btn hidden min-[981px]:inline-flex items-center justify-center px-5 py-2.5 hover:bg-[#2563eb] transition-all active:scale-[0.98]"
                        >
                            Enroll now
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="min-[981px]:hidden p-2 text-gray-300 hover:text-white"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div className="min-[981px]:hidden absolute top-16 left-0 right-0 bg-[#050505] border-b border-white/10 p-4 space-y-2 shadow-2xl">
                    {links.map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}

                    <div className="pt-2">
                        <Link
                            href="#pricing"
                            className="block w-full text-center px-5 py-3 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold transition-all"
                            onClick={() => setOpen(false)}
                        >
                            Enroll now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}