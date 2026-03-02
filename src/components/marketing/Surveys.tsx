"use client";

import { CheckCircle2 } from "lucide-react";

export const Surveys = () => {
    return (
        <section className="py-24 px-4 bg-white" id="surveys">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-[#2d1b1a] mb-6 leading-tight">
                            Beyond Email: Intelligent Surveys & Market Insight
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Don&apos;t just guess what your market wants. Use signal-triggered surveys to get real-time feedback and perform deep market segmentation—all synced directly to your CRM.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-[#ff6b35]/10 p-1 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-[#ff6b35]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#2d1b1a] mb-1">Automated Market Segmentation</h3>
                                    <p className="text-sm text-gray-600">Automatically group prospects based on survey responses and firmographic data for hyper-targeted outreach.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-[#ff6b35]/10 p-1 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-[#ff6b35]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#2d1b1a] mb-1">A/B Testing Everything</h3>
                                    <p className="text-sm text-gray-600">Test different survey questions, email hooks, and value propositions. Our AI identifies the winning patterns automatically.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-[#ff6b35]/10 p-1 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-[#ff6b35]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#2d1b1a] mb-1">Deep Salesforce Integration</h3>
                                    <p className="text-sm text-gray-600">Survey data flows instantly into Salesforce, updating lead scores and triggering automated follow-up tasks for your sales team.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff6b35]/10 to-transparent rounded-[2rem] -z-10 blur-2xl"></div>
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden p-8">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                                <div>
                                    <div className="text-xs font-bold text-[#ff6b35] uppercase tracking-wider mb-1">Live Experiment</div>
                                    <div className="text-xl font-bold text-[#2d1b1a]">A/B Test Results</div>
                                </div>
                                <div className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full">Active</div>
                            </div>

                            <div className="space-y-6">
                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                                Variation A (Benefit Focus)
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-semibold inline-block text-blue-600">
                                                42%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                        <div style={{ width: "42%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                    </div>
                                </div>

                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#ff6b35] bg-[#ff6b35]/20">
                                                Variation B (Signal Focus)
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-semibold inline-block text-[#ff6b35]">
                                                68%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#ff6b35]/20">
                                        <div style={{ width: "68%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#ff6b35]"></div>
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="text-xs font-bold text-gray-400 uppercase mb-2">AI Recommendation</div>
                                    <p className="text-sm text-gray-700">Variation B is outperforming. Switch all traffic for prospects with &quot;Hiring&quot; signals to this messaging strategy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
