"use client";

import { Button } from "@/components/ui/button";

interface CTAProps {
    loading: boolean;
    onDemoLogin: () => void;
}

export const CTA = ({ loading, onDemoLogin }: CTAProps) => {
    return (
        <section className="bg-gradient-to-br from-[#f0ede8] to-[#f5f3f0] py-20 px-4 text-center border-t border-gray-100">
            <div className="container mx-auto max-w-4xl">
                <h2 className="mb-8 text-4xl font-bold text-[#2d1b1a]">Ready to Stop Wasting Time on Static Campaigns?</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-[#2d1b1a] hover:bg-[#3a2423] text-white px-8 py-4 text-base"
                    >
                        Get a demo
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-4 text-base"
                        onClick={onDemoLogin}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Login"}
                    </Button>
                </div>
            </div>
        </section>
    );
};
