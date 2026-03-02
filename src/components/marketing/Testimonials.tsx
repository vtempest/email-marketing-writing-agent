"use client";

export const Testimonials = () => {
    return (
        <section className="bg-[#fcfbf9] py-24 px-4 border-b border-gray-100">
            <div className="container mx-auto max-w-6xl">
                <h2 className="mb-16 text-center text-4xl font-bold text-[#2d1b1a]">Loved by Sales Teams</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    <div className="rounded-2xl bg-white p-10 border border-gray-100 shadow-sm">
                        <p className="mb-8 text-lg italic text-gray-600 leading-relaxed">
                            &quot;I got two Enterprise meetings in one week without any manual prospecting. The AI just handled it.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                                <div className="w-full h-full bg-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] font-bold">SC</div>
                            </div>
                            <div>
                                <div className="font-bold text-[#2d1b1a]">Sarah Chen</div>
                                <div className="text-sm text-gray-500">Enterprise Account Executive</div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white p-10 border border-gray-100 shadow-sm">
                        <p className="mb-8 text-lg italic text-gray-600 leading-relaxed">
                            &quot;The personalization is insane. These emails look like I spent 30 minutes on each one, but it was instant.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                                <div className="w-full h-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">MR</div>
                            </div>
                            <div>
                                <div className="font-bold text-[#2d1b1a]">Marcus Rodriguez</div>
                                <div className="text-sm text-gray-500">Business Development Director</div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white p-10 border border-gray-100 shadow-sm">
                        <p className="mb-8 text-lg italic text-gray-600 leading-relaxed">
                            &quot;We scaled from 1 SDR to running campaigns with 3x the output. The AI does the heavy lifting.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                                <div className="w-full h-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">JK</div>
                            </div>
                            <div>
                                <div className="font-bold text-[#2d1b1a]">Jessica Kim</div>
                                <div className="text-sm text-gray-500">VP of Sales</div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white p-10 border border-gray-100 shadow-sm">
                        <p className="mb-8 text-lg italic text-gray-600 leading-relaxed">
                            &quot;Signal-based prospecting changed our game. No more spray-and-pray outbound.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                                <div className="w-full h-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">DP</div>
                            </div>
                            <div>
                                <div className="font-bold text-[#2d1b1a]">David Park</div>
                                <div className="text-sm text-gray-500">Technical Chief of Staff</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
