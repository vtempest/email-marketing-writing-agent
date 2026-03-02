"use client";

import { Button } from "@/components/ui/button";

interface PricingProps {
    loading: boolean;
    onDemoLogin: () => void;
}

export const Pricing = ({ loading, onDemoLogin }: PricingProps) => {
    return (
        <section className="bg-[#f0ede8] py-20 px-4" id="pricing">
            <div className="container mx-auto max-w-6xl">
                <h2 className="mb-12 text-center text-4xl font-bold">Simple, Flexible Pricing</h2>
                <div className="grid gap-6 md:grid-cols-3 mt-8">
                    <div className="rounded-lg border-2 border-gray-200 bg-white p-8">
                        <div className="mb-2 text-xl font-bold text-[#2d1b1a]">Starter</div>
                        <div className="mb-6 text-sm text-gray-500">For building your prospect list</div>
                        <ul className="mb-8 space-y-3 text-sm">
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Access to prospect database</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ ICP builder with custom signals</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Up to 5,000 prospects</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Email enrichment</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✗ AI message generation</li>
                            <li className="pb-3 text-gray-600">✗ CRM sync</li>
                        </ul>
                        <Button variant="outline" className="w-full border-gray-900 text-gray-900 hover:bg-gray-100">
                            Get started
                        </Button>
                    </div>
                    <div className="rounded-lg border-2 border-[#ff6b35] bg-white p-8 shadow-xl md:scale-105">
                        <div className="mb-2 text-xl font-bold text-[#2d1b1a]">Professional</div>
                        <div className="mb-6 text-sm text-gray-500">Full prospecting and outbound</div>
                        <ul className="mb-8 space-y-3 text-sm">
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Everything in Starter</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ AI message generation</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Signal-based sequencing</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ CRM sync (HubSpot & Salesforce)</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Multi-channel outreach</li>
                            <li className="pb-3 text-gray-600">✓ Unlimited prospects</li>
                        </ul>
                        <Button className="w-full bg-[#2d1b1a] hover:bg-[#3a2423] text-white">
                            Get a demo
                        </Button>
                    </div>
                    <div className="rounded-lg border-2 border-gray-200 bg-white p-8">
                        <div className="mb-2 text-xl font-bold text-[#2d1b1a]">Enterprise</div>
                        <div className="mb-6 text-sm text-gray-500">For large teams and complex workflows</div>
                        <ul className="mb-8 space-y-3 text-sm">
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Everything in Professional</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Custom integrations</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Dedicated support</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Custom signal training</li>
                            <li className="border-b border-gray-100 pb-3 text-gray-600">✓ Advanced analytics</li>
                            <li className="pb-3 text-gray-600">✓ SLA guarantee</li>
                        </ul>
                        <Button variant="outline" className="w-full border-gray-900 text-gray-900 hover:bg-gray-100" onClick={onDemoLogin} disabled={loading}>
                            Contact us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
