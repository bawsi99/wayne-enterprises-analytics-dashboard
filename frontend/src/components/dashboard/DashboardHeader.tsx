
import { Badge } from "@/components/ui/badge";

const DashboardHeader = () => {
  return (
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
  );
};

export default DashboardHeader;
