"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronUp, ChevronDown, Play, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const modules = [
    {
        title: "Module 1: Foundations of Deep Work",
        duration: "1.7h of video",
        lessons: [
            { title: "Understanding Focus & Distraction", duration: "14:23", preview: true },
            { title: "The Science Behind Deep Work", duration: "22:51" },
            { title: "Identifying Your Productivity Killers", duration: "34:42" },
            { title: "How to Strengthen Your Attention Span", duration: "27:08" },
        ],
    },
    {
        title: "Module 2: Building Your Deep Work Routine",
        duration: "1.3h of video",
        lessons: [
            { title: "Designing Your Ideal Work Schedule", duration: "18:30" },
            { title: "Creating a Distraction-Free Environment", duration: "22:15" },
            { title: "Time Blocking Strategies", duration: "19:45" },
        ],
    },
    {
        title: "Module 3: Eliminating Procrastination",
        duration: "1.5h of video",
        lessons: [
            { title: "Understanding Why You Procrastinate", duration: "25:10" },
            { title: "The Two-Minute Rule & Quick Wins", duration: "20:30" },
            { title: "Building Momentum with Habit Stacking", duration: "28:40" },
        ],
    },
    {
        title: "Module 4: Advanced Focus & Productivity Hacks",
        duration: "1.2h of video",
        lessons: [
            { title: "Flow State Mastery", duration: "22:00" },
            { title: "Energy Management for Peak Performance", duration: "18:50" },
            { title: "Long-Term Deep Work Sustainability", duration: "24:10" },
        ],
    },
];

const sidebarItems = [
    "6h of videos – Step-by-step deep work strategies.",
    "Templates & Trackers – Stay on track effortlessly.",
    "Live Q&As – Expert guidance & accountability.",
    "Exclusive Community – Connect with others.",
];

export default function CurriculumSection() {
    const [openModule, setOpenModule] = useState<number | null>(0);

    return (
        <section id="curriculum" className="curriculum-section bg-white dark:bg-[#08090A] py-20 md:py-32 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Badge & Heading */}
                <ScrollReveal direction="up">
                    <div className="flex justify-center mb-6">
                        <div className="badge-glow">
                            <span className="relative flex h-2 w-2 shrink-0">
                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                            </span>
                            <span className="text !text-black dark:!text-[#d0d5d9] transition-colors duration-300">
                              Course Curriculum
                            </span>
                        </div>
                    </div>
                    <h2 className="!text-[#000000] dark:!text-[#E0E3E5] transition-colors duration-300 text-center leading-tight mb-12 max-w-2xl mx-auto">
                        Mastering Deep Work: A Structured Path to Peak Productivity
                    </h2>
                </ScrollReveal>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-8 items-start">

                    {/* Left: Accordion */}
                    <div className="space-y-4">
                        {modules.map((mod, idx) => {
                            const isOpen = openModule === idx;
                            return (
                                <div key={idx} className="overflow-hidden">
                                    {/* Module Header */}
                                    <button
                                        onClick={() => setOpenModule(isOpen ? null : idx)}
                                        className="lesson-question w-full flex items-center justify-between text-left transition-colors"
                                    >
                                        <div>
                                            <h3 className="title !text-[#000000] dark:!text-[#d0d5d9] transition-colors duration-300">{mod.title}</h3>
                                            <p className="sub-title !text-[#000000] dark:!text-[#AAAEB2] transition-colors duration-300">{mod.duration}</p>
                                        </div>
                                        {isOpen ? (
                                            <Image
                                                src="/images/icons/arrow-up.svg"
                                                alt="Collapse"
                                                width={32}
                                                height={32}
                                                className="shrink-0 transition-all duration-300 filter brightness-0 dark:brightness-100 dark:filter-none"
                                            />
                                        ) : (
                                            <Image
                                                src="/images/icons/arrow-down.svg"
                                                alt="Expand"
                                                width={32}
                                                height={32}
                                                className="shrink-0 transition-all duration-300 filter brightness-0 dark:brightness-100 dark:filter-none"
                                            />
                                        )}
                                    </button>

                                    {/* Lessons - Smooth Open/Close Animation */}
                                    <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                                        <div className="px-5 pb-5 pt-4 border-t border-white/5">
                                            {mod.lessons.map((lesson, lIdx) => (
                                                <div key={lIdx} className="lesson-items-box flex items-center gap-4 lesson-item-border last:border-b-0">
                                                    <div className="round-icon-size w-10 h-10 flex items-center justify-center shrink-0">
                                                        <Play className="w-4 h-4 text-[#3b82f6] fill-[#3b82f6] ml-0.5" />
                                                    </div>
                                                    <span className="lesson-title flex-1 !text-[#000000] dark:!text-[#AAAEB2] transition-colors duration-300">{lesson.title}</span>
                                                    {"preview" in lesson && lesson.preview && (
                                                        <span className="preview-text whitespace-nowrap !bg-[#f5f6f7] dark:!bg-[#171b21] transition-colors duration-300">
                                                            Preview
                                                        </span>
                                                    )}
                                                    <span className="duration shrink-0 whitespace-nowrap !text-[#000000] dark:!text-[#AAAEB2]">{lesson.duration}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Sidebar Card */}
                    <ScrollReveal direction="up" delay={200}>
                        <div className="sidebar-card self-start !bg-[#f5f6f7] dark:!bg-[#0a0a0a] transition-colors duration-300">
                            <h3 className="!text-[#000000] dark:!text-[#d0d5d9]">Not only video lessons!</h3>
                            <div className="items-area flex flex-col">
                                {sidebarItems.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="round-icon bg-section-dark-icon-bg flex items-center justify-center">
                                            <img
                                                src="/images/icons/t3.svg"
                                                alt="Feature icon"
                                                className="w-5 h-5"
                                            />
                                        </div>
                                        <span className="item-text !text-[#000000] dark:!text-[#aaaeb2]">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="#pricing"
                                className="w-full bg-[#2466F2] hover:bg-[#2563eb] text-white py-3 rounded-lg text-center transition-all active:scale-[0.98] inline-block"
                            >
                                Enroll now
                            </Link>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}