import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

const ExecutiveSummary = () => {
  const headlines = [
    {
      title: "Wayne Aerospace Soars: 24.2% Market Share Achieved",
      description: "Q4 2024 marks record quarter with $1.95B revenue, driven by next-gen fighter jet contracts and space technology initiatives.",
      trend: "up",
      impact: "high"
    },
    {
      title: "Gotham Security Revolution: 72% Crime Reduction Achieved",
      description: "Wayne Tech deployments show unprecedented success. Security incidents reduced from 12,847 to 3,597, with Bristol district leading at 92.3% prevention rate.",
      trend: "up",
      impact: "high"
    },
    {
      title: "R&D Portfolio: $2.4B Investment in 75 Active Projects",
      description: "Strategic focus on high-potential projects including Neural Interface Technology (30%), Quantum Computing (25%), and Fusion Power (20%).",
      trend: "up",
      impact: "high"
    },
    {
      title: "Employee Excellence: 97.6% Retention Rate",
      description: "Employee satisfaction reaches 9.3/10, with industry-leading retention rates and comprehensive benefits program.",
      trend: "up",
      impact: "high"
    }
  ];

  const predictions = [
    {
      title: "2025 Revenue Projection: $12.5B (+52%)",
      confidence: "High",
      factors: ["Aerospace contracts scaling", "Biotech commercialization", "Construction megaprojects"]
    },
    {
      title: "Gotham Security: City-wide Safety Score 9.5/10",
      confidence: "Medium",
      factors: ["The Narrows improvement initiative", "AI-powered prediction systems", "Community engagement programs"]
    },
    {
      title: "R&D Breakthrough Timeline: Q3 2025",
      confidence: "Medium",
      factors: ["Neural interface commercialization", "Quantum computing applications", "Fusion power pilot program"]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Executive Headlines */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl text-white">Executive Headlines</CardTitle>
          <CardDescription className="text-slate-300">
            Key developments shaping Wayne Enterprises' future
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {headlines.map((headline, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-3">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-white text-lg leading-tight">
                  {headline.title}
                </h3>
                <div className="flex items-center gap-2 ml-4">
                  {headline.trend === "up" ? (
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  )}
                  <Badge variant={headline.impact === "high" ? "default" : "secondary"}>
                    {headline.impact} impact
                  </Badge>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {headline.description}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Strategic Predictions */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl text-white">2025 Strategic Predictions</CardTitle>
          <CardDescription className="text-slate-300">
            Data-driven forecasts based on current performance trends
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {predictions.map((prediction, index) => (
            <div key={index} className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">
                  {prediction.title}
                </h3>
                <Badge variant={prediction.confidence === "High" ? "default" : "destructive"} 
                  className={prediction.confidence === "Medium" ? "bg-yellow-600 hover:bg-yellow-700" : 
                    prediction.confidence === "High" ? "bg-green-600 hover:bg-green-700" : ""}>
                  {prediction.confidence} Confidence
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-slate-400 mb-2">Key factors:</p>
                {prediction.factors.map((factor, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300 text-sm">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExecutiveSummary;
