"use client";
import { Moon, Sun, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDark(true);
            document.documentElement.classList.add("dark");
        } else if (savedTheme === "light") {
            setDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const handleThemeChange = (isDark: boolean) => {
        setDark(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    if (!mounted) {
        return (
            <div className="flex items-center bg-[#1A1A1A] rounded-full p-1 gap-1 border border-white/10">
                <div className="h-7 w-7 rounded-full" />
                <div className="h-7 w-7 rounded-full" />
            </div>
        );
    }

    return (
        <div className="flex items-center bg-[#171B21] rounded-full p-1 gap-1">
            {/* Dark Mode Button */}
            <button
                onClick={() => handleThemeChange(true)}
                className={`h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                    dark
                        ? "bg-[#282D33] text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-[#282D33]"
                }`}
                aria-label="Dark mode"
            >
                <Moon className="h-3.5 w-3.5" />
                {dark && <Check className="h-3 w-3 absolute top-0.5 right-0.5" />}
            </button>

            {/* Light Mode Button */}
            <button
                onClick={() => handleThemeChange(false)}
                className={`h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                    !dark
                        ? "bg-[#282D33] text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-[#282D33]"
                }`}
                aria-label="Light mode"
            >
                <Sun className="h-3.5 w-3.5" />
                {!dark && <Check className="h-3 w-3 absolute top-0.5 right-0.5" />}
            </button>
        </div>
    );
}