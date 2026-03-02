"use client";

import { Button } from "@/components/ui/button";
import { MarketingBadges } from "@/components/ui/marketing-badges";

interface HeroProps {
    loading: boolean;
    onDemoLogin: () => void;
}

export const Hero = ({ loading, onDemoLogin }: HeroProps) => {
    return (
        <section className="bg-gradient-to-br from-[#f0ede8] to-[#f5f3f0] py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tight text-[#2d1b1a]">
                            Leave static campaigns behind for intelligent outbound
                        </h1>
                        <p className="mb-8 text-xl text-gray-600 font-medium">
                            The first AI email platform that learns from signals, not rules
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Button
                                size="lg"
                                className="bg-[#2d1b1a] hover:bg-[#3a2423] text-white text-base px-6"
                            >
                                Get a demo
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-gray-900 text-gray-900 hover:bg-gray-100 text-base px-6"
                                onClick={onDemoLogin}
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Login"}
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <MarketingBadges />
                    </div>
                </div>
            </div>
        </section>
    );
};
