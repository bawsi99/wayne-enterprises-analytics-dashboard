
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

const ExecutiveSummary = () => {
  const headlines = [
    {
      title: "Wayne Aerospace Soars: 24% Revenue Growth Leads Corporate Performance",
      description: "Q4 2024 marks record quarter with $1.95B revenue, driven by next-gen fighter jet contracts and space technology initiatives. Market share increased to 24.2%.",
      trend: "up",
      impact: "high"
    },
    {
      title: "Gotham Security Revolution: Crime Prevention Effectiveness Reaches 100% in Bristol",
      description: "Wayne Tech deployments show unprecedented success. Security incidents dropped 87% in Bristol district, with zero incidents recorded in June 2024.",
      trend: "up",
      impact: "high"
    },
    {
      title: "R&D Pipeline Alert: $2.1B Invested, 23 High-Potential Projects at Risk",
      description: "While innovation spending increased 18%, several theoretical physics projects face delays. Anti-gravity and dimensional portal research showing concerning timeline adherence.",
      trend: "down",
      impact: "medium"
    },
    {
      title: "The Narrows Challenge: Security Gap Persists Despite $89M Investment",
      description: "The Narrows district remains problematic with 60+ monthly incidents. Response times improved but still lag behind other districts significantly.",
      trend: "down",
      impact: "medium"
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
                <Badge variant={prediction.confidence === "High" ? "default" : "destructive"} className={prediction.confidence === "Medium" ? "bg-yellow-600 hover:bg-yellow-700" : ""}>
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

      {/* Risk Assessment */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl text-white">Strategic Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="font-semibold text-red-300">High Risk</span>
              </div>
              <p className="text-sm text-slate-300">
                R&D project delays may impact 2026 commercialization timeline
              </p>
            </div>
            
            <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-yellow-300">Medium Risk</span>
              </div>
              <p className="text-sm text-slate-300">
                The Narrows security situation requires continued investment
              </p>
            </div>
            
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-green-300">Low Risk</span>
              </div>
              <p className="text-sm text-slate-300">
                Financial performance and employee satisfaction remain strong
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExecutiveSummary;
