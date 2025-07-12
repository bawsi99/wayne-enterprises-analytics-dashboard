
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Truck, Beaker, Target, AlertTriangle, Brain } from "lucide-react";

const StrategicInsights = () => {
  const correlations = [
    {
      title: "R&D Investment Impact",
      description: "Correlation between R&D spending and next-quarter revenue growth",
      metrics: [
        { label: "Wayne Biotech", value: "R≈0.37", trend: "positive", detail: "Moderate positive correlation" },
        { label: "Applied Sciences", value: "R≈0.30", trend: "positive", detail: "Moderate positive correlation" },
        { label: "Aerospace", value: "R≈0.07", trend: "neutral", detail: "Little correlation" },
        { label: "Construction", value: "R≈-0.02", trend: "neutral", detail: "No correlation" }
      ],
      icon: Beaker,
      color: "purple",
      insight: "Higher R&D budgets align with faster growth in Biotech/Applied divisions"
    },
    {
      title: "Security Performance vs Community Engagement",
      description: "Community engagement events strongly linked to safety outcomes",
      metrics: [
        { label: "Crime Prevention", value: "R≈0.90", trend: "positive", detail: "Very strong correlation" },
        { label: "Public Safety", value: "R≈0.92", trend: "positive", detail: "Very strong correlation" },
        { label: "Security Incidents", value: "R≈-0.91", trend: "positive", detail: "Strong negative correlation" }
      ],
      icon: Shield,
      color: "blue",
      insight: "Downtown model: Incidents ≈ 168 – 0.97×Wayne_Tech_Deployments (R²≈0.98)"
    },
    {
      title: "Employee Satisfaction vs Productivity",
      description: "Satisfaction strongly correlates with performance metrics",
      metrics: [
        { label: "Performance Rating", value: "R≈0.95", trend: "positive", detail: "Very strong correlation" },
        { label: "Retention Rate", value: "R≈0.91", trend: "positive", detail: "Very strong correlation" },
        { label: "Benefits Utilization", value: "R≈0.97", trend: "positive", detail: "Nearly perfect correlation" }
      ],
      icon: Users,
      color: "green",
      insight: "More satisfied teams perform and stay at significantly higher rates"
    },
    {
      title: "Supply Chain Efficiency vs Quality",
      description: "Quality perfectly predicted by efficiency metrics (R²≈0.992)",
      metrics: [
        { label: "Disruptions Impact", value: "R≈-0.77", trend: "negative", detail: "Strong negative correlation" },
        { label: "Lead Time Impact", value: "R≈-0.94", trend: "negative", detail: "Very strong negative" },
        { label: "Inventory Turnover", value: "R≈+0.99", trend: "positive", detail: "Nearly perfect correlation" }
      ],
      icon: Truck,
      color: "orange",
      insight: "Quality ≈ 1.68×(Inventory_Turnover) – 0.39×(Disruptions)"
    }
  ];

  const predictiveModels = [
    {
      title: "Security Incident Forecasting",
      description: "Linear regression per district predicting monthly incidents",
      accuracy: "R²≈0.97-0.99",
      rmse: "1-2 incidents",
      insight: "Each Wayne Tech deployment reduces incidents by ~1.0",
      confidence: "Very High",
      icon: Shield,
      color: "blue"
    },
    {
      title: "R&D Project Success Prediction",
      description: "Logistic regression on commercialization potential",
      accuracy: "76% train accuracy",
      rmse: "F1≈0.85",
      insight: "Patents and budget adherence predict success",
      confidence: "Medium",
      icon: Beaker,
      color: "purple"
    },
    {
      title: "Employee Turnover Risk",
      description: "Identifies departments with retention risk <85%",
      accuracy: "100% train accuracy", 
      rmse: "F1≈0.85-0.90",
      insight: "Satisfaction and benefits are strong predictors",
      confidence: "High",
      icon: Users,
      color: "green"
    },
    {
      title: "Supply Chain Disruption Impact",
      description: "Multiple regression on quality score prediction",
      accuracy: "R²≈0.992",
      rmse: "High precision",
      insight: "Each disruption reduces quality by ~0.39%",
      confidence: "Very High",
      icon: Truck,
      color: "orange"
    }
  ];

  const strategicRecommendations = [
    {
      category: "Resource Allocation",
      priority: "High",
      recommendations: [
        "Shift incremental R&D budgets toward Biotech/Applied (higher ROI)",
        "Scrutinize Aerospace/Construction R&D efficiency",
        "Reinforce community engagement in high-crime districts",
        "Heavy Wayne Tech deployment in The Narrows (highest incidents)"
      ],
      icon: Target
    },
    {
      category: "Risk Mitigation",
      priority: "Critical",
      recommendations: [
        "Address Wayne Foundation losses (increasing quarterly)",
        "Star City resilience measures (4-5 disruptions/month)",
        "Supplier diversification for Construction materials",
        "Engagement programs for groups with satisfaction <7.5"
      ],
      icon: AlertTriangle
    },
    {
      category: "Innovation Pipeline",
      priority: "Medium",
      recommendations: [
        "Monitor lagging projects (Magnetic Levitation at 25% adherence)",
        "Support projects near completion (67 active projects)",
        "Focus on patent generation (projects with more patents succeed)",
        "Improve timeline adherence (current mean ~68%)"
      ],
      icon: Brain
    }
  ];

  const divisionBenchmarks = [
    { name: "Wayne Biotech", profitMargin: 29.18, revenuePerEmployee: 0.20, performance: "Top Performer" },
    { name: "Wayne Aerospace", profitMargin: 28.55, revenuePerEmployee: 0.18, performance: "Top Performer" },
    { name: "Applied Sciences", profitMargin: 26.36, revenuePerEmployee: 0.19, performance: "Strong" },
    { name: "Wayne Construction", profitMargin: 23.62, revenuePerEmployee: 0.17, performance: "Large Volume" },
    { name: "Wayne Foundation", profitMargin: -18.93, revenuePerEmployee: 0.25, performance: "Philanthropic" }
  ];

  return (
    <div className="space-y-6">
      {/* Cross-Dataset Correlations */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
                {correlation.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="text-center p-2 bg-slate-800/50 rounded">
                    <div className={`text-sm font-medium text-${correlation.color}-400`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-slate-400">{metric.label}</div>
                    <div className="text-xs text-slate-500">{metric.detail}</div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-300 italic bg-slate-800/30 p-2 rounded">
                {correlation.insight}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Predictive Analytics Models */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Predictive Analytics Models</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {predictiveModels.map((model, index) => (
            <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <model.icon className={`w-5 h-5 text-${model.color}-400`} />
                  <h3 className="font-medium text-slate-200">{model.title}</h3>
                </div>
                <Badge variant="secondary" className={`${
                  model.confidence === 'Very High' ? 'bg-green-500/20 text-green-400' :
                  model.confidence === 'High' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {model.confidence} Confidence
                </Badge>
              </div>
              <p className="text-sm text-slate-400 mb-3">{model.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <span className="text-xs text-slate-500">Accuracy:</span>
                  <p className="text-sm font-medium text-white">{model.accuracy}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-500">Error Rate:</span>
                  <p className="text-sm font-medium text-white">{model.rmse}</p>
                </div>
              </div>
              <div className="text-xs text-slate-300 italic bg-slate-800/30 p-2 rounded">
                Key Insight: {model.insight}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Division Benchmarking */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Division Performance Benchmarking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {divisionBenchmarks.map((division, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                <div>
                  <h3 className="font-medium text-slate-200">{division.name}</h3>
                  <p className="text-sm text-slate-400">{division.performance}</p>
                </div>
                <div className="flex gap-4 text-right">
                  <div>
                    <p className="text-xs text-slate-500">Profit Margin</p>
                    <p className={`font-semibold ${division.profitMargin > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {division.profitMargin.toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Revenue/Employee</p>
                    <p className="font-semibold text-white">${(division.revenuePerEmployee * 1000).toFixed(0)}K</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategic Recommendations */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Data-Driven Strategic Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {strategicRecommendations.map((category, index) => (
              <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <category.icon className="w-5 h-5 text-slate-400" />
                    <h3 className="font-medium text-slate-200">{category.category}</h3>
                  </div>
                  <Badge variant="secondary" className={
                    category.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    category.priority === 'High' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-blue-500/20 text-blue-400'
                  }>
                    {category.priority} Priority
                  </Badge>
                </div>
                <ul className="text-sm text-slate-300 space-y-2">
                  {category.recommendations.map((rec, rIndex) => (
                    <li key={rIndex} className="flex items-start gap-2">
                      <span className="text-slate-500 mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrategicInsights;
