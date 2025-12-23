"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDemoLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/demo-login", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to login with demo account");
      }

      router.push("/dashboard");
    } catch (err) {
      console.error("Demo login error:", err);
      setLoading(false);
    }
  };

  const toggleFAQ = (index: number) => {
    const element = document.getElementById(`faq-${index}`);
    const toggle = document.getElementById(`faq-toggle-${index}`);
    if (element && toggle) {
      element.classList.toggle('hidden');
      toggle.textContent = element.classList.contains('hidden') ? '+' : '−';
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-semibold text-[#2d1b1a]">
            Outbound
          </Link>
          <nav className="hidden md:flex gap-8">
            <a href="#howitworks" className="text-sm font-medium text-gray-700 hover:text-[#ff6b35] transition-colors">
              How it works
            </a>
            <a href="#impact" className="text-sm font-medium text-gray-700 hover:text-[#ff6b35] transition-colors">
              Impact
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-[#ff6b35] transition-colors">
              Pricing
            </a>
          </nav>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={handleDemoLogin}
              disabled={loading}
              className="border-gray-900 text-gray-900 hover:bg-gray-100"
            >
              {loading ? "Loading..." : "Login"}
            </Button>
            <Button
              className="bg-[#2d1b1a] hover:bg-[#3a2423] text-white"
            >
              Get a demo
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#f0ede8] to-[#f5f3f0] py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight">
                  Leave static campaigns behind for intelligent outbound
                </h1>
                <p className="mb-8 text-xl text-gray-600 font-medium">
                  The first AI email platform that learns from signals, not rules
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Button
                    size="lg"
                    className="bg-[#2d1b1a] hover:bg-[#3a2423] text-white text-base px-6"
                  >
                    Get a demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-100 text-base px-6"
                    onClick={handleDemoLogin}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Login"}
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://i.imgur.com/W3SYDh1.png"
                  alt="Email Marketing Dashboard"
                  className="max-w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Intelligent Features Built for Results
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
                <h3 className="mb-3 text-xl font-semibold text-[#2d1b1a]">AI Message Writing</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Generate personalized, high-converting email copy that sounds like your best SDR—at scale and across every prospect.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
                <h3 className="mb-3 text-xl font-semibold text-[#2d1b1a]">Signal Detection</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Monitor real-time buying signals across job changes, product launches, funding events, and custom triggers unique to your ICP.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
                <h3 className="mb-3 text-xl font-semibold text-[#2d1b1a]">Smart Sequencing</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Automatically recommend the perfect outbound sequence at the right moment, based on detected signals and prospect behavior.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
                <h3 className="mb-3 text-xl font-semibold text-[#2d1b1a]">Custom ICP Builder</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Define your ideal customer profile with firmographics, technographics, and custom research signals for laser-focused targeting.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
                <h3 className="mb-3 text-xl font-semibold text-[#2d1b1a]">CRM Integration</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Seamless sync with HubSpot and Salesforce. Push updates, pull insights, and maintain a single source of truth.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-white">
                <h3 className="mb-3 text-xl font-semibold text-[#2d1b1a]">Multi-Channel Outreach</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Coordinate email and LinkedIn messaging from a unified platform with warmup and deliverability built-in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-[#f0ede8] py-20 px-4" id="howitworks">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold">How It Works</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b35] text-lg font-bold text-white">
                  1
                </div>
                <h3 className="mb-3 text-lg font-semibold">Define Your ICP</h3>
                <p className="text-sm text-gray-600">
                  Set up custom research criteria and buying signals that matter to your business.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b35] text-lg font-bold text-white">
                  2
                </div>
                <h3 className="mb-3 text-lg font-semibold">Monitor Signals</h3>
                <p className="text-sm text-gray-600">
                  Our AI continuously scans for prospects matching your ICP who just triggered a buying signal.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b35] text-lg font-bold text-white">
                  3
                </div>
                <h3 className="mb-3 text-lg font-semibold">Generate Messages</h3>
                <p className="text-sm text-gray-600">
                  AI writes personalized, contextual emails based on each prospect&apos;s signals and your brand voice.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b35] text-lg font-bold text-white">
                  4
                </div>
                <h3 className="mb-3 text-lg font-semibold">Execute & Track</h3>
                <p className="text-sm text-gray-600">
                  Send sequences at optimal times and watch responses flow back with full analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact/Results */}
        <section className="py-20 px-4" id="impact">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold">Results That Move the Needle</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-6">
                <div className="mb-2 text-5xl font-bold text-[#ff6b35]">+380%</div>
                <div className="text-base font-medium text-gray-600">Better conversion rates</div>
              </div>
              <div className="text-center p-6">
                <div className="mb-2 text-5xl font-bold text-[#ff6b35]">+200%</div>
                <div className="text-base font-medium text-gray-600">More qualified replies</div>
              </div>
              <div className="text-center p-6">
                <div className="mb-2 text-5xl font-bold text-[#ff6b35]">-55%</div>
                <div className="text-base font-medium text-gray-600">Time in sales tools</div>
              </div>
              <div className="text-center p-6">
                <div className="mb-2 text-5xl font-bold text-[#ff6b35]">+135%</div>
                <div className="text-base font-medium text-gray-600">Email engagement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold">Loved by Sales Teams</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6 border-l-4 border-[#ff6b35]">
                <p className="mb-4 text-sm italic text-gray-600">
                  &quot;I got two Enterprise meetings in one week without any manual prospecting. The AI just handled it.&quot;
                </p>
                <div className="font-semibold text-sm text-[#2d1b1a]">Sarah Chen</div>
                <div className="text-xs text-gray-500">Enterprise Account Executive</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 border-l-4 border-[#ff6b35]">
                <p className="mb-4 text-sm italic text-gray-600">
                  &quot;The personalization is insane. These emails look like I spent 30 minutes on each one, but it was instant.&quot;
                </p>
                <div className="font-semibold text-sm text-[#2d1b1a]">Marcus Rodriguez</div>
                <div className="text-xs text-gray-500">Business Development Director</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 border-l-4 border-[#ff6b35]">
                <p className="mb-4 text-sm italic text-gray-600">
                  &quot;We scaled from 1 SDR to running campaigns with 3x the output. The AI does the heavy lifting.&quot;
                </p>
                <div className="font-semibold text-sm text-[#2d1b1a]">Jessica Kim</div>
                <div className="text-xs text-gray-500">VP of Sales</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 border-l-4 border-[#ff6b35]">
                <p className="mb-4 text-sm italic text-gray-600">
                  &quot;Signal-based prospecting changed our game. No more spray-and-pray outbound.&quot;
                </p>
                <div className="font-semibold text-sm text-[#2d1b1a]">David Park</div>
                <div className="text-xs text-gray-500">Technical Chief of Staff</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
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
                <Button variant="outline" className="w-full border-gray-900 text-gray-900 hover:bg-gray-100">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-4xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <div
                  className="flex cursor-pointer items-center justify-between py-2"
                  onClick={() => toggleFAQ(0)}
                >
                  <span className="font-semibold text-[#2d1b1a]">Do you provide email infrastructure and warmup?</span>
                  <span id="faq-toggle-0" className="text-xl">+</span>
                </div>
                <div id="faq-0" className="mt-4 hidden text-sm leading-relaxed text-gray-600">
                  Yes. We handle email warmup, deliverability optimization, and provide managed inboxes through our partners or your own accounts. Your email reputation stays protected.
                </div>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <div
                  className="flex cursor-pointer items-center justify-between py-2"
                  onClick={() => toggleFAQ(1)}
                >
                  <span className="font-semibold text-[#2d1b1a]">Can I bring my own email accounts and LinkedIn profiles?</span>
                  <span id="faq-toggle-1" className="text-xl">+</span>
                </div>
                <div id="faq-1" className="mt-4 hidden text-sm leading-relaxed text-gray-600">
                  Absolutely. You can connect your own managed email inboxes and LinkedIn accounts, or use our provided infrastructure. Full flexibility based on your setup.
                </div>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <div
                  className="flex cursor-pointer items-center justify-between py-2"
                  onClick={() => toggleFAQ(2)}
                >
                  <span className="font-semibold text-[#2d1b1a]">Do you find leads or do I need to provide them?</span>
                  <span id="faq-toggle-2" className="text-xl">+</span>
                </div>
                <div id="faq-2" className="mt-4 hidden text-sm leading-relaxed text-gray-600">
                  We find leads for you. Define your ICP and signal criteria, and our AI surfaces matching prospects automatically. No need to buy external lists.
                </div>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <div
                  className="flex cursor-pointer items-center justify-between py-2"
                  onClick={() => toggleFAQ(3)}
                >
                  <span className="font-semibold text-[#2d1b1a]">How does the AI learn my messaging style?</span>
                  <span id="faq-toggle-3" className="text-xl">+</span>
                </div>
                <div id="faq-3" className="mt-4 hidden text-sm leading-relaxed text-gray-600">
                  The AI analyzes your best-performing emails, your brand voice, and your ICP context. You can guide it with examples, and it improves over time through feedback loops.
                </div>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <div
                  className="flex cursor-pointer items-center justify-between py-2"
                  onClick={() => toggleFAQ(4)}
                >
                  <span className="font-semibold text-[#2d1b1a]">Does this work with HubSpot and Salesforce?</span>
                  <span id="faq-toggle-4" className="text-xl">+</span>
                </div>
                <div id="faq-4" className="mt-4 hidden text-sm leading-relaxed text-gray-600">
                  Yes. Native bidirectional sync with both platforms. Updates flow automatically—new prospects, replies, engagement data, everything syncs back to your CRM.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#f0ede8] to-[#f5f3f0] py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-8 text-4xl font-bold">Ready to Stop Wasting Time on Static Campaigns?</h2>
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
                onClick={handleDemoLogin}
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2d1b1a] py-12 px-4 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Product</h4>
              <div className="space-y-2">
                <a href="#hero" className="block text-sm text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#howitworks" className="block text-sm text-gray-300 hover:text-white transition-colors">How it works</a>
                <a href="#pricing" className="block text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">API Docs</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Blog</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Jobs</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Guides</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Case Studies</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Integrations</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Status</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Security</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">Compliance</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2025 Outbound. All rights reserved. The intelligent B2B email platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
