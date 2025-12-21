"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Eye, Send } from "lucide-react";

interface EmailPreviewProps {
  subject: string;
  content: string;
  from?: string;
  to?: string;
  variant?: string;
  onSendTest?: () => void;
  showActions?: boolean;
}

export function EmailPreview({
  subject,
  content,
  from = "you@company.com",
  to = "recipient@example.com",
  variant,
  onSendTest,
  showActions = true,
}: EmailPreviewProps) {
  // Replace template variables with sample data for preview
  const previewContent = content
    .replace(/\{\{firstName\}\}/g, "John")
    .replace(/\{\{lastName\}\}/g, "Doe")
    .replace(/\{\{companyName\}\}/g, "Acme Corp")
    .replace(/\{\{title\}\}/g, "CEO")
    .replace(/\{\{recentNews\}\}/g, "launched a new product line")
    .replace(/\{\{industry\}\}/g, "Technology")
    .replace(/\{\{senderName\}\}/g, "Your Name");

  const previewSubject = subject
    .replace(/\{\{firstName\}\}/g, "John")
    .replace(/\{\{lastName\}\}/g, "Doe")
    .replace(/\{\{companyName\}\}/g, "Acme Corp")
    .replace(/\{\{title\}\}/g, "CEO");

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email Preview
            {variant && <Badge variant="outline">{variant}</Badge>}
          </CardTitle>
          {showActions && (
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={onSendTest}>
                <Send className="mr-2 h-3 w-3" />
                Send Test
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border bg-white shadow-sm">
          {/* Email Header */}
          <div className="border-b bg-gray-50 p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-gray-700">From:</span>
              <span className="text-gray-600">{from}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-gray-700">To:</span>
              <span className="text-gray-600">{to}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Subject:</span>
              <span className="text-gray-900 font-medium">
                {previewSubject || "(No subject)"}
              </span>
            </div>
          </div>

          {/* Email Body */}
          <div className="p-6">
            <div className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
              {previewContent || "(No content)"}
            </div>
          </div>
        </div>

        {/* Template Variables Info */}
        <div className="mt-4 rounded-lg bg-blue-50 p-3 text-sm">
          <div className="flex items-start gap-2">
            <Eye className="h-4 w-4 text-blue-600 mt-0.5" />
            <div className="text-blue-900">
              <p className="font-semibold mb-1">Preview Mode</p>
              <p className="text-blue-700">
                Template variables are replaced with sample data. Actual emails will use
                personalized recipient information.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
