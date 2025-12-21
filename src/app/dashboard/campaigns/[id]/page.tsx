"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeft,
  Mail,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Send,
  BarChart3,
} from "lucide-react";

interface EmailResult {
  id: string;
  companyName: string;
  recipientName: string;
  recipientEmail: string;
  subject: string;
  body: string;
  status: "sent" | "pending" | "failed";
  sentAt?: string;
  openedAt?: string;
  clicked?: boolean;
}

export default function CampaignDetailPage() {
  const params = useParams();
  const router = useRouter();
  const campaignId = params.id as string;

  const [campaign] = useState({
    id: campaignId,
    name: "Q1 Tech Startups Outreach",
    status: "completed",
    createdAt: "2024-01-15",
    targetCount: 50,
    emailsSent: 48,
    emailsOpened: 32,
    emailsClicked: 18,
    emailsFailed: 2,
  });

  const [emails] = useState<EmailResult[]>([
    {
      id: "1",
      companyName: "TechCorp",
      recipientName: "John Smith",
      recipientEmail: "john@techcorp.com",
      subject: "Unlock Growth Opportunities",
      body: "Hi John, ...",
      status: "sent",
      sentAt: "2024-01-16T10:00:00",
      openedAt: "2024-01-16T11:30:00",
      clicked: true,
    },
    {
      id: "2",
      companyName: "InnovateLabs",
      recipientName: "Sarah Johnson",
      recipientEmail: "sarah@innovatelabs.com",
      subject: "Transform Your Marketing Strategy",
      body: "Hi Sarah, ...",
      status: "sent",
      sentAt: "2024-01-16T10:05:00",
      openedAt: "2024-01-16T14:00:00",
      clicked: false,
    },
    {
      id: "3",
      companyName: "FutureScale",
      recipientName: "Mike Chen",
      recipientEmail: "mike@futurescale.com",
      subject: "Elevate Your Business",
      body: "Hi Mike, ...",
      status: "sent",
      sentAt: "2024-01-16T10:10:00",
    },
    {
      id: "4",
      companyName: "CloudNext",
      recipientName: "Emily Davis",
      recipientEmail: "emily@cloudnext.com",
      subject: "Drive More Revenue",
      body: "Hi Emily, ...",
      status: "pending",
    },
    {
      id: "5",
      companyName: "DataFlow",
      recipientName: "Alex Brown",
      recipientEmail: "invalid-email",
      subject: "Boost Your Performance",
      body: "Hi Alex, ...",
      status: "failed",
    },
  ]);

  const getStatusIcon = (status: EmailResult["status"]) => {
    switch (status) {
      case "sent":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusColor = (status: EmailResult["status"]) => {
    switch (status) {
      case "sent":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "failed":
        return "bg-red-500";
    }
  };

  const openRate = campaign.emailsSent
    ? ((campaign.emailsOpened / campaign.emailsSent) * 100).toFixed(1)
    : 0;
  const clickRate = campaign.emailsSent
    ? ((campaign.emailsClicked / campaign.emailsSent) * 100).toFixed(1)
    : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/dashboard/campaigns")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{campaign.name}</h1>
            <p className="text-gray-600">
              Created on {new Date(campaign.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Results
          </Button>
          <Button>
            <Send className="mr-2 h-4 w-4" />
            Resend Failed
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Emails</CardTitle>
            <Mail className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaign.emailsSent}</div>
            <p className="text-xs text-gray-500">
              of {campaign.targetCount} targets
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{openRate}%</div>
            <p className="text-xs text-gray-500">
              {campaign.emailsOpened} opened
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clickRate}%</div>
            <p className="text-xs text-gray-500">
              {campaign.emailsClicked} clicked
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
            <XCircle className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaign.emailsFailed}</div>
            <p className="text-xs text-gray-500">errors</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="emails" className="space-y-4">
        <TabsList>
          <TabsTrigger value="emails">All Emails</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="failed">Failed</TabsTrigger>
        </TabsList>

        <TabsContent value="emails">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Emails</CardTitle>
              <CardDescription>
                View all emails generated for this campaign
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="space-y-3">
                  {emails.map((email) => (
                    <Card key={email.id} className="border">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(email.status)}
                              <CardTitle className="text-base">
                                {email.companyName}
                              </CardTitle>
                            </div>
                            <CardDescription>
                              {email.recipientName} ({email.recipientEmail})
                            </CardDescription>
                          </div>
                          <Badge className={getStatusColor(email.status)}>
                            {email.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div>
                          <p className="text-sm font-semibold">Subject:</p>
                          <p className="text-sm text-gray-600">
                            {email.subject}
                          </p>
                        </div>
                        {email.sentAt && (
                          <div className="flex gap-4 text-xs text-gray-500">
                            <span>
                              Sent: {new Date(email.sentAt).toLocaleString()}
                            </span>
                            {email.openedAt && (
                              <span>
                                Opened:{" "}
                                {new Date(email.openedAt).toLocaleString()}
                              </span>
                            )}
                            {email.clicked && (
                              <Badge variant="secondary" className="h-5">
                                Clicked
                              </Badge>
                            )}
                          </div>
                        )}
                        <Button variant="outline" size="sm" className="mt-2">
                          View Full Email
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent">
          <Card>
            <CardHeader>
              <CardTitle>Sent Emails</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emails
                  .filter((e) => e.status === "sent")
                  .map((email) => (
                    <div key={email.id} className="border-b pb-2">
                      <p className="font-semibold">{email.companyName}</p>
                      <p className="text-sm text-gray-600">
                        {email.recipientEmail}
                      </p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Emails</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emails
                  .filter((e) => e.status === "pending")
                  .map((email) => (
                    <div key={email.id} className="border-b pb-2">
                      <p className="font-semibold">{email.companyName}</p>
                      <p className="text-sm text-gray-600">
                        {email.recipientEmail}
                      </p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="failed">
          <Card>
            <CardHeader>
              <CardTitle>Failed Emails</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emails
                  .filter((e) => e.status === "failed")
                  .map((email) => (
                    <div key={email.id} className="border-b pb-2">
                      <p className="font-semibold text-red-600">
                        {email.companyName}
                      </p>
                      <p className="text-sm text-gray-600">
                        {email.recipientEmail}
                      </p>
                      <p className="text-xs text-red-500">
                        Error: Invalid email address
                      </p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
