"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

interface DeptPerformanceData {
  departments: string[];
  employees: number[];
  avg_salary: number[];
}

interface EmpDistData {
  departments: string[];
  employees: number[];
}

const HRAnalytics = () => {
  const retentionData = [
    { month: "Jan 2024", entry: 91.1, mid: 96.3, senior: 99.7, executive: 100.0 },
    { month: "Feb 2024", entry: 91.8, mid: 96.8, senior: 100.0, executive: 100.0 },
    { month: "Mar 2024", entry: 92.5, mid: 97.4, senior: 100.0, executive: 100.0 },
    { month: "Apr 2024", entry: 93.2, mid: 97.9, senior: 100.0, executive: 100.0 },
    { month: "May 2024", entry: 93.9, mid: 98.5, senior: 100.0, executive: 100.0 },
    { month: "Jun 2024", entry: 94.6, mid: 99.0, senior: 100.0, executive: 100.0 }
  ];

  // Department Performance State
  const [deptPerf, setDeptPerf] = useState<DeptPerformanceData | null>(null);
  const [deptPerfLoading, setDeptPerfLoading] = useState(true);
  const [deptPerfError, setDeptPerfError] = useState<string | null>(null);

  // Employee Distribution State
  const [empDist, setEmpDist] = useState<EmpDistData | null>(null);
  const [empDistLoading, setEmpDistLoading] = useState(true);
  const [empDistError, setEmpDistError] = useState<string | null>(null);

  // Chart configuration for employee distribution
  const empDistChartConfig = {
    employees: { label: "Employees", color: "#3b82f6" },
  };

  useEffect(() => {
    fetch(`${API_URL}/department-performance`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch department performance");
        return res.json();
      })
      .then((data) => {
        setDeptPerf(data);
        setDeptPerfLoading(false);
      })
      .catch((err) => {
        setDeptPerfError(err.message);
        setDeptPerfLoading(false);
      });

    fetch(`${API_URL}/employee-distribution`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch employee distribution");
        return res.json();
      })
      .then((data) => {
        setEmpDist(data);
        setEmpDistLoading(false);
      })
      .catch((err) => {
        setEmpDistError(err.message);
        setEmpDistLoading(false);
      });
  }, []);

  const performanceData = [
    { level: "Entry Level", performance: 5.5, training: 190, benefits: 91.1, clearance: "Level 1" },
    { level: "Mid Level", performance: 5.8, training: 176, benefits: 93.1, clearance: "Level 2" },
    { level: "Senior Level", performance: 6.0, training: 133, benefits: 97.5, clearance: "Level 3" },
    { level: "Executive", performance: 6.2, training: 110, benefits: 100.0, clearance: "Level 4" }
  ];

  const radarData = [
    { metric: "Retention", aerospace: 95, biotech: 98, applied: 91, construction: 90 },
    { metric: "Satisfaction", aerospace: 89, biotech: 92, applied: 85, construction: 82 },
    { metric: "Diversity", aerospace: 89, biotech: 91, applied: 85, construction: 78 },
    { metric: "Training", aerospace: 95, biotech: 88, applied: 101, construction: 83 },
    { metric: "Performance", aerospace: 93, biotech: 95, applied: 88, construction: 85 }
  ];

  const chartConfig = {
    entry: { label: "Entry Level", color: "#3b82f6" },
    mid: { label: "Mid Level", color: "#10b981" },
    senior: { label: "Senior Level", color: "#8b5cf6" },
    executive: { label: "Executive", color: "#f59e0b" }
  };

  // Replace divisionData with API data for department performance cards
  const departmentCards = deptPerfLoading ? (
    <div>Loading department performance...</div>
  ) : deptPerfError ? (
    <div className="text-red-500">Error: {deptPerfError}</div>
  ) : deptPerf ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {deptPerf.departments.map((dept: string, i: number) => (
        <Card key={dept} className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-300">{dept}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-slate-400">Employees:</span>
                <p className="font-semibold text-white">{deptPerf.employees[i]}</p>
              </div>
              <div>
                <span className="text-slate-400">Avg Salary:</span>
                <p className="font-semibold text-white">${deptPerf.avg_salary[i]}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  ) : null;

  // Replace employee distribution chart with API data
  const employeeDistribution = empDistLoading ? (
    <div>Loading employee distribution...</div>
  ) : empDistError ? (
    <div className="text-red-500">Error: {empDistError}</div>
  ) : empDist ? (
    <ChartContainer config={empDistChartConfig} className="h-64">
      <BarChart data={empDist.departments.map((dept: string, i: number) => ({
        department: dept,
        employees: empDist.employees[i],
      }))}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="department" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="employees" fill="#3b82f6" name="Employees" />
      </BarChart>
    </ChartContainer>
  ) : null;

  return (
    <div className="space-y-6">
      {/* HR Headlines */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Human Resources Headlines</CardTitle>
          <CardDescription className="text-slate-300">
            Workforce excellence and organizational development updates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Industry-Leading Retention: Wayne Biotech Achieves 97.6% Employee Retention
            </h3>
            <p className="text-slate-300">
              June 2024 data shows Wayne Biotech leading all divisions with exceptional retention rates and 9.2/10 employee satisfaction scores.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Diversity Excellence: 91% Diversity Index Across Senior Leadership
            </h3>
            <p className="text-slate-300">
              Wayne Enterprises surpasses industry benchmarks with comprehensive diversity initiatives showing consistent improvement across all levels.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-3">
            <h3 className="font-semibold text-white text-lg">
              Training Investment Pays Off: 190+ Hours Annual Training per Employee
            </h3>
            <p className="text-slate-300">
              Comprehensive skill development programs correlate with improved performance ratings and higher security clearance advancement rates.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Retention Trends */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Employee Retention by Level (2024)</CardTitle>
          <CardDescription className="text-slate-300">
            Retention rate trends showing exceptional senior-level stability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <LineChart data={retentionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[85, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="executive" stroke="var(--color-executive)" strokeWidth={3} />
              <Line type="monotone" dataKey="senior" stroke="var(--color-senior)" strokeWidth={3} />
              <Line type="monotone" dataKey="mid" stroke="var(--color-mid)" strokeWidth={3} />
              <Line type="monotone" dataKey="entry" stroke="var(--color-entry)" strokeWidth={3} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Department Performance Cards (API) */}
      {departmentCards}
      {/* Employee Distribution Chart (API) */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Employee Distribution by Department</CardTitle>
        </CardHeader>
        <CardContent>
          {employeeDistribution}
        </CardContent>
      </Card>

      {/* Performance vs Training */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Performance Ratings by Level</CardTitle>
            <CardDescription className="text-slate-300">
              Performance correlation with organizational level
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="level" />
                <YAxis domain={[0, 7]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="performance" fill="#10b981" name="Performance Rating" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Division Performance Radar</CardTitle>
            <CardDescription className="text-slate-300">
              Comparative analysis across key HR metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Aerospace" dataKey="aerospace" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                <Radar name="Biotech" dataKey="biotech" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} />
                <ChartTooltip />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* HR KPIs Summary */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Organizational Health Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">97.6%</div>
              <div className="text-slate-300 text-sm">Average Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">9.3/10</div>
              <div className="text-slate-300 text-sm">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">0.86</div>
              <div className="text-slate-300 text-sm">Diversity Index</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">183hrs</div>
              <div className="text-slate-300 text-sm">Avg Training/Year</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRAnalytics;
