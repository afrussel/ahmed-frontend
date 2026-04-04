"use client";
import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right" | "scale";
    delay?: number;
    className?: string;
}

export default function ScrollReveal({
     children,
     direction = "up",
     delay = 0,
     className = ""
 }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    const getTransform = () => {
        if (direction === "up") return "translateY(30px)";
        if (direction === "down") return "translateY(-30px)";
        if (direction === "left") return "translateX(30px)";
        if (direction === "right") return "translateX(-30px)";
        if (direction === "scale") return "scale(0.95)";
        return "translateY(30px)";
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) translateX(0) scale(1)" : getTransform(),
            }}
        >
            {children}
        </div>
    );
}