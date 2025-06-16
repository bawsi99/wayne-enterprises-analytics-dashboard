
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const FinancialOverview = () => {
  // Updated quarterly revenue data with corrected division names and figures
  const quarterlyData = [
    { quarter: "Q1 2024", aerospace: 3200.1, biotech: 2514.9, applied: 1968.6, construction: 5478.6, foundation: 507.4 },
    { quarter: "Q2 2024", aerospace: 3201.0, biotech: 2514.9, applied: 1968.6, construction: 5478.6, foundation: 507.4 },
    { quarter: "Q3 2024", aerospace: 3201.0, biotech: 2514.9, applied: 1968.6, construction: 5478.6, foundation: 507.4 },
    { quarter: "Q4 2024", aerospace: 3201.0, biotech: 2514.9, applied: 1968.6, construction: 5478.6, foundation: 507.4 }
  ];

  // Division performance with validated data
  const divisionData = [
    { 
      name: "Wayne Aerospace", 
      revenue: 12804.1, 
      profit: 3655.7, 
      margin: 28.55,
      correlation: 0.07,
      color: "#3b82f6" 
    },
    { 
      name: "Wayne Biotech", 
      revenue: 10059.5, 
      profit: 2935.4, 
      margin: 29.18,
      correlation: 0.37,
      color: "#8b5cf6" 
    },
    { 
      name: "Applied Sciences", 
      revenue: 7874.5, 
      profit: 2075.8, 
      margin: 26.36,
      correlation: 0.30,
      color: "#f59e0b" 
    },
    { 
      name: "Wayne Construction", 
      revenue: 21914.9, 
      profit: 5175.8, 
      margin: 23.62,
      correlation: -0.02,
      color: "#10b981" 
    },
    { 
      name: "Wayne Foundation", 
      revenue: 2029.4, 
      profit: -384.2, 
      margin: -18.93,
      correlation: 0,
      color: "#ef4444" 
    }
  ];

  // R&D correlation data
  const rdCorrelationData = [
    { division: "Biotech", correlation: 0.37, investment: 676, effectiveness: "High" },
    { division: "Applied Sciences", correlation: 0.30, investment: 634, effectiveness: "Medium-High" },
    { division: "Aerospace", correlation: 0.07, investment: 540, effectiveness: "Low" },
    { division: "Construction", correlation: -0.02, investment: 456, effectiveness: "None" }
  ];

  const revenuePerEmployee = [
    { division: "Wayne Aerospace", employees: 12000, revenue: 12804.1, rpe: 1067 },
    { division: "Wayne Biotech", employees: 8500, revenue: 10059.5, rpe: 1184 },
    { division: "Applied Sciences", employees: 6800, revenue: 7874.5, rpe: 1158 },
    { division: "Wayne Construction", employees: 15000, revenue: 21914.9, rpe: 1461 },
    { division: "Wayne Foundation", employees: 1200, revenue: 2029.4, rpe: 1691 }
  ];

  const chartConfig = {
    aerospace: { label: "Aerospace", color: "#3b82f6" },
    biotech: { label: "Biotech", color: "#8b5cf6" },
    applied: { label: "Applied Sciences", color: "#f59e0b" },
    construction: { label: "Construction", color: "#10b981" },
    foundation: { label: "Foundation", color: "#ef4444" }
  };

  return (
    <div className="space-y-6">
      {/* Financial Headlines */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Financial Performance Headlines</CardTitle>
          <CardDescription className="text-slate-300">
            Key financial achievements and performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Record Revenue: $54.7B Total (24.61% Profit Margin)
            </h3>
            <p className="text-slate-300">
              Wayne Enterprises achieved highest annual revenue with $13.5B total profit across all major divisions in 2024.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Biotech Excellence: 29.18% Profit Margin
            </h3>
            <p className="text-slate-300">
              Wayne Biotech delivered the highest profit margin (29.18%) and strong R&D ROI among all business units.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Construction Scale: $21.9B Revenue (40% of Total)
            </h3>
            <p className="text-slate-300">
              Construction remains the largest revenue driver, but with a moderate 23.62% margin.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Trends */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Quarterly Revenue Trends</CardTitle>
          <CardDescription className="text-slate-300">
            Division performance over 2024 ($ Millions)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <LineChart data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="construction" stroke="var(--color-construction)" strokeWidth={3} />
              <Line type="monotone" dataKey="aerospace" stroke="var(--color-aerospace)" strokeWidth={3} />
              <Line type="monotone" dataKey="biotech" stroke="var(--color-biotech)" strokeWidth={3} />
              <Line type="monotone" dataKey="applied" stroke="var(--color-applied)" strokeWidth={3} />
              <Line type="monotone" dataKey="foundation" stroke="var(--color-foundation)" strokeWidth={2} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Division Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {divisionData.map((division) => (
          <Card key={division.name} className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-300">{division.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-white">${(division.revenue/1000).toFixed(1)}B</span>
                <span className={`text-sm font-medium ${division.margin > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {division.margin.toFixed(1)}%
                </span>
              </div>
              <div className="text-sm text-slate-400">
                Profit: ${(division.profit/1000).toFixed(1)}B
              </div>
              <div className="text-xs text-slate-500">
                R&D Correlation: {division.correlation.toFixed(2)}
              </div>
              <div className="h-2 bg-slate-700 rounded-full">
                <div 
                  className="h-2 rounded-full" 
                  style={{ 
                    width: `${Math.min(Math.abs(division.margin) * 2, 100)}%`,
                    backgroundColor: division.margin > 0 ? division.color : '#ef4444'
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* R&D Correlation Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">R&D Investment Correlation</CardTitle>
            <CardDescription className="text-slate-300">
              R&D spend correlation with revenue growth by division
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <BarChart data={rdCorrelationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="division" angle={-45} textAnchor="end" height={80} />
                <YAxis domain={[-0.1, 0.4]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="correlation" fill="#8b5cf6" name="R&D Correlation" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Revenue per Employee</CardTitle>
            <CardDescription className="text-slate-300">
              Productivity metrics by division ($K per employee)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <BarChart data={revenuePerEmployee}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="division" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="rpe" fill="#3b82f6" name="Revenue per Employee ($K)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Financial Health Summary */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Financial Health Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">$54.7B</div>
              <div className="text-slate-300 text-sm">Total Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">24.61%</div>
              <div className="text-slate-300 text-sm">Profit Margin</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">$13.5B</div>
              <div className="text-slate-300 text-sm">Total Profit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">43,500</div>
              <div className="text-slate-300 text-sm">Total Employees</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialOverview;
