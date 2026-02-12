"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { metrics, timelineData } from "@/lib/data";

const metricCards = [
  { key: "AQI", value: metrics.aqi, suffix: "", status: "Good" },
  {
    key: "Temperature",
    value: metrics.temperature,
    suffix: " C",
    status: "Stable",
  },
  { key: "Humidity", value: metrics.humidity, suffix: "%", status: "Optimal" },
  { key: "CO2", value: metrics.co2, suffix: " ppm", status: "Normal" },
  { key: "CO", value: metrics.co, suffix: " ppm", status: "Watch" },
];

export function MainOverview() {
  return (
    <div className="dashboard-grid">
      <section className="metric-row">
        {metricCards.map((metric) => (
          <Card key={metric.key}>
            <CardHeader>
              <CardDescription>{metric.key}</CardDescription>
              <CardTitle>
                {metric.value}
                {metric.suffix}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={metric.key === "CO" ? "warning" : "success"}>
                {metric.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="chart-stack">
        <Card>
          <CardHeader>
            <CardTitle>Air Quality Trend</CardTitle>
            <CardDescription>Hourly AQI and CO2 relation</CardDescription>
          </CardHeader>
          <CardContent className="chart-area">
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="aqi"
                  stroke="var(--accent)"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="co2"
                  stroke="var(--accent-2)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comfort Indicators</CardTitle>
            <CardDescription>
              Temperature and humidity over time
            </CardDescription>
          </CardHeader>
          <CardContent className="chart-area">
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={timelineData}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="temperature"
                  stroke="var(--accent)"
                  fill="var(--accent-soft)"
                />
                <Area
                  type="monotone"
                  dataKey="humidity"
                  stroke="var(--accent-2)"
                  fill="var(--accent-2-soft)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      <section className="bottom-grid">
        <Card>
          <CardHeader>
            <CardTitle>System Snapshot</CardTitle>
            <CardDescription>Combined information</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="snapshot-list">
              <li>Indoor AQI is good across most zones.</li>
              <li>CO2 spikes observed in Warehouse A at peak load.</li>
              <li>
                Basement intake sensor still offline; diagnostics pending.
              </li>
              <li>Auto ventilation profile currently set to balanced.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Score</CardTitle>
            <CardDescription>
              Calculated environmental quality index
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="health-score">
              <span className="health-score__value">91%</span>
              <Badge variant="success">Within target</Badge>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
