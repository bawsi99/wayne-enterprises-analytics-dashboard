"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const API_URL = "http://127.0.0.1:8000";

interface SummaryData {
  total_revenue: number;
  total_profit: number;
  total_employees: number;
  avg_salary: number;
}

const MetricsCards = () => {
  const [data, setData] = useState<SummaryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/summary`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch summary");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading metrics...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!data) return null;

  const { total_revenue, total_profit, total_employees } = data;
  const profit_margin = total_revenue ? ((total_profit / total_revenue) * 100).toFixed(2) : "-";

  // Format numbers for display
  const formatNumber = (num: number) => num.toLocaleString();
  const formatCurrency = (num: number) => `$${(num / 1_000_000).toFixed(1)}M`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-slate-300">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-400">{formatCurrency(total_revenue)}</div>
          <p className="text-xs text-slate-400">Cumulative revenue</p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-slate-300">Profit Margin</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-400">{profit_margin}%</div>
          <p className="text-xs text-slate-400">Overall margin</p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-slate-300">Total Profit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-400">{formatCurrency(total_profit)}</div>
          <p className="text-xs text-slate-400">Cumulative profit</p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-slate-300">Total Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-400">{formatNumber(total_employees)}</div>
          <p className="text-xs text-slate-400">Enterprise headcount</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsCards;
