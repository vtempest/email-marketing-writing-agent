"use client";

export const FeaturesGrid = () => {
    return (
        <section className="py-20 px-4" id="features">
            <div className="container mx-auto max-w-6xl">
                <h2 className="mb-12 text-center text-4xl font-bold text-[#2d1b1a]">
                    Intelligent Features Built for Results
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-gray-200 p-8 bg-white">
                        <h3 className="mb-3 text-xl font-bold text-[#2d1b1a]">AI Message Writing</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Generate personalized, high-converting email copy that sounds like your best SDR—at scale and across every prospect.
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-8 bg-white">
                        <h3 className="mb-3 text-xl font-bold text-[#2d1b1a]">Signal Detection</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Monitor real-time buying signals across job changes, product launches, funding events, and custom triggers unique to your ICP.
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-8 bg-white">
                        <h3 className="mb-3 text-xl font-bold text-[#2d1b1a]">Smart Sequencing</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Automatically recommend the perfect outbound sequence at the right moment, based on detected signals and prospect behavior.
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-8 bg-white">
                        <h3 className="mb-3 text-xl font-bold text-[#2d1b1a]">Custom ICP Builder</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Define your ideal customer profile with firmographics, technographics, and custom research signals for laser-focused targeting.
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-8 bg-white">
                        <h3 className="mb-3 text-xl font-bold text-[#2d1b1a]">CRM Integration</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Seamless sync with HubSpot and Salesforce. Push updates, pull insights, and maintain a single source of truth.
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-8 bg-white">
                        <h3 className="mb-3 text-xl font-bold text-[#2d1b1a]">Multi-Channel Outreach</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Coordinate email and LinkedIn messaging from a unified platform with warmup and deliverability built-in.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
