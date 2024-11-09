"use client"

import { TrendingUp } from "lucide-react"
import {Bar, BarChart, LabelList, XAxis, YAxis} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import React from "react";
const chartData = [
    { month: "Monday", desktop: 7 },
    { month: "Tuesday", desktop: 8 },
    { month: "Wednesday", desktop: 6 },
    { month: "Thursday", desktop: 5 },
    { month: "Friday", desktop: 5 },
    { month: "Saturday", desktop: 6 },
    { month: "Sunday", desktop: 7 },
]

const chartConfig = {
    desktop: {
        label: "Bookings",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function Component() {
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
                        <XAxis type="number" dataKey="desktop" hide />
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
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} >
                            <LabelList
                                dataKey="desktop"
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
    )
}
