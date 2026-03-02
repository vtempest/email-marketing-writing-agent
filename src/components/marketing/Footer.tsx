"use client";

export const Footer = () => {
    return (
        <footer className="bg-[#2d1b1a] py-16 px-4 text-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-4 mb-12">
                    <div>
                        <div className="text-xl font-bold text-white mb-6">Outbound</div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            © 2025 Outbound. All rights reserved. The intelligent B2B email platform.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#ff6b35]">Product</h4>
                        <div className="space-y-3">
                            <a href="#features" className="block text-sm text-gray-300 hover:text-white transition-colors">Features</a>
                            <a href="#howitworks" className="block text-sm text-gray-300 hover:text-white transition-colors">How it works</a>
                            <a href="#impact" className="block text-sm text-gray-300 hover:text-white transition-colors">Impact</a>
                            <a href="#pricing" className="block text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
                            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">API Docs</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#ff6b35]">Company</h4>
                        <div className="space-y-3">
                            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">About</a>
                            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Blog</a>
                            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Jobs</a>
                            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#ff6b35]">Resources</h4>
                        <div className="space-y-3">
                            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Guides</a>
                            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Case Studies</a>
                            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Integrations</a>
                            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Status</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-12">
                        <div className="text-xs text-gray-400">
                            <h4 className="mb-4 font-semibold uppercase text-gray-300">Legal</h4>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                                <a href="#" className="hover:text-white transition-colors">Security</a>
                                <a href="#" className="hover:text-white transition-colors">Compliance</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
