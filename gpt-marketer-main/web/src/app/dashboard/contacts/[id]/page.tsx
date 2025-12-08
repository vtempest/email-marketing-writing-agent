"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  ArrowLeft,
  Mail,
  Phone,
  Building2,
  Calendar,
  MapPin,
  Linkedin,
  Twitter,
  Edit,
  Sparkles,
  ExternalLink,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function ContactDetailPage() {
  const params = useParams();
  const router = useRouter();
  const contactId = params.id as string;

  // Sample data - replace with actual database query
  const [contact] = useState({
    id: contactId,
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@techcorp.com",
    phone: "+1 (555) 123-4567",
    title: "Chief Executive Officer",
    department: "Executive",
    company: "TechCorp",
    companyId: "1",
    status: "active",
    tags: ["decision-maker", "tech", "enterprise"],
    linkedinUrl: "https://linkedin.com/in/johnsmith",
    twitterUrl: "https://twitter.com/johnsmith",
    location: "San Francisco, CA",
    notes: "Very interested in our enterprise solution. Prefers email communication.",
    lastContactedAt: "2024-01-15",
    createdAt: "2023-12-01",
    updatedAt: "2024-01-15",
  });

  const [companyInfo] = useState({
    name: "TechCorp",
    website: "techcorp.com",
    industry: "Technology",
    size: "500-1000 employees",
    description: "Leading enterprise software solutions provider",
    recentNews: [
      "TechCorp announces $50M Series C funding",
      "Launches new AI-powered platform",
      "Expands to European markets",
    ],
  });

  const [activityHistory] = useState([
    {
      id: "1",
      type: "email",
      subject: "Q1 Product Update",
      date: "2024-01-15",
      status: "opened",
    },
    {
      id: "2",
      type: "email",
      subject: "Enterprise Solutions Demo",
      date: "2024-01-10",
      status: "clicked",
    },
    {
      id: "3",
      type: "note",
      content: "Expressed interest in enterprise tier",
      date: "2024-01-05",
    },
    {
      id: "4",
      type: "email",
      subject: "Introduction to Our Services",
      date: "2023-12-15",
      status: "opened",
    },
  ]);

  const initials = `${contact.firstName[0]}${contact.lastName[0]}`.toUpperCase();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/dashboard/contacts")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-lg">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">
              {contact.firstName} {contact.lastName}
            </h1>
            <p className="text-gray-600">{contact.title}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Send Email
          </Button>
          <Button variant="outline">
            <Sparkles className="mr-2 h-4 w-4" />
            Enrich Data
          </Button>
          <Link href={`/dashboard/contacts/${contactId}/edit`}>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="font-medium hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Company</p>
                    <Link
                      href={`/dashboard/companies/${contact.companyId}`}
                      className="font-medium hover:underline"
                    >
                      {contact.company}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{contact.location}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4">
                {contact.linkedinUrl && (
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {contact.twitterUrl && (
                  <a
                    href={contact.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:underline"
                  >
                    <Twitter className="h-5 w-5" />
                    Twitter
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              <Separator />

              <div>
                <p className="mb-2 text-sm text-gray-500">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {contact.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {contact.notes && (
                <>
                  <Separator />
                  <div>
                    <p className="mb-2 text-sm text-gray-500">Notes</p>
                    <p className="text-sm">{contact.notes}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity History</CardTitle>
              <CardDescription>Recent interactions and communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityHistory.map((activity) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      {activity.type === "email" ? (
                        <Mail className="h-5 w-5 text-gray-600" />
                      ) : (
                        <Clock className="h-5 w-5 text-gray-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">
                          {activity.type === "email"
                            ? activity.subject
                            : "Note added"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(activity.date!).toLocaleDateString()}
                        </p>
                      </div>
                      {activity.type === "email" && activity.status && (
                        <Badge variant="secondary" className="mt-1">
                          {activity.status}
                        </Badge>
                      )}
                      {activity.type === "note" && (
                        <p className="mt-1 text-sm text-gray-600">
                          {activity.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-sm text-gray-500">Current Status</p>
                <Badge className="bg-green-500">
                  {contact.status.charAt(0).toUpperCase() +
                    contact.status.slice(1)}
                </Badge>
              </div>

              <Separator />

              <div>
                <p className="mb-2 text-sm text-gray-500">Last Contacted</p>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <p className="font-medium">
                    {new Date(contact.lastContactedAt!).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <p className="mb-2 text-sm text-gray-500">Created</p>
                <p className="font-medium">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm text-gray-500">Last Updated</p>
                <p className="font-medium">
                  {new Date(contact.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold">{companyInfo.name}</p>
                <a
                  href={`https://${companyInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {companyInfo.website}
                </a>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-gray-500">Industry</p>
                <p className="font-medium">{companyInfo.industry}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Company Size</p>
                <p className="font-medium">{companyInfo.size}</p>
              </div>

              <Separator />

              <div>
                <p className="mb-2 text-sm font-semibold">Recent News</p>
                <ul className="space-y-1">
                  {companyInfo.recentNews.map((news, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                      <span>{news}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
