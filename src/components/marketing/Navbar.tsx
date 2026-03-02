"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
    loading: boolean;
    onDemoLogin: () => void;
}

export const Navbar = ({ loading, onDemoLogin }: NavbarProps) => {
    return (
        <header className="sticky top-0 z-50 border-b bg-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link href="/" className="text-2xl font-semibold text-[#2d1b1a]">
                    Outbound
                </Link>
                <nav className="hidden md:flex gap-8">
                    <a href="#features" className="text-sm font-medium text-gray-700 hover:text-[#ff6b35] transition-colors">
                        Features
                    </a>
                    <a href="#howitworks" className="text-sm font-medium text-gray-700 hover:text-[#ff6b35] transition-colors">
                        How it works
                    </a>
                    <a href="#impact" className="text-sm font-medium text-gray-700 hover:text-[#ff6b35] transition-colors">
                        Impact
                    </a>
                    <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-[#ff6b35] transition-colors">
                        Pricing
                    </a>
                </nav>
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        onClick={onDemoLogin}
                        disabled={loading}
                        className="border-gray-900 text-gray-900 hover:bg-gray-100"
                    >
                        {loading ? "Loading..." : "Login"}
                    </Button>
                    <Button
                        className="bg-[#2d1b1a] hover:bg-[#3a2423] text-white"
                    >
                        Get a demo
                    </Button>
                </div>
            </div>
        </header>
    );
};
