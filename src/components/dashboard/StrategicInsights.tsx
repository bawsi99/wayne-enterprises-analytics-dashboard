import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Users, Truck, Beaker, Target } from "lucide-react";

const StrategicInsights = () => {
  const correlations = [
    {
      title: "R&D Investment Impact",
      description: "Strong correlation between R&D spending and revenue growth",
      metrics: [
        { label: "Aerospace", value: "+24.2%", trend: "positive" },
        { label: "Biotech", value: "+27.0%", trend: "positive" },
        { label: "Construction", value: "+21.0%", trend: "positive" }
      ],
      icon: Beaker,
      color: "purple"
    },
    {
      title: "Security Performance",
      description: "Crime reduction effectiveness by district",
      metrics: [
        { label: "Bristol", value: "85%", trend: "positive" },
        { label: "Park Row", value: "78%", trend: "positive" },
        { label: "The Narrows", value: "65%", trend: "neutral" }
      ],
      icon: Shield,
      color: "blue"
    },
    {
      title: "Employee Engagement",
      description: "Satisfaction vs. Performance correlation",
      metrics: [
        { label: "Senior Level", value: "6.2/10", trend: "positive" },
        { label: "Mid Level", value: "5.8/10", trend: "positive" },
        { label: "Entry Level", value: "5.5/10", trend: "neutral" }
      ],
      icon: Users,
      color: "yellow"
    },
    {
      title: "Supply Chain Efficiency",
      description: "Production quality vs. sustainability",
      metrics: [
        { label: "Gotham Main", value: "94%", trend: "positive" },
        { label: "Metropolis North", value: "92%", trend: "positive" },
        { label: "Average", value: "88%", trend: "positive" }
      ],
      icon: Truck,
      color: "green"
    }
  ];

  const predictiveInsights = [
    {
      title: "Security Forecasting",
      description: "Based on deployment patterns and historical data",
      confidence: "High",
      impact: "Critical",
      icon: Shield
    },
    {
      title: "Project Success Prediction",
      description: "Using budget adherence and team performance metrics",
      confidence: "Medium",
      impact: "High",
      icon: Beaker
    },
    {
      title: "Employee Retention Risk",
      description: "Analyzing satisfaction and performance correlations",
      confidence: "High",
      impact: "Medium",
      icon: Users
    },
    {
      title: "Supply Chain Resilience",
      description: "Modeling disruption impacts and recovery patterns",
      confidence: "Medium",
      impact: "High",
      icon: Truck
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Cross-Dataset Correlations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {correlations.map((correlation, index) => (
              <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <correlation.icon className={`w-5 h-5 text-${correlation.color}-400`} />
                  <h3 className="font-medium text-slate-200">{correlation.title}</h3>
                </div>
                <p className="text-sm text-slate-400 mb-3">{correlation.description}</p>
                <div className="grid grid-cols-3 gap-2">
                  {correlation.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center">
                      <div className={`text-sm font-medium text-${correlation.color}-400`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Predictive Analytics Potential</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {predictiveInsights.map((insight, index) => (
              <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <insight.icon className="w-5 h-5 text-slate-400" />
                    <h3 className="font-medium text-slate-200">{insight.title}</h3>
                  </div>
                  <Badge variant="secondary" className={`bg-${insight.confidence === 'High' ? 'green' : 'yellow'}-500/20 text-${insight.confidence === 'High' ? 'green' : 'yellow'}-400`}>
                    {insight.confidence} Confidence
                  </Badge>
                </div>
                <p className="text-sm text-slate-400">{insight.description}</p>
                <div className="mt-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                    {insight.impact} Impact
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Strategic Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <h3 className="font-medium text-slate-200 mb-2">Resource Optimization</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Increase R&D focus in high-growth divisions</li>
                <li>• Reallocate security resources to The Narrows</li>
                <li>• Enhance training programs for entry-level staff</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <h3 className="font-medium text-slate-200 mb-2">Risk Mitigation</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Implement predictive security measures</li>
                <li>• Strengthen supply chain redundancy</li>
                <li>• Develop retention strategies for key talent</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <h3 className="font-medium text-slate-200 mb-2">Innovation Pipeline</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Prioritize neural interface development</li>
                <li>• Accelerate quantum computing projects</li>
                <li>• Scale fusion power research</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrategicInsights; 