import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EnvironmentalMetrics = () => {
  return (
    <div className="grid gap-4">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Environmental & Innovation Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-3xl font-bold text-green-400">43%</div>
              <div className="text-slate-300 text-sm">Carbon Footprint Reduction</div>
              <div className="text-xs text-slate-400 mt-2">Year-over-Year Improvement</div>
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-3xl font-bold text-blue-400">318</div>
              <div className="text-slate-300 text-sm">Patent Applications</div>
              <div className="text-xs text-slate-400 mt-2">Total Active Patents</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnvironmentalMetrics; 