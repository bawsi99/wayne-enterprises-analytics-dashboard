
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FinancialOverview from "@/components/dashboard/FinancialOverview";
import SecurityAnalytics from "@/components/dashboard/SecurityAnalytics";
import RDPortfolio from "@/components/dashboard/RDPortfolio";
import SupplyChainMetrics from "@/components/dashboard/SupplyChainMetrics";
import HRAnalytics from "@/components/dashboard/HRAnalytics";
import ExecutiveSummary from "@/components/dashboard/ExecutiveSummary";
import EnvironmentalMetrics from "@/components/dashboard/EnvironmentalMetrics";
import StrategicInsights from "@/components/dashboard/StrategicInsights";
import CEOReport from "@/components/dashboard/CEOReport";
import PredictiveAnalytics from "@/components/dashboard/PredictiveAnalytics";
import DataNarratives from "@/components/dashboard/DataNarratives";
import { TrendingUp, Shield, Beaker, Truck, Users, Target, FileText, Brain, Newspaper } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Wayne Enterprises Analytics
          </h1>
          <p className="text-slate-300 text-lg">
            Strategic Intelligence Dashboard • CEO Report 2024
          </p>
          <div className="flex justify-between w-full mt-4">
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">
              Revenue: $54.7B (+25.8%)
            </Badge>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
              Crime Reduction: 72%
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
              R&D Investment: $2.4B
            </Badge>
            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">
              Employee Retention: 97.6%
            </Badge>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">$54.7B</div>
              <p className="text-xs text-slate-400">2024 enterprise total</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Profit Margin</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">24.61%</div>
              <p className="text-xs text-slate-400">2024 overall margin</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">$13.5B</div>
              <p className="text-xs text-slate-400">2024 after costs</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Employees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">43,500</div>
              <p className="text-xs text-slate-400">2024 enterprise headcount</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="ceo-report" className="space-y-6">
          <TabsList className="grid w-full grid-cols-8 bg-slate-800/50">
            <TabsTrigger value="ceo-report" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              CEO Report
            </TabsTrigger>
            <TabsTrigger value="narratives" className="flex items-center gap-2">
              <Newspaper className="w-4 h-4" />
              Narratives
            </TabsTrigger>
            <TabsTrigger value="predictions" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Predictions
            </TabsTrigger>
            <TabsTrigger value="executive" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Executive
            </TabsTrigger>
            <TabsTrigger value="financial" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Financial
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="research" className="flex items-center gap-2">
              <Beaker className="w-4 h-4" />
              R&D
            </TabsTrigger>
            <TabsTrigger value="hr" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              HR Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ceo-report">
            <CEOReport />
          </TabsContent>

          <TabsContent value="narratives">
            <DataNarratives />
          </TabsContent>

          <TabsContent value="predictions">
            <PredictiveAnalytics />
          </TabsContent>

          <TabsContent value="executive">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-200">Executive Summary</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-300">Revenue Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-400">25.8%</div>
                    <p className="text-xs text-slate-400">2024 vs 2023</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-300">Crime Reduction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-400">72%</div>
                    <p className="text-xs text-slate-400">2024 vs 2023</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-300">R&D Investment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-400">$2.4B</div>
                    <p className="text-xs text-slate-400">2024 Total</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-300">Employee Retention</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-400">97.6%</div>
                    <p className="text-xs text-slate-400">2024 Rate</p>
                  </CardContent>
                </Card>
              </div>

              <StrategicInsights />
            </div>
          </TabsContent>
          
          <TabsContent value="financial">
            <FinancialOverview />
          </TabsContent>
          
          <TabsContent value="security">
            <SecurityAnalytics />
          </TabsContent>
          
          <TabsContent value="research">
            <div className="space-y-4">
              <RDPortfolio />
              <EnvironmentalMetrics />
            </div>
          </TabsContent>
          
          <TabsContent value="hr">
            <HRAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
