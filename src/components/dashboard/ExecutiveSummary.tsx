import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

const ExecutiveSummary = () => {
  // Only headlines with validated/corrected data
  const headlines = [
    {
      title: "Wayne Aerospace Soars: 25.8% Revenue Growth Validated",
      description: "Record 2024 revenue; actual growth 25.8% (+7.6 pts above earlier report). Market share validated at 24.2%.",
      trend: "up",
      impact: "high"
    },
    {
      title: "Crime Prevention: Historic 72% Drop in Gotham",
      description: "Major correction: crime reduction now 72% after technology/infrastructure ramp-up (validated).",
      trend: "up",
      impact: "high"
    },
    {
      title: "R&D Pipeline Investment Revised to $2.4B (+$300M)",
      description: "Innovation spend validated at $2.4B. 75 active projects; 318 patent applications (corrected, now shown).",
      trend: "up",
      impact: "medium"
    },
    {
      title: "Employee Experience: Retention Hits 97.6%, Satisfaction 9.3/10",
      description: "Validated: employee satisfaction at 9.3/10 (+0.6 pts), retention 97.6%. Industry best.",
      trend: "up",
      impact: "medium"
    },
    {
      title: "Carbon Footprint: 43% Reduction Achieved",
      description: "43% year-over-year reduction in carbon emissions exceeds industry standards.",
      trend: "up",
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
      title: "Crime Reduction Plateau Projected at ~75%",
      confidence: "Medium",
      factors: ["Tech deployments", "AI predictive policing", "Urban renewal projects"]
    },
    {
      title: "R&D Patent Applications Expected to Exceed 350",
      confidence: "Medium",
      factors: ["Quantum/fusion milestones", "Accelerated filings", "IP strategy"]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Executive Headlines - all validated/corrected */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl text-white">Executive Headlines</CardTitle>
          <CardDescription className="text-slate-300">
            Key validated developments shaping Wayne Enterprises' future
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
      {/* Strategic Predictions - fix medium confidence color */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl text-white">2025 Strategic Predictions</CardTitle>
          <CardDescription className="text-slate-300">
            Data-driven forecasts based on validated trends and updated metrics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {predictions.map((prediction, index) => (
            <div key={index} className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">
                  {prediction.title}
                </h3>
                <Badge
                  variant={prediction.confidence === "High" ? "default" : "secondary"}
                  className={prediction.confidence === "Medium" ? "bg-yellow-600 text-white hover:bg-yellow-700 border-yellow-700" : prediction.confidence === "High" ? "" : ""}
                >
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
      {/* Risk Assessment (kept as is - since it relates to validated initiatives) */}
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
