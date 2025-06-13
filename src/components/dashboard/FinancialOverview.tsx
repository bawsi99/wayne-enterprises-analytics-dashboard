
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const FinancialOverview = () => {
  // Revenue trend data
  const revenueData = [
    { quarter: "Q1 2023", aerospace: 1250.5, biotech: 980.4, applied: 750.3, construction: 2100.8, foundation: -15.3 },
    { quarter: "Q2 2023", aerospace: 1380.7, biotech: 1045.7, applied: 820.6, construction: 2350.4, foundation: -17.3 },
    { quarter: "Q3 2023", aerospace: 1420.3, biotech: 1120.8, applied: 890.8, construction: 2580.9, foundation: -24.5 },
    { quarter: "Q4 2023", aerospace: 1650.9, biotech: 1280.5, applied: 980.5, construction: 2780.5, foundation: -52.4 },
    { quarter: "Q1 2024", aerospace: 1580.2, biotech: 1180.3, applied: 920.7, construction: 2650.3, foundation: -45.1 },
    { quarter: "Q2 2024", aerospace: 1720.5, biotech: 1350.9, applied: 1050.4, construction: 2920.7, foundation: -64.8 },
    { quarter: "Q3 2024", aerospace: 1850.3, biotech: 1480.2, applied: 1180.9, construction: 3150.4, foundation: -75.4 },
    { quarter: "Q4 2024", aerospace: 1950.7, biotech: 1620.7, applied: 1280.3, construction: 3380.9, foundation: -89.4 }
  ];

  // Division performance data
  const divisionData = [
    { name: "Wayne Aerospace", revenue: 1950.7, growth: 24.2, profit: 630.5, color: "#3b82f6" },
    { name: "Wayne Construction", revenue: 3380.9, growth: 31.8, profit: 860.6, color: "#10b981" },
    { name: "Wayne Biotech", revenue: 1620.7, growth: 22.1, profit: 515.4, color: "#8b5cf6" },
    { name: "Wayne Applied Sciences", revenue: 1280.3, growth: 18.9, profit: 369.8, color: "#f59e0b" }
  ];

  const chartConfig = {
    aerospace: { label: "Aerospace", color: "#3b82f6" },
    biotech: { label: "Biotech", color: "#8b5cf6" },
    applied: { label: "Applied Sciences", color: "#f59e0b" },
    construction: { label: "Construction", color: "#10b981" }
  };

  return (
    <div className="space-y-6">
      {/* Revenue Trends */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Revenue Trends by Division</CardTitle>
          <CardDescription className="text-slate-300">
            Quarterly revenue performance across all business units ($ Millions)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="aerospace" stroke="var(--color-aerospace)" strokeWidth={3} />
              <Line type="monotone" dataKey="biotech" stroke="var(--color-biotech)" strokeWidth={3} />
              <Line type="monotone" dataKey="applied" stroke="var(--color-applied)" strokeWidth={3} />
              <Line type="monotone" dataKey="construction" stroke="var(--color-construction)" strokeWidth={3} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Division Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {divisionData.map((division) => (
          <Card key={division.name} className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-300">{division.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">${division.revenue}M</span>
                <span className="text-sm text-green-400">+{division.growth}%</span>
              </div>
              <div className="text-sm text-slate-400">
                Net Profit: ${division.profit}M
              </div>
              <div className="h-2 bg-slate-700 rounded-full">
                <div 
                  className="h-2 rounded-full" 
                  style={{ 
                    width: `${Math.min(division.growth * 3, 100)}%`,
                    backgroundColor: division.color 
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Share & Investment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">R&D Investment vs Revenue</CardTitle>
            <CardDescription className="text-slate-300">
              Research investment as percentage of revenue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <BarChart data={revenueData.slice(-4)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="aerospace" fill="var(--color-aerospace)" />
                <Bar dataKey="biotech" fill="var(--color-biotech)" />
                <Bar dataKey="applied" fill="var(--color-applied)" />
                <Bar dataKey="construction" fill="var(--color-construction)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Financial Health Indicators</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Total Revenue Growth</span>
              <span className="text-2xl font-bold text-green-400">+15.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Operating Margin</span>
              <span className="text-2xl font-bold text-blue-400">28.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">R&D Investment</span>
              <span className="text-2xl font-bold text-purple-400">$525M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Employee Count</span>
              <span className="text-2xl font-bold text-yellow-400">33,650</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancialOverview;
