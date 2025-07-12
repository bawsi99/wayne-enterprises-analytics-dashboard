"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { XAxis, YAxis, CartesianGrid, AreaChart, Area, LineChart, Line } from "recharts";
import { Brain } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const PredictiveAnalytics = () => {
  // 2025 Predictions
  const predictions2025 = [
    {
      category: "Financial",
      prediction: "Revenue will reach $68.5B (+25.2%)",
      confidence: 94,
      model: "Multi-variate Regression",
      factors: ["Historical growth", "Market expansion", "New products"],
      timeline: "Q4 2025",
      impact: "Very High"
    },
    {
      category: "Security", 
      prediction: "Gotham crime rate will drop to <100 incidents/month",
      confidence: 87,
      model: "Linear Regression per District",
      factors: ["Wayne Tech scaling", "Community engagement", "Predictive systems"],
      timeline: "Q2 2025",
      impact: "High"
    },
    {
      category: "Innovation",
      prediction: "Neural Interface will capture 15% of $50B market",
      confidence: 76,
      model: "Market Penetration Model",
      factors: ["Clinical trial results", "Regulatory approval", "Competition"],
      timeline: "Q3 2025",
      impact: "Very High"
    },
    {
      category: "Workforce",
      prediction: "Employee retention will reach 98.5%",
      confidence: 91,
      model: "HR Analytics Model",
      factors: ["Satisfaction trends", "Market conditions", "Benefits optimization"],
      timeline: "Q4 2025",
      impact: "Medium"
    }
  ];

  // Predictive Models Performance
  const modelPerformance = [
    { 
      model: "Security Incident Forecasting",
      accuracy: 98.7,
      rmse: 1.2,
      r_squared: 0.97,
      status: "Production",
      lastUpdated: "Daily"
    },
    {
      model: "R&D Success Prediction", 
      accuracy: 76.3,
      rmse: 0.15,
      r_squared: 0.68,
      status: "Production",
      lastUpdated: "Weekly"
    },
    {
      model: "Revenue Forecasting",
      accuracy: 94.2,
      rmse: 0.08,
      r_squared: 0.94,
      status: "Production", 
      lastUpdated: "Monthly"
    },
    {
      model: "Supply Chain Disruption",
      accuracy: 82.1,
      rmse: 0.23,
      r_squared: 0.78,
      status: "Testing",
      lastUpdated: "Weekly"
    }
  ];

  // Scenario Analysis
  const scenarios = [
    {
      name: "Optimistic Scenario",
      probability: 25,
      description: "All initiatives exceed expectations",
      outcomes: {
        revenue: 72.3,
        profit: 18.8,
        marketShare: 28.5,
        riskLevel: "Low"
      }
    },
    {
      name: "Most Likely Scenario", 
      probability: 50,
      description: "Current trends continue with minor variations",
      outcomes: {
        revenue: 68.5,
        profit: 16.9,
        marketShare: 26.2,
        riskLevel: "Medium"
      }
    },
    {
      name: "Conservative Scenario",
      probability: 20,
      description: "Market challenges slow growth",
      outcomes: {
        revenue: 62.1,
        profit: 13.8,
        marketShare: 23.7,
        riskLevel: "Medium"
      }
    },
    {
      name: "Stress Scenario",
      probability: 5,
      description: "Major disruptions affect operations",
      outcomes: {
        revenue: 48.9,
        profit: 8.2,
        marketShare: 19.4,
        riskLevel: "High"
      }
    }
  ];

  // Market Opportunity Predictions
  const marketOpportunities = [
    {
      opportunity: "Global Security Technology Market",
      currentSize: 12.4,
      projectedSize: 31.7,
      waynePotential: 8.2,
      timeframe: "2025-2027",
      confidence: "High"
    },
    {
      opportunity: "Neural Interface Medical Market",
      currentSize: 2.1,
      projectedSize: 52.3,
      waynePotential: 15.7,
      timeframe: "2025-2028",
      confidence: "Medium"
    },
    {
      opportunity: "Quantum Computing Applications",
      currentSize: 0.8,
      projectedSize: 18.6,
      waynePotential: 5.2,
      timeframe: "2026-2030",
      confidence: "Medium"
    },
    {
      opportunity: "Smart City Infrastructure",
      currentSize: 8.9,
      projectedSize: 47.1,
      waynePotential: 12.3,
      timeframe: "2025-2029", 
      confidence: "High"
    }
  ];

  // Future Revenue Projections
  const revenueProjections = [
    { year: "2024", actual: 54.7, predicted: null, lower: null, upper: null },
    { year: "2025", actual: null, predicted: 68.5, lower: 62.1, upper: 72.3 },
    { year: "2026", actual: null, predicted: 84.2, lower: 76.8, upper: 91.1 },
    { year: "2027", actual: null, predicted: 102.7, lower: 93.4, upper: 114.8 },
    { year: "2028", actual: null, predicted: 124.1, lower: 110.2, upper: 142.6 }
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "text-green-400";
    if (confidence >= 75) return "text-blue-400";
    if (confidence >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Very High": return "bg-red-500/20 text-red-400";
      case "High": return "bg-orange-500/20 text-orange-400";
      case "Medium": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const chartConfig = {
    actual: { label: "Actual", color: "#10b981" },
    predicted: { label: "Predicted", color: "#3b82f6" },
    lower: { label: "Lower Bound", color: "#8b5cf6" },
    upper: { label: "Upper Bound", color: "#f59e0b" },
    accuracy: { label: "Accuracy (%)", color: "#10b981" },
    confidence: { label: "Confidence", color: "#3b82f6" }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/50 border-slate-600">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-blue-400" />
            Predictive Analytics • Future Outlook
          </CardTitle>
          <CardDescription className="text-slate-300 text-lg">
            AI-powered forecasting and scenario analysis for strategic planning
          </CardDescription>
        </CardHeader>
      </Card>

      {/* 2025 Key Predictions */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">2025 Strategic Predictions</CardTitle>
          <CardDescription className="text-slate-300">
            High-confidence forecasts based on advanced analytics models
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {predictions2025.map((prediction, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-slate-300">
                    {prediction.category}
                  </Badge>
                  <Badge className={getImpactColor(prediction.impact)}>
                    {prediction.impact}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-white mb-2">{prediction.prediction}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Confidence</span>
                    <span className={`font-bold ${getConfidenceColor(prediction.confidence)}`}>
                      {prediction.confidence}%
                    </span>
                  </div>
                  <Progress value={prediction.confidence} className="h-2" />
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-slate-400">Model:</span>
                      <p className="text-slate-200">{prediction.model}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Timeline:</span>
                      <p className="text-slate-200">{prediction.timeline}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-slate-400 text-sm">Key Factors:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {prediction.factors.map((factor, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Projections Chart */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Revenue Projections 2024-2028</CardTitle>
          <CardDescription className="text-slate-300">
            Multi-scenario revenue forecasting with confidence intervals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <AreaChart data={revenueProjections}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="upper" stackId="1" stroke="var(--color-upper)" fill="var(--color-upper)" fillOpacity={0.2} />
              <Area type="monotone" dataKey="lower" stackId="1" stroke="var(--color-lower)" fill="var(--color-lower)" fillOpacity={0.2} />
              <Line type="monotone" dataKey="actual" stroke="var(--color-actual)" strokeWidth={3} />
              <Line type="monotone" dataKey="predicted" stroke="var(--color-predicted)" strokeWidth={3} strokeDasharray="5 5" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Model Performance Dashboard */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Predictive Model Performance</CardTitle>
          <CardDescription className="text-slate-300">
            Real-time accuracy metrics for deployed AI models
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {modelPerformance.map((model, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-1">{model.model}</h3>
                  <div className="flex gap-6 text-sm">
                    <span className="text-slate-400">
                      Accuracy: <span className="text-green-400 font-medium">{model.accuracy}%</span>
                    </span>
                    <span className="text-slate-400">
                      R²: <span className="text-blue-400 font-medium">{model.r_squared}</span>
                    </span>
                    <span className="text-slate-400">
                      RMSE: <span className="text-purple-400 font-medium">{model.rmse}</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={model.status === "Production" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}>
                    {model.status}
                  </Badge>
                  <p className="text-xs text-slate-400 mt-1">Updated: {model.lastUpdated}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scenario Analysis */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">2025 Scenario Analysis</CardTitle>
          <CardDescription className="text-slate-300">
            Monte Carlo simulation results for strategic planning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-white">{scenario.name}</h3>
                  <Badge variant="secondary">{scenario.probability}%</Badge>
                </div>
                
                <p className="text-sm text-slate-300 mb-4">{scenario.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Revenue:</span>
                    <span className="text-white font-medium">${scenario.outcomes.revenue}B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Profit:</span>
                    <span className="text-white font-medium">${scenario.outcomes.profit}B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Market Share:</span>
                    <span className="text-white font-medium">{scenario.outcomes.marketShare}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Risk:</span>
                    <span className={`font-medium ${
                      scenario.outcomes.riskLevel === "Low" ? "text-green-400" :
                      scenario.outcomes.riskLevel === "Medium" ? "text-yellow-400" : "text-red-400"
                    }`}>
                      {scenario.outcomes.riskLevel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Opportunities */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Emerging Market Opportunities</CardTitle>
          <CardDescription className="text-slate-300">
                                    Addressable market analysis and Wayne&apos;s competitive positioning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketOpportunities.map((opportunity, index) => (
              <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-white">{opportunity.opportunity}</h3>
                  <Badge variant="outline" className={
                    opportunity.confidence === "High" ? "text-green-400 border-green-400" : "text-yellow-400 border-yellow-400"
                  }>
                    {opportunity.confidence} Confidence
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-slate-400">Current Size:</span>
                    <p className="font-medium text-white">${opportunity.currentSize}B</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Projected Size:</span>
                    <p className="font-medium text-green-400">${opportunity.projectedSize}B</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Wayne Potential:</span>
                    <p className="font-medium text-blue-400">${opportunity.waynePotential}B</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Timeframe:</span>
                    <p className="font-medium text-white">{opportunity.timeframe}</p>
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
          <CardTitle className="text-white">AI-Generated Strategic Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">High-Confidence Opportunity</h3>
            <p className="text-slate-300">
              Models predict 94% probability of reaching $68.5B revenue in 2025. Accelerate Neural Interface 
              and Security Technology commercialization to capture emerging markets.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">Risk Mitigation Priority</h3>
            <p className="text-slate-300">
              Supply chain models show increasing disruption probability. Implement advanced buffering 
              strategies and supplier diversification by Q2 2025.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">Innovation Investment</h3>
            <p className="text-slate-300">
              R&D correlation analysis suggests increasing Biotech and Applied Sciences funding by 25% 
              for optimal ROI. Quantum Computing shows highest future potential.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveAnalytics;
