"use client";

import {Bar, BarChart, LabelList, XAxis, YAxis} from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer, ChartLegend, ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";

const chartData = [
    {month: "Monday", total: 30, booked: 5, notBooked: 25},
    {month: "Tuesday", total: 30, booked: 8, notBooked: 22},
    {month: "Wednesday", total: 30, booked: 2, notBooked: 28},
    {month: "Thursday", total: 30, booked: 4, notBooked: 26},
    {month: "Friday", total: 30, booked: 9, notBooked: 21},
    {month: "Saturday", total: 30, booked: 12, notBooked: 18},
    {month: "Sunday", total: 30, booked: 18, notBooked: 12},
];

const chartConfig = {
    total: {
        label: "Total",
        color: "#a3ea93",
    },
    booked: {
        label: "Bookings",
        color: "#4CAF50",
    },
    notBooked: {
        label: "Not Booked",
        color: "#4CAF50",
    },
} satisfies ChartConfig;

export default function WeeklyOverview() {
    return (
        <Card className="h-full w-full">
            <CardContent>
                <CardHeader className="items-center pb-4 h-full">
                    <CardTitle>Weekly Bookings</CardTitle>
                </CardHeader>
                <ChartContainer className="h-64" config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: -20,
                        }}
                    >
                        <XAxis type="number" dataKey="total" hide/>
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
                            content={<ChartTooltipContent hideLabel/>}
                        />
                        <Bar
                            dataKey="booked"
                            fill="var(--color-booked)"
                            radius={0}
                            stackId="a"
                        >
                            <LabelList
                                dataKey="booked"
                                position="right"
                                offset={8}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                        <Bar
                            dataKey="notBooked"
                            fill="#a3ea93"
                            radius={[0, 5, 5, 0]}
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
                    <ChartLegend content={<ChartLegendContent />} />
                    </BarChart>

                </ChartContainer>
            </CardContent>
        </Card>
    );
}
