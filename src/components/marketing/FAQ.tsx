"use client";

import { useState } from "react";

export const FAQ = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleFAQ = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const faqs = [
        {
            q: "Do you provide email infrastructure and warmup?",
            a: "Yes. Outbound includes built-in email infrastructure management and automated warmup to ensure your messages land in the inbox, not the spam folder."
        },
        {
            q: "Can I bring my own email accounts and LinkedIn profiles?",
            a: "Absolutely. You can easily connect your existing G-Suite, Outlook, or LinkedIn accounts to maintain your personal brand while leveraging our AI automation."
        },
        {
            q: "Do you find leads or do I need to provide them?",
            a: "We do both. Access our database of over 200M verified professionals or upload your own lists. Our AI will enrich and monitor signals for both."
        },
        {
            q: "How does the AI learn my messaging style?",
            a: "Through our brand voice training. Upload your best-performing past emails, and our AI analyzes your tone, structure, and value propositions to replicate them exactly."
        },
        {
            q: "Does this work with HubSpot and Salesforce?",
            a: "Yes. We offer deep, two-way sync with both HubSpot and Salesforce. Outbound automatically pushes activity, pulls data, and keeps your CRM as the single source of truth."
        }
    ];

    return (
        <section className="py-24 px-4 bg-white" id="faq">
            <div className="container mx-auto max-w-3xl">
                <h2 className="mb-16 text-center text-4xl font-bold text-[#2d1b1a]">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, idx) => {
                        const isOpen = openItems.includes(idx);
                        return (
                            <div key={idx} className="border-b border-gray-100 pb-6 group">
                                <button
                                    className="flex w-full items-center justify-between py-2 text-left"
                                    onClick={() => toggleFAQ(idx)}
                                >
                                    <span className="font-bold text-[#2d1b1a] group-hover:text-[#ff6b35] transition-colors">{faq.q}</span>
                                    <span className={`text-[#ff6b35] text-xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                {isOpen && (
                                    <div className="mt-4 text-sm leading-relaxed text-gray-600 animate-in fade-in slide-in-from-top-2">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
