"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Upload,
  Sparkles,
  Eye,
  Save,
  Send,
  AlertCircle,
  Plus,
  X
} from "lucide-react";

export default function NewCampaignPage() {
  const router = useRouter();
  const [campaignName, setCampaignName] = useState("");
  const [targetCompanies, setTargetCompanies] = useState<string[]>([]);
  const [companyInput, setCompanyInput] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [emailTone, setEmailTone] = useState("professional");
  const [productInfo, setProductInfo] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const addCompany = () => {
    if (companyInput.trim() && !targetCompanies.includes(companyInput.trim())) {
      setTargetCompanies([...targetCompanies, companyInput.trim()]);
      setCompanyInput("");
    }
  };

  const removeCompany = (company: string) => {
    setTargetCompanies(targetCompanies.filter((c) => c !== company));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle CSV/Excel file upload
      console.log("File uploaded:", file.name);
    }
  };

  const generateAITemplate = () => {
    // Simulate AI generation
    setEmailSubject("Unlock Growth Opportunities with [Product Name]");
    setEmailBody(
      `Hi {{firstName}},

I hope this email finds you well! I came across {{companyName}} and was impressed by {{recentNews}}.

I wanted to reach out because I believe our solution could help you achieve {{goal}}. We've helped companies like {{similarCompany}} to {{achievement}}.

${productInfo ? `\n${productInfo}\n` : ''}
Would you be open to a brief conversation about how we can support {{companyName}}'s growth?

Best regards,
{{senderName}}`
    );
  };

  const handleSave = () => {
    // Save as draft
    console.log("Saving campaign...");
    router.push("/dashboard/campaigns");
  };

  const handleLaunch = () => {
    // Launch campaign
    console.log("Launching campaign...");
    router.push("/dashboard/campaigns");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Create New Campaign</h1>
          <p className="text-gray-600">
            Set up an AI-powered personalized email campaign
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button variant="outline" onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button onClick={handleLaunch}>
            <Send className="mr-2 h-4 w-4" />
            Launch Campaign
          </Button>
        </div>
      </div>

      <Tabs defaultValue="setup" className="space-y-4">
        <TabsList>
          <TabsTrigger value="setup">Campaign Setup</TabsTrigger>
          <TabsTrigger value="targets">Target Companies</TabsTrigger>
          <TabsTrigger value="email">Email Template</TabsTrigger>
          <TabsTrigger value="preview">Preview & Test</TabsTrigger>
        </TabsList>

        <TabsContent value="setup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Details</CardTitle>
              <CardDescription>
                Basic information about your campaign
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="campaign-name">Campaign Name *</Label>
                <Input
                  id="campaign-name"
                  placeholder="e.g., Q1 Enterprise Outreach"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="product-info">Product/Service Information</Label>
                <Textarea
                  id="product-info"
                  placeholder="Describe your product or service that will be marketed..."
                  rows={4}
                  value={productInfo}
                  onChange={(e) => setProductInfo(e.target.value)}
                />
                <p className="text-sm text-gray-500">
                  This information will help AI personalize emails better
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-tone">Email Tone</Label>
                <Select value={emailTone} onValueChange={setEmailTone}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual & Friendly</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="targets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Target Companies</CardTitle>
              <CardDescription>
                Add companies you want to target with this campaign
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Enter company websites or names. Our AI will research each company
                  and personalize emails accordingly.
                </AlertDescription>
              </Alert>

              <div className="flex gap-2">
                <Input
                  placeholder="Company website or name (e.g., example.com)"
                  value={companyInput}
                  onChange={(e) => setCompanyInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addCompany()}
                />
                <Button onClick={addCompany}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Separator />

              <div>
                <Label>Upload Company List</Label>
                <div className="mt-2 flex items-center gap-4">
                  <Button variant="outline" asChild>
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload CSV/Excel
                      <input
                        id="file-upload"
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </Button>
                  <p className="text-sm text-gray-500">
                    Maximum 100 companies per campaign
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>
                  Target Companies ({targetCompanies.length})
                </Label>
                {targetCompanies.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {targetCompanies.map((company) => (
                      <Badge
                        key={company}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {company}
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => removeCompany(company)}
                        />
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">
                    No companies added yet
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Template</CardTitle>
              <CardDescription>
                Create your email template with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Sparkles className="h-4 w-4" />
                <AlertDescription>
                  Use variables like {`{{firstName}}, {{companyName}}, {{recentNews}}`}{" "}
                  to personalize emails
                </AlertDescription>
              </Alert>

              <Button
                variant="outline"
                onClick={generateAITemplate}
                className="w-full"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Generate AI Template
              </Button>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="email-subject">Subject Line *</Label>
                <Input
                  id="email-subject"
                  placeholder="Enter email subject..."
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                />
                <p className="text-sm text-gray-500">
                  Variables: {`{{firstName}}, {{companyName}}`}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-body">Email Body *</Label>
                <Textarea
                  id="email-body"
                  placeholder="Enter your email message..."
                  rows={12}
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  className="font-mono text-sm"
                />
                <p className="text-sm text-gray-500">
                  Available variables: {`{{firstName}}, {{lastName}}, {{companyName}},
                  {{title}}, {{recentNews}}, {{industry}}`}
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h4 className="mb-2 font-semibold">Email Customization Tips</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Use personalization variables to make emails unique</li>
                  <li>• Keep subject lines under 60 characters</li>
                  <li>• Focus on value proposition in first paragraph</li>
                  <li>• Include a clear call-to-action</li>
                  <li>• Keep emails concise (150-200 words ideal)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Preview</CardTitle>
              <CardDescription>
                See how your email will look to recipients
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Eye className="h-4 w-4" />
                <AlertDescription>
                  Preview shows how the email will appear with sample data
                </AlertDescription>
              </Alert>

              <div className="rounded-lg border bg-white p-6">
                <div className="mb-4 border-b pb-4">
                  <div className="text-sm text-gray-500">Subject:</div>
                  <div className="font-semibold">
                    {emailSubject || "No subject line set"}
                  </div>
                </div>
                <div className="whitespace-pre-wrap text-sm">
                  {emailBody || "No email body content"}
                </div>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <h4 className="mb-2 font-semibold text-blue-900">
                  Personalized Preview Sample
                </h4>
                <div className="space-y-2 text-sm text-blue-800">
                  <p>
                    <strong>For:</strong> John Smith, CEO at TechCorp
                  </p>
                  <div className="mt-3 whitespace-pre-wrap rounded bg-white p-3 text-gray-900">
                    {emailBody
                      .replace(/\{\{firstName\}\}/g, "John")
                      .replace(/\{\{lastName\}\}/g, "Smith")
                      .replace(/\{\{companyName\}\}/g, "TechCorp")
                      .replace(/\{\{title\}\}/g, "CEO")
                      .replace(
                        /\{\{recentNews\}\}/g,
                        "your recent Series B funding announcement"
                      )
                      .replace(/\{\{industry\}\}/g, "Technology") ||
                      "No email content to preview"}
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Test Email
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Campaign Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Campaign Name:</span>
                <span className="font-semibold">
                  {campaignName || "Not set"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Target Companies:</span>
                <span className="font-semibold">{targetCompanies.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email Tone:</span>
                <span className="font-semibold capitalize">{emailTone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Template Status:</span>
                <Badge
                  variant={
                    emailSubject && emailBody ? "default" : "secondary"
                  }
                >
                  {emailSubject && emailBody ? "Complete" : "Incomplete"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
