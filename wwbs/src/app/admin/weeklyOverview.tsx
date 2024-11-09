"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
const chartData = [
  { month: "Monday", total: 30, current: 5 },
  { month: "Tuesday", total: 30, current: 8 },
  { month: "Wednesday", total: 26, current: 2 },
  { month: "Thursday", total: 25, current: 4 },
  { month: "Friday", total: 15, current: 9 },
  { month: "Saturday", total: 26, current: 12 },
  { month: "Sunday", total: 27, current: 11 },
];

const chartConfig = {
  total: {
    label: "Bookings",
    color: "#4CAF50",
  },
  current: {
    label: "Bookings",
    color: "#F44336",
  },
} satisfies ChartConfig;

export default function WeeklyOverview() {
  return (
    <Card>
      <CardContent>
        <ChartContainer className="h-64" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="total" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="total"
              fill="var(--color-total)"
              radius={0}
              stackId="a"
            >
              <LabelList
                dataKey="total"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
            <Bar
              dataKey="current"
              fill="#F44336"
              radius={[0, 5, 5, 0]}
              stackId="a"
            >
              <LabelList
                dataKey="current"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
