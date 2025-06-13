
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const RDPortfolio = () => {
  const budgetData = [
    { division: "Wayne Aerospace", allocated: 1540, spent: 615, projects: 15 },
    { division: "Wayne Biotech", allocated: 1876, spent: 745, projects: 15 },
    { division: "Applied Sciences", allocated: 2134, spent: 656, projects: 15 },
    { division: "Wayne Construction", allocated: 3456, spent: 1245, projects: 12 },
    { division: "Wayne Foundation", allocated: 478, spent: 287, projects: 18 }
  ];

  const potentialData = [
    { name: "Very High", value: 23, color: "#10b981" },
    { name: "High", value: 28, color: "#3b82f6" },
    { name: "Medium", value: 18, color: "#f59e0b" },
    { name: "Low", value: 6, color: "#ef4444" }
  ];

  const keyProjects = [
    {
      name: "Neural Interface Technology",
      division: "Wayne Biotech",
      budget: 145.7,
      spent: 89.2,
      potential: "Very High",
      timeline: 78.9,
      classification: "Level 3",
      patents: 12
    },
    {
      name: "Quantum Computer Chip",
      division: "Applied Sciences", 
      budget: 234.7,
      spent: 145.2,
      potential: "Very High",
      timeline: 82.6,
      classification: "Level 3",
      patents: 7
    },
    {
      name: "Next-Gen Fighter Jet",
      division: "Wayne Aerospace",
      budget: 245.6,
      spent: 82.3,
      potential: "Very High", 
      timeline: 65.2,
      classification: "Level 4",
      patents: 6
    },
    {
      name: "Fusion Power Core",
      division: "Applied Sciences",
      budget: 156.8,
      spent: 89.4,
      potential: "Very High",
      timeline: 78.2,
      classification: "Level 4",
      patents: 4
    },
    {
      name: "Anti-Gravity Research",
      division: "Wayne Aerospace",
      budget: 198.4,
      spent: 45.6,
      potential: "Low",
      timeline: 38.9,
      classification: "Level 5",
      patents: 0
    }
  ];

  const getClassificationColor = (level: string) => {
    switch (level) {
      case "Level 1": return "bg-green-500";
      case "Level 2": return "bg-blue-500";
      case "Level 3": return "bg-yellow-500";
      case "Level 4": return "bg-orange-500";
      case "Level 5": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case "Very High": return "text-green-400";
      case "High": return "text-blue-400";
      case "Medium": return "text-yellow-400";
      case "Low": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* R&D Headlines */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">R&D Innovation Headlines</CardTitle>
          <CardDescription className="text-slate-300">
            Latest breakthroughs and strategic developments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Neural Interface Breakthrough: Commercial Prototype Ready Q1 2025
            </h3>
            <p className="text-slate-300">
              Wayne Biotech's neural interface technology achieves 78.9% timeline adherence with 12 patent applications filed. Market potential estimated at $50B+.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Quantum Computing Milestone: First Functional Chip Completed
            </h3>
            <p className="text-slate-300">
              Applied Sciences division successfully demonstrates quantum computer chip with 7 breakthrough patents. Commercial applications expected by 2026.
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Alert: Theoretical Physics Projects Face Timeline Challenges
            </h3>
            <p className="text-slate-300">
              Anti-gravity research and dimensional portal projects showing significant delays with timeline adherence below 40%. Budget reallocation under review.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">R&D Budget Allocation vs Spending</CardTitle>
            <CardDescription className="text-slate-300">
              Investment efficiency across divisions ($ Millions)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64">
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="division" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="allocated" fill="#3b82f6" name="Allocated" />
                <Bar dataKey="spent" fill="#10b981" name="Spent" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Commercialization Potential</CardTitle>
            <CardDescription className="text-slate-300">
              Distribution of projects by market potential
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64">
              <PieChart>
                <Pie
                  data={potentialData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {potentialData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Key Projects */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Strategic Project Portfolio</CardTitle>
          <CardDescription className="text-slate-300">
            High-impact projects driving innovation pipeline
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {keyProjects.map((project, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white text-lg">{project.name}</h3>
                    <p className="text-slate-400 text-sm">{project.division}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getClassificationColor(project.classification)}>
                      {project.classification}
                    </Badge>
                    <span className={`font-semibold ${getPotentialColor(project.potential)}`}>
                      {project.potential}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-slate-400 text-sm">Budget</p>
                    <p className="font-semibold text-white">${project.budget}M</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Spent</p>
                    <p className="font-semibold text-white">${project.spent}M</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Timeline</p>
                    <p className="font-semibold text-white">{project.timeline}%</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Patents</p>
                    <p className="font-semibold text-white">{project.patents}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-slate-300">{project.timeline}%</span>
                  </div>
                  <Progress value={project.timeline} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RDPortfolio;
