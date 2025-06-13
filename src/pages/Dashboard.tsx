
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FinancialOverview from "@/components/dashboard/FinancialOverview";
import SecurityAnalytics from "@/components/dashboard/SecurityAnalytics";
import RDPortfolio from "@/components/dashboard/RDPortfolio";
import SupplyChainMetrics from "@/components/dashboard/SupplyChainMetrics";
import HRAnalytics from "@/components/dashboard/HRAnalytics";
import ExecutiveSummary from "@/components/dashboard/ExecutiveSummary";
import { TrendingUp, Shield, Beaker, Truck, Users, Target } from "lucide-react";

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
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">$8.2B</div>
              <p className="text-xs text-slate-400">+15.2% vs 2023</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Security Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">8.9/10</div>
              <p className="text-xs text-slate-400">+12% improvement</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">R&D Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">75</div>
              <p className="text-xs text-slate-400">23 high potential</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Employee Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">9.2/10</div>
              <p className="text-xs text-slate-400">Industry leading</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="executive" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-slate-800/50">
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
            <TabsTrigger value="supply" className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              Supply Chain
            </TabsTrigger>
            <TabsTrigger value="hr" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              HR Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="executive">
            <ExecutiveSummary />
          </TabsContent>
          
          <TabsContent value="financial">
            <FinancialOverview />
          </TabsContent>
          
          <TabsContent value="security">
            <SecurityAnalytics />
          </TabsContent>
          
          <TabsContent value="research">
            <RDPortfolio />
          </TabsContent>
          
          <TabsContent value="supply">
            <SupplyChainMetrics />
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
