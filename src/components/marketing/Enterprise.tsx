"use client";

export const Enterprise = () => {
    return (
        <section className="py-24 bg-[#f8f9fa] px-4 border-y border-gray-200">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-[#2d1b1a] mb-6">Built for Enterprise Sales</h2>
                    <p className="text-lg text-gray-600">The world&apos;s fastest-growing sales teams trust Outbound with their most sensitive prospect data and high-volume outreach.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Uncompromising Security</h3>
                        <p className="text-sm text-gray-500 mb-6">ISO 27001, SOC2 Type II, GDPR, and HIPAA compliant. Enterprise-grade encryption for all your prospect and customer data.</p>
                        <div className="mt-auto flex flex-wrap justify-center gap-2">
                            <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-600">SOC2 Type II</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-600">GDPR</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-600">ISO 27001</span>
                        </div>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Privacy by Design</h3>
                        <p className="text-sm text-gray-500 mb-6">Automated PII scrubbing, local data residency options, and absolute data ownership for your organization.</p>
                        <div className="mt-auto text-xs font-semibold text-green-600">Zero-Trust Architecture</div>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
                        <p className="text-sm text-gray-500 mb-6">24/7 technical assistance, dedicated success managers, and custom model training for your specific sales playbooks.</p>
                        <div className="mt-auto text-xs font-semibold text-purple-600">99.9% Uptime SLA</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
