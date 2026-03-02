"use client";

export const HowItWorks = () => {
    return (
        <section className="bg-[#f0ede8] py-24 px-4" id="howitworks">
            <div className="container mx-auto max-w-6xl">
                <h2 className="mb-16 text-center text-4xl font-bold text-[#2d1b1a]">How It Works</h2>
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 -translate-y-1/2 hidden lg:block z-0"></div>
                    {[
                        {
                            step: "1",
                            title: "Define Your ICP",
                            desc: "Set up custom research criteria and buying signals that matter to your business."
                        },
                        {
                            step: "2",
                            title: "Monitor Signals",
                            desc: "Our AI continuously scans for prospects matching your ICP who just triggered a buying signal."
                        },
                        {
                            step: "3",
                            title: "Generate Messages",
                            desc: "AI writes personalized, contextual emails based on each prospect's signals and your brand voice."
                        },
                        {
                            step: "4",
                            title: "Execute & Track",
                            desc: "Send sequences at optimal times and watch responses flow back with full analytics."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="rounded-2xl bg-white p-8 text-center shadow-sm relative z-10 border border-gray-100">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b35] text-xl font-bold text-white shadow-lg shadow-[#ff6b35]/20">
                                {item.step}
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-[#2d1b1a]">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
