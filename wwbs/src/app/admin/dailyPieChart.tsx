"use client";

import {TrendingUp} from "lucide-react";
import {Pie, PieChart} from "recharts";

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

const chartData = [
    {status: "Booked", visitors: 275, fill: "#F44336"},
    {status: "free", visitors: 200, fill: "#4CAF50"},
];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    booked: {
        label: "Booked",
        color: "hsl(var(--chart-1))",
    },
    free: {
        label: "free",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export function DailyPieChart() {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="items-center pb-4">
                <CardTitle>Todays Bookings</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px] px-0 h-64"
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent nameKey="visitors" hideLabel/>}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            labelLine={false}
                            label={({payload, ...props}) => {
                                return (
                                    <text
                                        cx={props.cx}
                                        cy={props.cy}
                                        x={props.x}
                                        y={props.y}
                                        textAnchor={props.textAnchor}
                                        dominantBaseline={props.dominantBaseline}
                                        fill="hsla(var(--foreground))"
                                    >
                                        {payload.status}
                                    </text>
                                );
                            }}
                            nameKey="browser"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
