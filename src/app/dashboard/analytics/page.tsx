"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Mail,
  Users,
  Target,
  DollarSign,
} from "lucide-react";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");

  // Sample data
  const emailPerformanceData = [
    { date: "Jan 1", sent: 120, opened: 85, clicked: 42 },
    { date: "Jan 8", sent: 150, opened: 110, clicked: 55 },
    { date: "Jan 15", sent: 180, opened: 140, clicked: 68 },
    { date: "Jan 22", sent: 145, opened: 105, clicked: 51 },
    { date: "Jan 29", sent: 200, opened: 160, clicked: 82 },
    { date: "Feb 5", sent: 175, opened: 135, clicked: 70 },
  ];

  const campaignData = [
    { name: "Q1 Tech Startups", value: 48, rate: 45.8 },
    { name: "Enterprise SaaS", value: 45, rate: 38.2 },
    { name: "Series A Companies", value: 32, rate: 51.2 },
    { name: "VC Firms", value: 28, rate: 39.5 },
  ];

  const statusDistribution = [
    { name: "Sent", value: 153, color: "#10b981" },
    { name: "Opened", value: 98, color: "#3b82f6" },
    { name: "Clicked", value: 45, color: "#8b5cf6" },
    { name: "Failed", value: 12, color: "#ef4444" },
  ];

  const engagementTrend = [
    { month: "Aug", rate: 32.5 },
    { month: "Sep", rate: 35.2 },
    { month: "Oct", rate: 38.8 },
    { month: "Nov", rate: 41.2 },
    { month: "Dec", rate: 39.5 },
    { month: "Jan", rate: 42.8 },
  ];

  const stats = [
    {
      title: "Total Emails Sent",
      value: "2,543",
      change: "+12.5%",
      trend: "up",
      icon: Mail,
    },
    {
      title: "Active Contacts",
      value: "1,284",
      change: "+8.2%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Avg. Open Rate",
      value: "42.8%",
      change: "+3.1%",
      trend: "up",
      icon: Target,
    },
    {
      title: "Conversion Rate",
      value: "18.5%",
      change: "-2.3%",
      trend: "down",
      icon: DollarSign,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-gray-600">
            Track your campaign performance and insights
          </p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="1y">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const isPositive = stat.trend === "up";

          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-sm">
                  {isPositive ? (
                    <TrendingUp className="mr-1 h-4 w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="mr-1 h-4 w-4 text-red-600" />
                  )}
                  <span
                    className={
                      isPositive ? "text-green-600" : "text-red-600"
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="ml-1 text-gray-500">vs last period</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Email Performance</CardTitle>
            <CardDescription>
              Sent, opened, and clicked over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={emailPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="sent"
                  stackId="1"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="opened"
                  stackId="2"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="clicked"
                  stackId="3"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Trend</CardTitle>
            <CardDescription>
              Overall engagement rate by month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
            <CardDescription>
              Emails sent by campaign
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Email Status Distribution</CardTitle>
            <CardDescription>
              Current status of all emails
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Campaigns</CardTitle>
          <CardDescription>
            Campaigns with highest engagement rates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignData.map((campaign, index) => (
              <div key={campaign.name} className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                  #{index + 1}
                </div>
                <div className="ml-4 flex-1">
                  <p className="font-semibold">{campaign.name}</p>
                  <p className="text-sm text-gray-500">
                    {campaign.value} emails sent
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">
                    {campaign.rate}%
                  </p>
                  <p className="text-sm text-gray-500">open rate</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
