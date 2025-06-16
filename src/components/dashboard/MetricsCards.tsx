
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MetricsCards = () => {
  return (
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
  );
};

export default MetricsCards;
