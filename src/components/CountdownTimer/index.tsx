"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
    const TARGET_DATE = new Date("2026-04-10T23:59:59").getTime();

    const calculateTimeLeft = () => {
        const difference = TARGET_DATE - Date.now();
        if (difference <= 0) return { d: 0, h: 0, m: 0, s: 0 };

        return {
            d: Math.floor(difference / (1000 * 60 * 60 * 24)),
            h: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            m: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            s: Math.floor((difference % (1000 * 60)) / 1000),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <span className="text-xs md:text-sm text-gray-300 font-medium">
          30% off until {timeLeft.d}d : {timeLeft.h}h : {timeLeft.m}m : {timeLeft.s}s
        </span>
    );
}