import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 4490,
    pv: 1300,
    amt: 2100,
  },
  {
    name: "Page I",
    uv: 3390,
    pv: 2300,
    amt: 2100,
  },
  {
    name: "Page J",
    uv: 1290,
    pv: 2400,
    amt: 2100,
  },
  {
    name: "Page K",
    uv: 4290,
    pv: 4000,
    amt: 2100,
  },
  {
    name: "Page L",
    uv: 1290,
    pv: 4000,
    amt: 2100,
  },
  {
    name: "Page M",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function PerformanceChart() {
  return (
    <div className="max-w-[1200px] mx-auto mt-12 overflow-x-auto">
      <LineChart width={1100} height={350} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width={100} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#1768b3"
          activeDot={{ r: 8 }}
          strokeWidth={3}
          dot={{ r: 5, fill: "#1768b3", stroke: "#1768b3" }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#DBE8F4"
          strokeWidth={3}
          dot={{ r: 5, fill: "#DBE8F4", stroke: "#DBE8F4" }}
        />
      </LineChart>
    </div>
  );
}
