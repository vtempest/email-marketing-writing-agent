"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  TrendingUp,
  Users,
  FileText,
  Plus,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const stats = {
    campaigns: 3,
    emailsSent: 143,
    avgOpenRate: 42.5,
    avgClickRate: 18.3,
  };

  const recentCampaigns = [
    {
      id: "1",
      name: "Q1 Tech Startups Outreach",
      status: "completed",
      emailsSent: 48,
      openRate: 45.8,
    },
    {
      id: "2",
      name: "Enterprise SaaS Campaign",
      status: "processing",
      emailsSent: 45,
      openRate: 38.2,
    },
    {
      id: "3",
      name: "Series A Funded Companies",
      status: "draft",
      emailsSent: 0,
      openRate: 0,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back, {session?.user?.name || "User"}!
        </h1>
        <p className="text-gray-600">
          Here&apos;s an overview of your AI-powered marketing campaigns
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            <FileText className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.campaigns}</div>
            <p className="text-xs text-gray-500">Active marketing campaigns</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emails Sent</CardTitle>
            <Mail className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.emailsSent}</div>
            <p className="text-xs text-gray-500">Total personalized emails</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Open Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgOpenRate}%</div>
            <p className="text-xs text-green-600">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Click Rate</CardTitle>
            <Users className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgClickRate}%</div>
            <p className="text-xs text-green-600">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Start your next campaign in seconds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/dashboard/campaigns/new">
              <Button className="w-full justify-start" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Create New Campaign
              </Button>
            </Link>
            <Link href="/dashboard/campaigns">
              <Button
                variant="outline"
                className="w-full justify-start"
                size="lg"
              >
                <FileText className="mr-2 h-5 w-5" />
                View All Campaigns
              </Button>
            </Link>
            <Link href="/api-docs">
              <Button
                variant="outline"
                className="w-full justify-start"
                size="lg"
              >
                <FileText className="mr-2 h-5 w-5" />
                API Documentation
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Campaigns</CardTitle>
            <CardDescription>Your latest marketing activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50"
                  onClick={() => router.push(`/dashboard/campaigns/${campaign.id}`)}
                >
                  <div className="flex-1 cursor-pointer">
                    <p className="font-semibold">{campaign.name}</p>
                    <p className="text-sm text-gray-600">
                      {campaign.emailsSent} emails •{" "}
                      {campaign.status === "draft"
                        ? "Draft"
                        : `${campaign.openRate}% open rate`}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-blue-900">AI-Powered Features</CardTitle>
          </div>
          <CardDescription className="text-blue-700">
            Leverage cutting-edge AI to maximize your outreach effectiveness
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4">
              <h4 className="mb-2 font-semibold">Smart Research</h4>
              <p className="text-sm text-gray-600">
                AI agents gather real-time intelligence about target companies
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h4 className="mb-2 font-semibold">Personalization</h4>
              <p className="text-sm text-gray-600">
                Generate unique, contextual emails for each recipient
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h4 className="mb-2 font-semibold">Optimization</h4>
              <p className="text-sm text-gray-600">
                Continuous improvement through ML-powered insights
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
