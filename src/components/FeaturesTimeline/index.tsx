import Image from "next/image";

const timelineItems = [
    { icon: "/images/icons/t1.svg", text: "Develop laser-sharp focus & eliminate distractions." },
    { icon: "/images/icons/t2.svg", text: "Master deep work techniques for smarter productivity." },
    { icon: "/images/icons/t3.svg", text: "Overcome procrastination & get more done." },
    { icon: "/images/icons/t4.svg", text: "Build lasting habits for long-term success." },
];

export default function FeaturesTimeline() {
    return (
        <section className="bg-[#050505] py-20 md:py-32 px-4">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
                {/* Badge */}
                <div className="badge-glow mb-8">
                    <span className="relative flex h-2 w-2 shrink-0">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                    </span>
                    <span className="text">
                      The Deep Work Blueprint
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl text-section-dark-heading text-center leading-tight mb-16">
                    A self-paced, results-driven course designed to help you
                </h2>

                {/* Timeline */}
                <div className="relative line-gap">
                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-section-dark-icon-bg dot-line" />

                    <div className="flex flex-col gap-14">
                        {timelineItems.map((item, index) => (
                            <div key={index} className="relative">
                                {/* Dot on line */}
                                <div className="absolute -left-8 top-4 -translate-x-1/2 h-3 w-3 rounded-full dot-size" />

                                {/* Icon */}
                                <div className="icon-size h-12 w-12 rounded-full bg-section-dark-icon-bg flex items-center justify-center mb-3">
                                    <img
                                        src={item.icon}
                                        alt="Feature icon"
                                        className="w-5 h-5"
                                    />
                                </div>

                                {/* Text */}
                                <p className="timeline-text text-section-dark-foreground text-base leading-relaxed max-w-xs">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}