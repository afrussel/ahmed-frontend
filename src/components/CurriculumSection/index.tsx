"use client";
import { useState } from "react";
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
        <section id="curriculum" className="curriculum-section bg-[#050505] py-20 md:py-32 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Badge & Heading */}
                <ScrollReveal direction="up">
                    <div className="flex justify-center mb-6">
                        <div className="badge-glow">
                            <span className="relative flex h-2 w-2 shrink-0">
                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                            </span>
                            <span className="text">
                              Course Curriculum
                            </span>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl text-white text-center leading-tight mb-12 max-w-2xl mx-auto">
                        Mastering Deep Work: A Structured Path to Peak Productivity
                    </h2>
                </ScrollReveal>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

                    {/* Left: Accordion */}
                    <div className="space-y-4">
                        {modules.map((mod, idx) => {
                            const isOpen = openModule === idx;
                            return (
                                <div key={idx} className="overflow-hidden">
                                    {/* Module Header */}
                                    <button
                                        onClick={() => setOpenModule(isOpen ? null : idx)}
                                        className="w-full flex items-center justify-between p-5 text-left transition-colors"
                                    >
                                        <div>
                                            <h3 className="text-white text-base md:text-lg">{mod.title}</h3>
                                            <p className="text-gray-500 text-xs mt-1">{mod.duration}</p>
                                        </div>
                                        {isOpen ? (
                                            <ChevronUp className="w-5 h-5 text-[#3b82f6] shrink-0 transition-transform" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 transition-transform" />
                                        )}
                                    </button>

                                    {/* Lessons - Smooth Open/Close Animation */}
                                    <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                                        <div className="px-5 pb-5 pt-4 border-t border-white/5">
                                            {mod.lessons.map((lesson, lIdx) => (
                                                <div key={lIdx} className="flex items-center gap-4 py-2">
                                                    <div className="w-10 h-10 rounded-full bg-[#3b82f6]/20 flex items-center justify-center shrink-0">
                                                        <Play className="w-4 h-4 text-[#3b82f6] fill-[#3b82f6] ml-0.5" />
                                                    </div>
                                                    <span className="text-gray-300 text-sm flex-1">{lesson.title}</span>
                                                    {"preview" in lesson && lesson.preview && (
                                                        <span className="text-xs text-[#3b82f6] border border-[#3b82f6]/30 rounded-full px-2.5 py-0.5 font-medium whitespace-nowrap">
            Preview
          </span>
                                                    )}
                                                    <span className="text-gray-500 text-xs shrink-0 whitespace-nowrap">{lesson.duration}</span>
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
                        <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 lg:sticky lg:top-24 self-start">
                            <h3 className="text-white font-semibold text-xl mb-6">Not only video lessons!</h3>
                            <div className="flex flex-col gap-4 mb-8">
                                {sidebarItems.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />
                                        <span className="text-gray-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-3 rounded-lg transition-all active:scale-[0.98]">
                                Enroll now
                            </button>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}