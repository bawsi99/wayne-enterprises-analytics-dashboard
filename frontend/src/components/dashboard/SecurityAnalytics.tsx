"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { XAxis, YAxis, CartesianGrid, AreaChart, Area, BarChart, Bar } from "recharts";
import { Badge } from "@/components/ui/badge";

const SecurityAnalytics = () => {
  // Security incidents trend
  const securityTrends = [
    { month: "Jan 2024", downtown: 28, eastEnd: 58, parkRow: 15, narrows: 75, bristol: 12, diamond: 22 },
    { month: "Feb 2024", downtown: 25, eastEnd: 55, parkRow: 12, narrows: 72, bristol: 9, diamond: 19 },
    { month: "Mar 2024", downtown: 22, eastEnd: 52, parkRow: 9, narrows: 69, bristol: 6, diamond: 16 },
    { month: "Apr 2024", downtown: 19, eastEnd: 49, parkRow: 6, narrows: 66, bristol: 3, diamond: 13 },
    { month: "May 2024", downtown: 16, eastEnd: 46, parkRow: 3, narrows: 63, bristol: 1, diamond: 10 },
    { month: "Jun 2024", downtown: 13, eastEnd: 43, parkRow: 1, narrows: 60, bristol: 0, diamond: 7 }
  ];

  // District performance
  const districtData = [
    { name: "Bristol", score: 10.0, incidents: 0, improvement: 100, status: "excellent" },
    { name: "Park Row", score: 10.0, incidents: 1, improvement: 97.5, status: "excellent" },
    { name: "Diamond District", score: 10.0, incidents: 7, improvement: 94.2, status: "excellent" },
    { name: "Downtown", score: 9.9, incidents: 13, improvement: 92.7, status: "good" },
    { name: "East End", score: 8.5, incidents: 43, improvement: 82.0, status: "improving" },
    { name: "The Narrows", score: 7.4, incidents: 60, improvement: 69.8, status: "concerning" }
  ];

  const responseTimeData = [
    { district: "Bristol", time: 1.0, deployments: 213 },
    { district: "Park Row", time: 0.9, deployments: 190 },
    { district: "Diamond", time: 1.3, deployments: 170 },
    { district: "Downtown", time: 1.1, deployments: 160 },
    { district: "East End", time: 2.5, deployments: 127 },
    { district: "Narrows", time: 3.8, deployments: 104 }
  ];

  const chartConfig = {
    downtown: { label: "Downtown", color: "#3b82f6" },
    eastEnd: { label: "East End", color: "#ef4444" },
    parkRow: { label: "Park Row", color: "#10b981" },
    narrows: { label: "The Narrows", color: "#f59e0b" },
    bristol: { label: "Bristol", color: "#8b5cf6" },
    diamond: { label: "Diamond District", color: "#06b6d4" }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "bg-green-500";
      case "good": return "bg-blue-500";
      case "improving": return "bg-yellow-500";
      case "concerning": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Security Headlines */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Security Operations Headlines</CardTitle>
          <CardDescription className="text-slate-300">
            Latest developments in Gotham security management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Historic Achievement: Bristol District Reaches Zero Crime Rate
            </h3>
            <p className="text-slate-300">
              June 2024 marks the first month with zero security incidents in Bristol, following 210+ Wayne Tech deployments and $22.5M infrastructure investment.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              AI-Powered Prediction System Reduces Response Times by 65%
            </h3>
            <p className="text-slate-300">
              Advanced deployment algorithms have reduced average response times to under 1 minute in top-performing districts.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Security Incidents Trend */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Security Incidents by District (2024)</CardTitle>
          <CardDescription className="text-slate-300">
            Monthly incident tracking showing dramatic improvements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <AreaChart data={securityTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="narrows" stackId="1" stroke="var(--color-narrows)" fill="var(--color-narrows)" />
              <Area type="monotone" dataKey="eastEnd" stackId="1" stroke="var(--color-eastEnd)" fill="var(--color-eastEnd)" />
              <Area type="monotone" dataKey="downtown" stackId="1" stroke="var(--color-downtown)" fill="var(--color-downtown)" />
              <Area type="monotone" dataKey="diamond" stackId="1" stroke="var(--color-diamond)" fill="var(--color-diamond)" />
              <Area type="monotone" dataKey="parkRow" stackId="1" stroke="var(--color-parkRow)" fill="var(--color-parkRow)" />
              <Area type="monotone" dataKey="bristol" stackId="1" stroke="var(--color-bristol)" fill="var(--color-bristol)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* District Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {districtData.map((district) => (
          <Card key={district.name} className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-300">{district.name}</CardTitle>
                <Badge className={getStatusColor(district.status)}>
                  {district.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white">Score: {district.score}/10</span>
                <span className="text-sm text-green-400">+{district.improvement}%</span>
              </div>
              <div className="text-sm text-slate-400">
                Current Incidents: {district.incidents}
              </div>
              <div className="h-2 bg-slate-700 rounded-full">
                <div 
                  className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" 
                  style={{ width: `${district.score * 10}%` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Response Times vs Deployments */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Response Times vs Wayne Tech Deployments</CardTitle>
          <CardDescription className="text-slate-300">
            Correlation between technology deployment and emergency response efficiency
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64">
            <BarChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="district" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="time" fill="#3b82f6" name="Response Time (min)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityAnalytics;
