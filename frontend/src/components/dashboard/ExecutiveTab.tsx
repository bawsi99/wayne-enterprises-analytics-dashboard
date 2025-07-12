
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StrategicInsights from "@/components/dashboard/StrategicInsights";

const ExecutiveTab = () => {
  return (
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
  );
};

export default ExecutiveTab;
