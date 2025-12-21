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
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold">GPT Marketer</h1>
          <div className="flex gap-4">
            <Button variant="outline" onClick={handleDemoLogin} disabled={loading}>
              {loading ? "Loading..." : "Try Demo"}
            </Button>
            <Link href="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-5xl font-bold tracking-tight">
                AI-Powered B2B Email Marketing
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                Revolutionize your marketing campaigns with GPT Marketer. Create personalized,
                data-driven B2B emails that connect with your target audience.
              </p>
              <div className="flex gap-4">
                <Link href="/signup">
                  <Button size="lg" className="text-lg">
                    Start Your Campaign
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg"
                  onClick={handleDemoLogin}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Try Demo"}
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
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h3 className="mb-12 text-center text-3xl font-bold">How It Works</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 text-4xl">🔍</div>
                <h4 className="mb-2 text-xl font-semibold">Research</h4>
                <p className="text-gray-600">
                  AI agents gather recent events and information about target companies using
                  advanced web search.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 text-4xl">✍️</div>
                <h4 className="mb-2 text-xl font-semibold">Create</h4>
                <p className="text-gray-600">
                  Generate personalized email content that resonates with each prospect&apos;s unique
                  context.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 text-4xl">🚀</div>
                <h4 className="mb-2 text-xl font-semibold">Deploy</h4>
                <p className="text-gray-600">
                  Launch targeted campaigns with professionally designed, conversion-optimized
                  emails.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="mb-12 text-center text-3xl font-bold">Features</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border p-6">
                <h4 className="mb-2 font-semibold">Personalized Content</h4>
                <p className="text-sm text-gray-600">
                  Custom-tailored messages for each target company
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="mb-2 font-semibold">Data-Driven Insights</h4>
                <p className="text-sm text-gray-600">
                  Leverage recent events and company information
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="mb-2 font-semibold">Quality Assurance</h4>
                <p className="text-sm text-gray-600">
                  AI critique ensures polished, effective emails
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="mb-2 font-semibold">Professional Design</h4>
                <p className="text-sm text-gray-600">
                  Visually appealing layouts that capture attention
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="mb-2 font-semibold">Automated Workflow</h4>
                <p className="text-sm text-gray-600">
                  Streamline your marketing process with AI agents
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="mb-2 font-semibold">Higher Conversions</h4>
                <p className="text-sm text-gray-600">
                  Increase engagement with personalized outreach
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 GPT Marketer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
