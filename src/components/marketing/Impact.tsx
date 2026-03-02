"use client";

export const Impact = () => {
    return (
        <section className="py-24 px-4 bg-white" id="impact">
            <div className="container mx-auto max-w-6xl">
                <h2 className="mb-16 text-center text-4xl font-bold text-[#2d1b1a]">Results That Move the Needle</h2>
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        { metric: "+380%", label: "Better conversion rates" },
                        { metric: "+200%", label: "More qualified replies" },
                        { metric: "-55%", label: "Time in sales tools" },
                        { metric: "+135%", label: "Email engagement" }
                    ].map((item, idx) => (
                        <div key={idx} className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="mb-4 text-5xl font-bold text-[#ff6b35]">{item.metric}</div>
                            <div className="text-sm font-semibold uppercase tracking-widest text-[#2d1b1a] mb-2">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
