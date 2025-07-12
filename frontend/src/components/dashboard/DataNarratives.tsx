"use client";

import { useEffect, useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

interface NarrativeData {
  headline: string;
  narrative: string;
  supporting: {
    year: number[];
    revenue: number[];
    profit: number[];
  };
}

const DataNarratives = () => {
  const [narrative, setNarrative] = useState<NarrativeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/data-narrative`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data narrative");
        return res.json();
      })
      .then((data) => {
        setNarrative(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading data narrative...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!narrative) return null;

  // Example: supporting is { year: [...], revenue: [...], profit: [...] }
  const chartData = narrative.supporting.year.map((year: number, i: number) => ({
    year: year.toString(),
    revenue: narrative.supporting.revenue[i],
    profit: narrative.supporting.profit[i],
  }));

  const chartConfig = {
    revenue: { label: "Revenue", color: "#10b981" },
    profit: { label: "Profit", color: "#8b5cf6" },
  };

  return (
    <div className="space-y-6">
      <div className="border-l-4 border-blue-500 pl-4 py-3">
        <h2 className="font-bold text-2xl text-blue-400 mb-2">{narrative.headline}</h2>
        <p className="text-slate-200 text-lg mb-2">{narrative.narrative}</p>
      </div>
      <div className="bg-slate-800/50 border-slate-700 rounded-lg p-4">
        <h3 className="text-white text-lg mb-2">Supporting Data</h3>
        <ChartContainer config={chartConfig} className="h-80">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
            <Bar dataKey="profit" fill="#8b5cf6" name="Profit" />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default DataNarratives;
