"use client";
import { Target, Brain, Zap, TrendingUp } from 'lucide-react';

const features = [
    { icon: Target, text: "Develop laser-sharp focus & eliminate distractions." },
    { icon: Brain, text: "Master deep work techniques for smarter productivity." },
    { icon: Zap, text: "Overcome procrastination & get more done." },
    { icon: TrendingUp, text: "Build lasting habits for long-term success." }
];

export default function FeaturesTimeline() {
    return (
        <section className="bg-[#050505] py-20 md:py-32 px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 px-3 py-1.5 rounded-full mb-6">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span className="text-xs text-gray-300 font-medium">The Deep Work Blueprint</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    A self-paced, results-driven course designed to help you
                </h2>
            </div>

            <div className="max-w-2xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] md:left-6 top-4 bottom-4 w-[1px] bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent"></div>

                <div className="space-y-12">
                    {features.map((item, index) => (
                        <div key={index} className="flex gap-6 items-start relative">
                            <div className="relative z-10 w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                                <item.icon size={18} className="text-blue-500" />
                            </div>
                            <div className="pt-2">
                                <p className="text-gray-200 text-lg font-medium leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}