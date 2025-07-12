
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinancialOverview from "@/components/dashboard/FinancialOverview";
import SecurityAnalytics from "@/components/dashboard/SecurityAnalytics";
import RDPortfolio from "@/components/dashboard/RDPortfolio";
import HRAnalytics from "@/components/dashboard/HRAnalytics";
import CEOReport from "@/components/dashboard/CEOReport";
import EnvironmentalMetrics from "@/components/dashboard/EnvironmentalMetrics";
import PredictiveAnalytics from "@/components/dashboard/PredictiveAnalytics";
import DataNarratives from "@/components/dashboard/DataNarratives";
import ExecutiveTab from "@/components/dashboard/ExecutiveTab";
import { TrendingUp, Shield, Beaker, Users, Target, FileText, Brain, Newspaper } from "lucide-react";

const DashboardTabs = () => {
  return (
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
        <ExecutiveTab />
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
  );
};

export default DashboardTabs;
