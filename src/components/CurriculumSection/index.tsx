"use client";
import { useState } from 'react';
import { Play, ChevronDown, Check } from 'lucide-react';

const modules = [
    { title: "Module 1: Foundations of Deep Work", duration: "1.7h of video", lessons: ["Understanding Focus & Distraction", "The Science Behind Deep Work", "Identifying Your Productivity Killers", "How to Strengthen Your Attention Span"] },
    { title: "Module 2: Building Your Deep Work Routine", duration: "1.3h of video", lessons: ["Morning Routines for Focus", "Environment Design", "Time Blocking Mastery"] },
    { title: "Module 3: Eliminating Procrastination", duration: "1.5h of video", lessons: ["The 2-Minute Rule", "Overcoming Perfectionism", "Accountability Systems"] },
    { title: "Module 4: Advanced Focus & Productivity Hacks", duration: "1.2h of video", lessons: ["Flow State Triggers", "Digital Minimalism", "Energy Management"] }
];

export default function CurriculumSection() {
    const [openModule, setOpenModule] = useState(0);

    return (
        <section className="bg-[#050505] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 px-3 py-1.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span className="text-xs text-gray-300 font-medium">Course Curriculum</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
                        Mastering Deep Work: A Structured Path to Peak Productivity
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Accordion */}
                    <div className="space-y-3">
                        {modules.map((mod, idx) => (
                            <div key={idx} className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden transition-all">
                                <button
                                    onClick={() => setOpenModule(openModule === idx ? -1 : idx)}
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                                >
                                    <div>
                                        <h3 className="text-white font-semibold">{mod.title}</h3>
                                        <p className="text-gray-500 text-xs mt-1">{mod.duration}</p>
                                    </div>
                                    <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${openModule === idx ? 'rotate-180' : ''}`} />
                                </button>
                                {openModule === idx && (
                                    <div className="px-5 pb-5 space-y-2 border-t border-white/5 pt-4">
                                        {mod.lessons.map((lesson, lIdx) => (
                                            <div key={lIdx} className="flex items-center justify-between py-2">
                                                <div className="flex items-center gap-3">
                                                    <Play size={14} className="text-blue-500" />
                                                    <span className="text-gray-300 text-sm">{lesson}</span>
                                                </div>
                                                <span className="text-gray-500 text-xs">14:23</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: Feature Card */}
                    <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-white mb-6">Not only video lessons!</h3>
                        <ul className="space-y-4 mb-8">
                            {[
                                "6h of videos - Step-by-step deep work strategies.",
                                "Templates & Trackers - Stay on track effortlessly.",
                                "Live Q&As - Expert guidance & accountability.",
                                "Exclusive Community - Connect with others."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                        <Check size={12} className="text-blue-500" />
                                    </div>
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-3 rounded-lg transition-all">
                            Enroll now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}