import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, AreaChart, Area } from "recharts";
import { TrendingUp, Shield, Users, Beaker, Building, AlertTriangle } from "lucide-react";

const DataNarratives = () => {
  const narratives = [
    {
      headline: "Wayne Tech Revolutionizes Gotham: Crime Plummets 72% in Historic Security Transformation",
      subheading: "Bristol District Achieves Zero Crime Rate as AI-Powered Surveillance Network Delivers Unprecedented Results",
      category: "Security",
      impact: "Very High",
      date: "December 2024",
      icon: Shield,
      color: "blue",
      story: "In a remarkable achievement that has redefined urban safety, Wayne Enterprises' advanced security technology has reduced Gotham City's crime rate by an unprecedented 72% compared to 2023. The crown jewel of this transformation is Bristol District, which recorded zero security incidents in June 2024 - the first district in Gotham's history to achieve this milestone.",
      keyStats: [
        { label: "Total Crime Reduction", value: "72%", change: "vs 2023" },
        { label: "Districts at 95%+ Safety", value: "4/6", change: "Previously 0/6" },
        { label: "Average Response Time", value: "1.8min", change: "65% faster" },
        { label: "Wayne Tech Deployments", value: "1,340", change: "+180%" }
      ],
      analysis: "The success stems from Wayne Enterprises' comprehensive approach combining AI-powered prediction systems, strategic technology deployment, and community engagement. Each Wayne Tech unit deployed correlates with approximately 1.0 fewer monthly incidents, with deployment effectiveness varying by district demographics and infrastructure.",
      implications: "This transformation positions Gotham as a model for smart city security worldwide. The technology's success has attracted interest from 15 major cities globally, representing a potential $12B market opportunity for Wayne Enterprises' security division.",
      chartData: [
        { month: "Jan 2024", incidents: 248, deployments: 952, safety: 7.1 },
        { month: "Feb 2024", incidents: 235, deployments: 1018, safety: 7.4 },
        { month: "Mar 2024", incidents: 214, deployments: 1089, safety: 7.8 },
        { month: "Apr 2024", incidents: 189, deployments: 1156, safety: 8.2 },
        { month: "May 2024", incidents: 159, deployments: 1223, safety: 8.7 },
        { month: "Jun 2024", incidents: 123, deployments: 1290, safety: 9.1 }
      ]
    },
    {
      headline: "Biotech Breakthrough: Wayne's Neural Interface Technology Enters Commercial Phase",
      subheading: "$50 Billion Market Opportunity as Revolutionary Brain-Computer Interface Approaches Mass Production",
      category: "Innovation",
      impact: "Very High", 
      date: "November 2024",
      icon: Beaker,
      color: "purple",
      story: "Wayne Biotech's neural interface technology has achieved a critical milestone with the completion of its commercial prototype, setting the stage for what analysts predict could be the most significant technological breakthrough since the smartphone. The project, which has generated 12 patent applications, is on track for Q1 2025 market entry.",
      keyStats: [
        { label: "Market Size Projection", value: "$50B+", change: "by 2026" },
        { label: "Patent Applications", value: "12", change: "6 approved" },
        { label: "Timeline Adherence", value: "78.9%", change: "Above average" },
        { label: "Investment to Date", value: "$146M", change: "ROI: 2,400%" }
      ],
      analysis: "The technology represents a convergence of Wayne's expertise in bioengineering, AI, and materials science. Clinical trials have shown 94% success rates in motor function restoration and 89% effectiveness in cognitive enhancement applications. The project's strong R&D correlation (0.37) with revenue growth validates the strategic investment approach.",
      implications: "Commercial success could transform Wayne Biotech into the dominant force in neurotechnology, with applications spanning medical treatment, human augmentation, and defense systems. Early partnership discussions with major medical institutions indicate strong market demand.",
      chartData: [
        { quarter: "Q1 2024", investment: 25, patents: 2, milestones: 15, progress: 65 },
        { quarter: "Q2 2024", investment: 35, patents: 5, milestones: 22, progress: 72 },
        { quarter: "Q3 2024", investment: 42, patents: 8, milestones: 28, progress: 76 },
        { quarter: "Q4 2024", investment: 44, patents: 12, milestones: 35, progress: 79 }
      ]
    },
    {
      headline: "Aerospace Dominance: Wayne Captures 24.2% Market Share with Record Defense Contracts",
      subheading: "Next-Generation Fighter Jet Program Drives $2 Billion in New Orders, Reshaping Defense Industry Landscape",
      category: "Business",
      impact: "High",
      date: "October 2024",
      icon: TrendingUp,
      color: "green",
      story: "Wayne Aerospace has achieved a commanding position in the global defense market, securing 24.2% market share through a combination of technological innovation and strategic contract wins. The division's next-generation fighter jet program has attracted $2 billion in firm orders, with another $4.5 billion in options.",
      keyStats: [
        { label: "Market Share", value: "24.2%", change: "+2.9pp vs 2023" },
        { label: "Defense Contracts", value: "$2B", change: "85% increase" },
        { label: "Revenue Growth", value: "22.3%", change: "vs 2023" },
        { label: "Profit Margin", value: "28.55%", change: "Industry leading" }
      ],
      analysis: "Success is driven by Wayne's advanced materials science, propulsion technology, and integrated systems approach. The company's ability to deliver cutting-edge capability while maintaining cost competitiveness has positioned it as the preferred contractor for next-generation defense systems.",
      implications: "This market position establishes Wayne Aerospace as a strategic national asset and positions the company for continued growth as global defense spending increases. International expansion opportunities are emerging in allied nations.",
      chartData: [
        { year: "2020", revenue: 8.2, margin: 24.1, share: 18.5 },
        { year: "2021", revenue: 9.1, margin: 25.3, share: 19.2 },
        { year: "2022", revenue: 10.5, margin: 26.8, share: 20.8 },
        { year: "2023", revenue: 10.8, margin: 27.2, share: 21.3 },
        { year: "2024", revenue: 12.8, margin: 28.55, share: 24.2 }
      ]
    },
    {
      headline: "Talent Excellence: Wayne Achieves 97.6% Employee Retention in Competitive Market",
      subheading: "Industry-Leading Benefits and Culture Drive Unprecedented Workforce Stability Amid Tech Talent Wars",
      category: "Human Capital",
      impact: "High",
      date: "September 2024",
      icon: Users,
      color: "emerald",
      story: "In an era of unprecedented talent mobility, Wayne Enterprises has achieved remarkable workforce stability with a 97.6% employee retention rate, significantly outperforming industry averages. This achievement comes despite intense competition for skilled professionals across technology and engineering sectors.",
      keyStats: [
        { label: "Overall Retention", value: "97.6%", change: "+1.2pp vs 2023" },
        { label: "Employee Satisfaction", value: "9.3/10", change: "Industry high" },
        { label: "Internal Promotions", value: "128", change: "35% increase" },
        { label: "Training Investment", value: "183hrs/year", change: "Per employee" }
      ],
      analysis: "Wayne's success stems from comprehensive benefits, meaningful work opportunities, and investment in professional development. The correlation between employee satisfaction and performance ratings (R≈0.95) demonstrates the business value of human capital investment.",
      implications: "High retention rates provide competitive advantages through institutional knowledge preservation, reduced recruitment costs, and enhanced team cohesion. This stability is particularly valuable for complex R&D and security projects requiring long-term commitment.",
      chartData: [
        { level: "Entry", retention: 94.6, satisfaction: 8.8, benefits: 91.1 },
        { level: "Mid", retention: 99.0, satisfaction: 9.2, benefits: 93.1 },
        { level: "Senior", retention: 100.0, satisfaction: 9.5, benefits: 97.5 },
        { level: "Executive", retention: 100.0, satisfaction: 9.8, benefits: 100.0 }
      ]
    },
    {
      headline: "Supply Chain Alert: Disruption Risks Rise as Global Tensions Escalate",
      subheading: "Wayne Construction Faces 4-5 Monthly Disruptions; Strategic Supplier Diversification Underway",
      category: "Risk Management",
      impact: "Medium",
      date: "August 2024",
      icon: AlertTriangle,
      color: "orange",
      story: "Wayne Enterprises faces mounting supply chain challenges as global instability increases disruption frequency across key divisions. Wayne Construction has been particularly affected, experiencing 4-5 supply chain disruptions monthly, impacting quality scores and delivery timelines.",
      keyStats: [
        { label: "Monthly Disruptions", value: "4-5", change: "Construction Div" },
        { label: "Quality Impact", value: "-0.39%", change: "Per disruption" },
        { label: "Lead Time Increase", value: "+15%", change: "Critical materials" },
        { label: "Vendor Diversification", value: "65%", change: "Target: 80%" }
      ],
      analysis: "Analysis reveals strong correlation between supply disruptions and quality degradation (R≈-0.77). Wayne's predictive models show each disruption reduces quality scores by approximately 0.39%, with cumulative effects on customer satisfaction and profitability.",
      implications: "Supply chain resilience is becoming a competitive differentiator. Wayne's ongoing diversification strategy and alternative sourcing initiatives aim to reduce single-source dependencies and geographic concentration risks.",
      chartData: [
        { month: "Jan", disruptions: 3, quality: 91.5, leadTime: 26 },
        { month: "Feb", disruptions: 2, quality: 92.1, leadTime: 24 },
        { month: "Mar", disruptions: 4, quality: 90.8, leadTime: 28 },
        { month: "Apr", disruptions: 3, quality: 91.7, leadTime: 26 },
        { month: "May", disruptions: 2, quality: 92.3, leadTime: 23 },
        { month: "Jun", disruptions: 5, quality: 90.1, leadTime: 31 }
      ]
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Very High": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "High": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const chartConfig = {
    incidents: { label: "Incidents", color: "#ef4444" },
    deployments: { label: "Deployments", color: "#3b82f6" },
    safety: { label: "Safety Score", color: "#10b981" },
    investment: { label: "Investment ($M)", color: "#8b5cf6" },
    patents: { label: "Patents", color: "#f59e0b" },
    revenue: { label: "Revenue ($B)", color: "#10b981" },
    margin: { label: "Margin (%)", color: "#3b82f6" },
    retention: { label: "Retention (%)", color: "#10b981" },
    satisfaction: { label: "Satisfaction", color: "#8b5cf6" },
    disruptions: { label: "Disruptions", color: "#ef4444" },
    quality: { label: "Quality (%)", color: "#10b981" }
  };

  const renderChart = (index: number, chartData: any[]) => {
    switch (index) {
      case 0:
        return (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="incidents" stroke="var(--color-incidents)" strokeWidth={2} />
            <Line type="monotone" dataKey="safety" stroke="var(--color-safety)" strokeWidth={2} />
          </LineChart>
        );
      case 1:
        return (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="investment" fill="var(--color-investment)" />
            <Bar dataKey="patents" fill="var(--color-patents)" />
          </BarChart>
        );
      case 2:
        return (
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="revenue" stackId="1" stroke="var(--color-revenue)" fill="var(--color-revenue)" />
            <Area type="monotone" dataKey="margin" stackId="2" stroke="var(--color-margin)" fill="var(--color-margin)" />
          </AreaChart>
        );
      case 3:
        return (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="level" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="retention" fill="var(--color-retention)" />
            <Bar dataKey="satisfaction" fill="var(--color-satisfaction)" />
          </BarChart>
        );
      case 4:
        return (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="disruptions" stroke="var(--color-disruptions)" strokeWidth={2} />
            <Line type="monotone" dataKey="quality" stroke="var(--color-quality)" strokeWidth={2} />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/50 border-slate-600">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Data Narratives • Strategic Insights</CardTitle>
          <CardDescription className="text-slate-300 text-lg">
            In-depth analysis of key developments shaping Wayne Enterprises' future
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Narrative Stories */}
      {narratives.map((narrative, index) => (
        <Card key={index} className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <narrative.icon className={`w-6 h-6 text-${narrative.color}-400`} />
                <div>
                  <Badge variant="outline" className="mb-2">
                    {narrative.category}
                  </Badge>
                  <p className="text-sm text-slate-400">{narrative.date}</p>
                </div>
              </div>
              <Badge className={getImpactColor(narrative.impact)} variant="outline">
                {narrative.impact} Impact
              </Badge>
            </div>
            
            <CardTitle className="text-xl text-white leading-tight mb-2">
              {narrative.headline}
            </CardTitle>
            <CardDescription className="text-slate-300 text-base font-medium">
              {narrative.subheading}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Story Content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-200 leading-relaxed text-base">
                {narrative.story}
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {narrative.keyStats.map((stat, statIndex) => (
                <div key={statIndex} className="bg-slate-700/30 rounded-lg p-3 text-center">
                  <div className={`text-lg font-bold text-${narrative.color}-400`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-slate-700/20 rounded-lg p-4">
              <ChartContainer config={chartConfig} className="h-64">
                {renderChart(index, narrative.chartData)}
              </ChartContainer>
            </div>

            {/* Analysis */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Analysis</h4>
                <p className="text-slate-300 leading-relaxed">{narrative.analysis}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Strategic Implications</h4>
                <p className="text-slate-300 leading-relaxed">{narrative.implications}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DataNarratives;
