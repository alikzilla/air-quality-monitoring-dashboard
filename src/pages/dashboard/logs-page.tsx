'use client';

import { useEffect, useMemo, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { seedLogs } from '@/lib/data';

function randomLog() {
  const stream = [
    'ingestd: packet accepted from SEN-002',
    'alertd: warning created for rising CO2 in Storage',
    'ctrl: fan speed set to level 2',
    'rules: no threshold violations detected in Office North',
    'monitor: heartbeat timeout for SEN-004'
  ];
  const message = stream[Math.floor(Math.random() * stream.length)];
  const now = new Date();
  const hh = now.getHours().toString().padStart(2, '0');
  const mm = now.getMinutes().toString().padStart(2, '0');
  const ss = now.getSeconds().toString().padStart(2, '0');
  return `[${hh}:${mm}:${ss}] ${message}`;
}

export default function LogsPageView() {
  const [logs, setLogs] = useState(seedLogs);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogs((prev) => [randomLog(), ...prev].slice(0, 70));
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const indicators = useMemo(
    () => ({
      throughput: `${(54 + Math.random() * 10).toFixed(1)} pkt/s`,
      latency: `${(16 + Math.random() * 8).toFixed(1)} ms`
    }),
    []
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Realtime Logs</CardTitle>
        <CardDescription>Grafana-like stream of telemetry and alerting logs.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="log-meta">
          <Badge variant="outline">throughput {indicators.throughput}</Badge>
          <Badge variant="outline">latency {indicators.latency}</Badge>
          <Badge variant="success">stream online</Badge>
        </div>
        <div className="log-console" aria-live="polite">
          {logs.map((line, idx) => (
            <p key={`${line}-${idx}`}>{line}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
