"use client";

import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Plus, Mail, TrendingUp, Users, FileText } from "lucide-react";

interface Campaign {
  id: string;
  name: string;
  status: "draft" | "processing" | "completed" | "failed";
  targetCount: number;
  emailsSent: number;
  createdAt: string;
}

export default function CampaignsPage() {
  const router = useRouter();
  const [campaigns] = useState<Campaign[]>([
    {
      id: "1",
      name: "Q1 Tech Startups Outreach",
      status: "completed",
      targetCount: 50,
      emailsSent: 48,
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      name: "Enterprise SaaS Campaign",
      status: "processing",
      targetCount: 100,
      emailsSent: 45,
      createdAt: "2024-01-20",
    },
    {
      id: "3",
      name: "Series A Funded Companies",
      status: "draft",
      targetCount: 75,
      emailsSent: 0,
      createdAt: "2024-01-22",
    },
  ]);

  const getStatusColor = (status: Campaign["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "processing":
        return "bg-blue-500";
      case "draft":
        return "bg-gray-500";
      case "failed":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: Campaign["status"]) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Campaigns</h1>
          <p className="text-gray-600">
            Create and manage your AI-powered email marketing campaigns
          </p>
        </div>
        <Link href="/dashboard/campaigns/new">
          <Button size="lg">
            <Plus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            <FileText className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaigns.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emails Sent</CardTitle>
            <Mail className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {campaigns.reduce((acc, c) => acc + c.emailsSent, 0)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Target Companies</CardTitle>
            <Users className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {campaigns.reduce((acc, c) => acc + c.targetCount, 0)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        {campaigns.map((campaign) => (
          <Card
            key={campaign.id}
            className="cursor-pointer transition-shadow hover:shadow-md"
            onClick={() => router.push(`/dashboard/campaigns/${campaign.id}`)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{campaign.name}</CardTitle>
                  <CardDescription>
                    Created on {new Date(campaign.createdAt).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(campaign.status)}>
                  {getStatusText(campaign.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-8 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Target Companies:</span>{" "}
                  {campaign.targetCount}
                </div>
                <div>
                  <span className="font-semibold">Emails Sent:</span>{" "}
                  {campaign.emailsSent}
                </div>
                <div>
                  <span className="font-semibold">Success Rate:</span>{" "}
                  {campaign.targetCount > 0
                    ? Math.round((campaign.emailsSent / campaign.targetCount) * 100)
                    : 0}
                  %
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {campaigns.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Mail className="mb-4 h-12 w-12 text-gray-400" />
              <h3 className="mb-2 text-lg font-semibold">No campaigns yet</h3>
              <p className="mb-4 text-sm text-gray-600">
                Get started by creating your first AI-powered campaign
              </p>
              <Link href="/dashboard/campaigns/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Campaign
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
