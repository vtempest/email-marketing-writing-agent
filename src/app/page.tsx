"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/marketing/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { FeaturesGrid } from "@/components/marketing/FeaturesGrid";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Impact } from "@/components/marketing/Impact";
import { Testimonials } from "@/components/marketing/Testimonials";
import { Pricing } from "@/components/marketing/Pricing";
import { FAQ } from "@/components/marketing/FAQ";
import { Surveys } from "@/components/marketing/Surveys";
import { Enterprise } from "@/components/marketing/Enterprise";
import { CTA } from "@/components/marketing/CTA";
import { Footer } from "@/components/marketing/Footer";

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
      <Navbar loading={loading} onDemoLogin={handleDemoLogin} />

      <main className="flex-1">
        <Hero loading={loading} onDemoLogin={handleDemoLogin} />
        <FeaturesGrid />
        <HowItWorks />
        <Impact />
        <Testimonials />
        <Surveys />
        <Pricing loading={loading} onDemoLogin={handleDemoLogin} />
        <Enterprise />
        <FAQ />
        <CTA loading={loading} onDemoLogin={handleDemoLogin} />
      </main>

      <Footer />
    </div>
  );
}
