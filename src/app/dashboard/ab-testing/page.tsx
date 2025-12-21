"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Split,
  Mail,
  TrendingUp,
  Eye,
  Send,
  Plus,
  BarChart3,
} from "lucide-react";

interface EmailVariant {
  id: string;
  name: string;
  subject: string;
  content: string;
  openRate?: number;
  clickRate?: number;
  sent?: number;
}

export default function ABTestingPage() {
  const [variants, setVariants] = useState<EmailVariant[]>([
    {
      id: "A",
      name: "Variant A",
      subject: "Boost your sales with AI",
      content: "Hi {{firstName}},\n\nWe've developed an AI-powered solution that can help {{companyName}} increase sales by 40%.\n\nInterested in learning more?",
      openRate: 42.5,
      clickRate: 18.3,
      sent: 50,
    },
    {
      id: "B",
      name: "Variant B",
      subject: "Transform {{companyName}} with AI automation",
      content: "Hello {{firstName}},\n\nImagine increasing your team's productivity by 40% with AI automation.\n\nLet's discuss how we can help {{companyName}}.",
      openRate: 38.2,
      clickRate: 15.7,
      sent: 50,
    },
  ]);

  const [activeTab, setActiveTab] = useState("create");

  const addVariant = () => {
    const newId = String.fromCharCode(65 + variants.length); // A, B, C, D...
    setVariants([
      ...variants,
      {
        id: newId,
        name: `Variant ${newId}`,
        subject: "",
        content: "",
      },
    ]);
  };

  const updateVariant = (id: string, field: keyof EmailVariant, value: string) => {
    setVariants(
      variants.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    );
  };

  const getWinner = () => {
    if (!variants.some(v => v.openRate)) return null;
    return variants.reduce((prev, current) =>
      (current.openRate || 0) > (prev.openRate || 0) ? current : prev
    );
  };

  const winner = getWinner();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Split className="h-8 w-8" />
            A/B Testing Lab
          </h1>
          <p className="text-gray-600">
            Test different email variations to optimize your campaigns
          </p>
        </div>
        <Button onClick={addVariant} disabled={variants.length >= 4}>
          <Plus className="mr-2 h-4 w-4" />
          Add Variant
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Variants</CardTitle>
            <Split className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{variants.length}</div>
            <p className="text-xs text-gray-500">Active test variations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
            <Mail className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {variants.reduce((sum, v) => sum + (v.sent || 0), 0)}
            </div>
            <p className="text-xs text-gray-500">Combined across variants</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Winning Variant</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {winner ? `Variant ${winner.id}` : "N/A"}
            </div>
            <p className="text-xs text-gray-500">
              {winner ? `${winner.openRate}% open rate` : "No data yet"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="create">
            <Mail className="mr-2 h-4 w-4" />
            Create Variants
          </TabsTrigger>
          <TabsTrigger value="preview">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="results">
            <BarChart3 className="mr-2 h-4 w-4" />
            Results
          </TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-4">
          <div className="grid gap-4">
            {variants.map((variant) => (
              <Card key={variant.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline">Variant {variant.id}</Badge>
                      {winner?.id === variant.id && (
                        <Badge className="bg-green-500">Winner</Badge>
                      )}
                    </CardTitle>
                    {variant.openRate && (
                      <div className="text-sm text-gray-600">
                        {variant.openRate}% open • {variant.clickRate}% click
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`subject-${variant.id}`}>
                      Subject Line
                    </Label>
                    <Input
                      id={`subject-${variant.id}`}
                      value={variant.subject}
                      onChange={(e) =>
                        updateVariant(variant.id, "subject", e.target.value)
                      }
                      placeholder="Enter email subject..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`content-${variant.id}`}>
                      Email Content
                    </Label>
                    <Textarea
                      id={`content-${variant.id}`}
                      value={variant.content}
                      onChange={(e) =>
                        updateVariant(variant.id, "content", e.target.value)
                      }
                      placeholder="Enter email body... Use {{firstName}}, {{companyName}}, etc."
                      rows={6}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="preview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Previews</CardTitle>
              <CardDescription>
                See how your variants will appear to recipients
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {variants.map((variant) => (
                <div key={variant.id} className="border-b pb-6 last:border-b-0">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="outline">Variant {variant.id}</Badge>
                    {winner?.id === variant.id && (
                      <Badge className="bg-green-500">Best Performer</Badge>
                    )}
                  </div>
                  <div className="rounded-lg border bg-white p-4">
                    <div className="mb-2 font-semibold text-lg">
                      {variant.subject || "(No subject)"}
                    </div>
                    <div className="whitespace-pre-wrap text-gray-700">
                      {variant.content || "(No content)"}
                    </div>
                  </div>
                  {variant.openRate && (
                    <div className="mt-2 flex gap-4 text-sm text-gray-600">
                      <span>Opens: {variant.openRate}%</span>
                      <span>Clicks: {variant.clickRate}%</span>
                      <span>Sent: {variant.sent}</span>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>
                Performance metrics for each variant
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {variants
                  .filter((v) => v.openRate)
                  .sort((a, b) => (b.openRate || 0) - (a.openRate || 0))
                  .map((variant, index) => (
                    <div key={variant.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Variant {variant.id}</Badge>
                          {index === 0 && (
                            <Badge className="bg-green-500">Winner</Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          {variant.sent} sent
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Open Rate</span>
                          <span className="font-semibold">
                            {variant.openRate}%
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-blue-600"
                            style={{ width: `${variant.openRate}%` }}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Click Rate</span>
                          <span className="font-semibold">
                            {variant.clickRate}%
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-green-600"
                            style={{ width: `${variant.clickRate}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                {!variants.some((v) => v.openRate) && (
                  <div className="text-center py-8 text-gray-500">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>No test results yet</p>
                    <p className="text-sm">Send your variants to see performance data</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-3">
        <Button variant="outline">
          <Eye className="mr-2 h-4 w-4" />
          Send Test Email
        </Button>
        <Button>
          <Send className="mr-2 h-4 w-4" />
          Launch A/B Test
        </Button>
      </div>
    </div>
  );
}
