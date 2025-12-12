import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartContainer } from "../components/ui/chart";
import type { ChartConfig } from "../components/ui/chart";

const chartData = [{ name: "value", progress: 80, fill: "#1768b3" }];

const chartConfig = {
  progress: {
    label: "Progress",
  },
} satisfies ChartConfig;

export default function RadialChart({ value }: { value: number }) {
  return (
    <div className="w-fit flex items-center justify-center">
      <ChartContainer
        config={chartConfig}
        className="aspect-square w-[100px] h-[100px] flex items-center justify-center"
      >
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={value}
          innerRadius={40}
          outerRadius={60}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            polarRadius={[60, 40]}
          />

          <RadialBar
            dataKey="progress"
            cornerRadius={10}
            background={{ fill: "#F2F3F5" }}
            fill="#1768b3"
          />

          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
