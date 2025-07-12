"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { TrendingUp, CheckCircle, Target, Brain } from "lucide-react";

const CEOReport = () => {
  // Executive KPIs
  const executiveKPIs = [
    { 
      metric: "Enterprise Revenue", 
      value: "$54.7B", 
      change: "+25.8%", 
      trend: "up",
      context: "Record-breaking year with all divisions contributing",
      priority: "celebrate"
    },
    { 
      metric: "Operating Margin", 
      value: "24.61%", 
      change: "+2.1pp", 
      trend: "up",
      context: "Improved efficiency across operations",
      priority: "maintain"
    },
    { 
      metric: "Gotham Crime Rate", 
      value: "-72%", 
      change: "vs 2023", 
      trend: "up",
      context: "Wayne Tech deployments transforming public safety",
      priority: "accelerate"
    },
    { 
      metric: "Employee Retention", 
      value: "97.6%", 
      change: "+1.2pp", 
      trend: "up",
      context: "Industry-leading talent retention strategies",
      priority: "maintain"
    }
  ];

  // Strategic performance by division
  const divisionPerformance = [
    { name: "Biotech", revenue: 10.1, margin: 29.18, growth: 28.5, potential: "Very High" },
    { name: "Aerospace", revenue: 12.8, margin: 28.55, growth: 22.3, potential: "High" },
    { name: "Applied Sciences", revenue: 7.9, margin: 26.36, growth: 18.7, potential: "Very High" },
    { name: "Construction", revenue: 21.9, margin: 23.62, growth: 15.2, potential: "Medium" },
    { name: "Foundation", revenue: 2.0, margin: -18.93, growth: -12.4, potential: "Social Impact" }
  ];

  // Key initiatives status
  const keyInitiatives = [
    {
      initiative: "Gotham Security Transformation",
      status: "Exceeding Expectations",
      progress: 95,
      impact: "72% crime reduction, Bristol district at zero incidents",
      investment: "$127M",
      roi: "850%"
    },
    {
      initiative: "Neural Interface Commercialization",
      status: "On Track",
      progress: 79,
      impact: "Expected $50B+ market by 2026",
      investment: "$146M",
      roi: "Projected 2,400%"
    },
    {
      initiative: "Quantum Computing Breakthrough",
      status: "Accelerating",
      progress: 83,
      impact: "7 breakthrough patents, commercial ready 2026",
      investment: "$235M",
      roi: "Projected 1,800%"
    },
    {
      initiative: "Aerospace Market Expansion",
      status: "Strong Performance",
      progress: 88,
      impact: "24.2% market share, $2B defense contracts",
      investment: "$340M",
      roi: "425%"
    }
  ];

  // Risk assessment
  const riskMatrix = [
    { 
      risk: "Wayne Foundation Losses", 
      probability: "High", 
      impact: "Medium", 
      mitigation: "Restructure operations, focus on high-impact programs",
      status: "Action Required"
    },
    { 
      risk: "Supply Chain Disruptions", 
      probability: "Medium", 
      impact: "High", 
      mitigation: "Diversify suppliers, increase inventory buffers",
      status: "Monitoring"
    },
    { 
      risk: "Talent Competition", 
      probability: "High", 
      impact: "Medium", 
      mitigation: "Enhanced benefits, career development programs",
      status: "Managed"
    },
    { 
      risk: "R&D Project Delays", 
      probability: "Medium", 
      impact: "Medium", 
      mitigation: "Portfolio rebalancing, milestone-based funding",
      status: "Monitoring"
    }
  ];

  const chartConfig = {
    revenue: { label: "Revenue ($B)", color: "#10b981" },
    margin: { label: "Margin (%)", color: "#3b82f6" },
    growth: { label: "Growth (%)", color: "#8b5cf6" }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Exceeding Expectations": return "bg-green-500";
      case "On Track": return "bg-blue-500";
      case "Accelerating": return "bg-purple-500";
      case "Strong Performance": return "bg-emerald-500";
      case "Action Required": return "bg-red-500";
      case "Monitoring": return "bg-yellow-500";
      case "Managed": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "celebrate": return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "accelerate": return <TrendingUp className="w-5 h-5 text-blue-400" />;
      case "maintain": return <Target className="w-5 h-5 text-purple-400" />;
      default: return <Brain className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Executive Summary Header */}
      <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/50 border-slate-600">
        <CardHeader>
          <CardTitle className="text-2xl text-white">CEO Strategic Report • Q4 2024</CardTitle>
          <CardDescription className="text-slate-300 text-lg">
            Comprehensive analysis of Wayne Enterprises performance, strategic initiatives, and future outlook
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveKPIs.map((kpi, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-slate-300">{kpi.metric}</h3>
                  {getPriorityIcon(kpi.priority)}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{kpi.value}</div>
                <div className={`text-sm font-medium mb-2 ${
                  kpi.trend === "up" ? "text-green-400" : "text-red-400"
                }`}>
                  {kpi.trend === "up" ? "↗" : "↘"} {kpi.change}
                </div>
                <p className="text-xs text-slate-400 leading-tight">{kpi.context}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategic Performance Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Division Strategic Performance</CardTitle>
            <CardDescription className="text-slate-300">
              Revenue, profitability, and growth analysis by business unit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <BarChart data={divisionPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="revenue" fill="var(--color-revenue)" name="Revenue ($B)" />
                <Bar dataKey="margin" fill="var(--color-margin)" name="Margin %" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Division Performance Matrix</CardTitle>
            <CardDescription className="text-slate-300">
              Strategic positioning and growth potential assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {divisionPerformance.map((division, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div>
                    <h3 className="font-medium text-white">{division.name}</h3>
                    <p className="text-sm text-slate-400">{division.potential} Potential</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">${division.revenue}B</div>
                    <div className={`text-sm ${
                      division.growth > 0 ? "text-green-400" : "text-red-400"
                    }`}>
                      {division.growth > 0 ? "+" : ""}{division.growth}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Strategic Initiatives */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Strategic Initiative Portfolio</CardTitle>
          <CardDescription className="text-slate-300">
            Status and performance of critical enterprise initiatives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyInitiatives.map((initiative, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{initiative.initiative}</h3>
                  <Badge className={getStatusColor(initiative.status)}>
                    {initiative.status}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-white font-medium">{initiative.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${initiative.progress}%` }}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-400">Investment:</span>
                      <p className="font-medium text-white">{initiative.investment}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">ROI:</span>
                      <p className="font-medium text-green-400">{initiative.roi}</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-300 bg-slate-800/50 p-2 rounded">
                    {initiative.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment Matrix */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Enterprise Risk Assessment</CardTitle>
          <CardDescription className="text-slate-300">
            Strategic risks and mitigation strategies for 2025
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskMatrix.map((risk, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-1">{risk.risk}</h3>
                  <p className="text-sm text-slate-300 mb-2">{risk.mitigation}</p>
                  <div className="flex gap-4 text-xs">
                    <span className="text-slate-400">
                      Probability: <span className="text-white">{risk.probability}</span>
                    </span>
                    <span className="text-slate-400">
                      Impact: <span className="text-white">{risk.impact}</span>
                    </span>
                  </div>
                </div>
                <Badge className={getStatusColor(risk.status)}>
                  {risk.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategic Recommendations */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Executive Recommendations for 2025</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">Accelerate High-ROI Initiatives</h3>
            <p className="text-slate-300">
              Double down on Gotham Security and Neural Interface programs showing exceptional returns. 
              Consider expanding successful models to other markets.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">Optimize R&D Portfolio</h3>
            <p className="text-slate-300">
              Shift resources toward Biotech and Applied Sciences divisions with proven R&D correlation. 
              Review underperforming theoretical physics projects.
            </p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">Address Foundation Losses</h3>
            <p className="text-slate-300">
              Restructure Wayne Foundation operations to focus on measurable social impact while 
              reducing operational overhead and improving financial sustainability.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CEOReport;
