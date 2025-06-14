
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, ScatterChart, Scatter } from "recharts";

const SupplyChainMetrics = () => {
  const productionData = [
    { month: "Jan 2024", aerospace: 165000, biotech: 125000, applied: 91000, construction: 282000, electronics: 226000 },
    { month: "Feb 2024", aerospace: 168000, biotech: 128000, applied: 93000, construction: 286000, electronics: 230000 },
    { month: "Mar 2024", aerospace: 172000, biotech: 131000, applied: 95000, construction: 290000, electronics: 234000 },
    { month: "Apr 2024", aerospace: 175000, biotech: 134000, applied: 97000, construction: 294000, electronics: 238000 },
    { month: "May 2024", aerospace: 178000, biotech: 137000, applied: 99000, construction: 298000, electronics: 242000 },
    { month: "Jun 2024", aerospace: 182000, biotech: 140000, applied: 101000, construction: 302000, electronics: 246000 }
  ];

  const facilityData = [
    {
      name: "Gotham Main",
      product: "Aerospace Components",
      volume: 182000,
      quality: 95.0,
      sustainability: "A",
      cost: 247.10,
      disruptions: 1,
      status: "excellent"
    },
    {
      name: "Metropolis North", 
      product: "Biotech Equipment",
      volume: 140000,
      quality: 97.0,
      sustainability: "A+",
      cost: 162.80,
      disruptions: 1,
      status: "excellent"
    },
    {
      name: "Central City",
      product: "Applied Sciences",
      volume: 101000,
      quality: 91.7,
      sustainability: "B+",
      cost: 251.20,
      disruptions: 3,
      status: "good"
    },
    {
      name: "Star City",
      product: "Construction Materials", 
      volume: 302000,
      quality: 90.1,
      sustainability: "B",
      cost: 96.80,
      disruptions: 4,
      status: "improving"
    },
    {
      name: "Keystone City",
      product: "Electronics",
      volume: 246000,
      quality: 96.1,
      sustainability: "A",
      cost: 69.30,
      disruptions: 1,
      status: "excellent"
    }
  ];

  const qualityTrends = [
    { facility: "Gotham Main", q1: 94.2, q2: 95.1, current: 95.0 },
    { facility: "Metropolis North", q1: 96.2, q2: 96.8, current: 97.0 },
    { facility: "Central City", q1: 92.8, q2: 92.5, current: 91.7 },
    { facility: "Star City", q1: 91.5, q2: 91.9, current: 90.1 },
    { facility: "Keystone City", q1: 95.8, q2: 96.1, current: 96.1 }
  ];

  const chartConfig = {
    aerospace: { label: "Aerospace", color: "#3b82f6" },
    biotech: { label: "Biotech", color: "#8b5cf6" },
    applied: { label: "Applied Sciences", color: "#f59e0b" },
    construction: { label: "Construction", color: "#10b981" },
    electronics: { label: "Electronics", color: "#06b6d4" }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "bg-green-500";
      case "good": return "bg-blue-500";
      case "improving": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getSustainabilityColor = (rating: string) => {
    if (rating.includes("A")) return "text-green-400";
    if (rating.includes("B")) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-6">
      {/* Supply Chain Headlines */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Supply Chain Performance Headlines</CardTitle>
          <CardDescription className="text-slate-300">
            Manufacturing and operations excellence updates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Metropolis North Achieves Peak Performance: 97% Quality, A+ Sustainability
            </h3>
            <p className="text-slate-300">
              Biotech equipment facility sets new company standards with 140K monthly production volume and minimal supply chain disruptions.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Production Surge: 1.17M Units Monthly Across All Facilities
            </h3>
            <p className="text-slate-300">
              June 2024 marks record production with Star City Construction leading at 302K units, supporting major infrastructure projects.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Production Volume Trends */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Production Volume by Product Line</CardTitle>
          <CardDescription className="text-slate-300">
            Monthly manufacturing output across all facilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <LineChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="construction" stroke="var(--color-construction)" strokeWidth={3} />
              <Line type="monotone" dataKey="electronics" stroke="var(--color-electronics)" strokeWidth={3} />
              <Line type="monotone" dataKey="aerospace" stroke="var(--color-aerospace)" strokeWidth={3} />
              <Line type="monotone" dataKey="biotech" stroke="var(--color-biotech)" strokeWidth={3} />
              <Line type="monotone" dataKey="applied" stroke="var(--color-applied)" strokeWidth={3} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Facility Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facilityData.map((facility) => (
          <Card key={facility.name} className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-300">{facility.name}</CardTitle>
                <Badge className={getStatusColor(facility.status)}>
                  {facility.status}
                </Badge>
              </div>
              <CardDescription className="text-slate-400 text-xs">
                {facility.product}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-slate-400">Volume:</span>
                  <p className="font-semibold text-white">{facility.volume.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-slate-400">Quality:</span>
                  <p className="font-semibold text-white">{facility.quality}%</p>
                </div>
                <div>
                  <span className="text-slate-400">Sustainability:</span>
                  <p className={`font-semibold ${getSustainabilityColor(facility.sustainability)}`}>
                    {facility.sustainability}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400">Disruptions:</span>
                  <p className="font-semibold text-white">{facility.disruptions}</p>
                </div>
              </div>
              <div className="text-xs text-slate-400">
                Cost per unit: ${facility.cost}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quality Trends */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Quality Score Trends by Facility</CardTitle>
          <CardDescription className="text-slate-300">
            Quality performance evolution over quarters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64">
            <BarChart data={qualityTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="facility" />
              <YAxis domain={[85, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="current" fill="#10b981" name="Current Quarter" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Supply Chain KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Supply Chain KPIs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Average Quality Score</span>
              <span className="text-2xl font-bold text-green-400">94.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Monthly Disruptions</span>
              <span className="text-2xl font-bold text-blue-400">2.0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Sustainability A-Rating</span>
              <span className="text-2xl font-bold text-purple-400">60%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Inventory Turnover</span>
              <span className="text-2xl font-bold text-yellow-400">7.2x</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Cost Efficiency Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Average Cost per Unit</span>
              <span className="text-2xl font-bold text-green-400">$165.44</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Cost Reduction YoY</span>
              <span className="text-2xl font-bold text-blue-400">-8.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Lead Time Average</span>
              <span className="text-2xl font-bold text-purple-400">17.6 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Carbon Footprint</span>
              <span className="text-2xl font-bold text-yellow-400">1,247 MT</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupplyChainMetrics;
