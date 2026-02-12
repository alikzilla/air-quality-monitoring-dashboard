import { AlertTriangle, ShieldAlert } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { historicalEvents } from '@/lib/data';

function severityVariant(severity: string): 'danger' | 'warning' | 'default' {
  if (severity === 'critical' || severity === 'major') return 'danger';
  if (severity === 'warning') return 'warning';
  return 'default';
}

export default function EventsPageView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Event History</CardTitle>
        <CardDescription>Recorded incidents such as CO leakage and high temperature alarms.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="event-list">
          {historicalEvents.map((event) => (
            <article className="event-item" key={event.id}>
              <div className="event-item__icon">
                {event.severity === 'critical' ? <ShieldAlert size={18} /> : <AlertTriangle size={18} />}
              </div>
              <div className="event-item__content">
                <div className="event-item__header">
                  <p className="event-item__title">{event.type}</p>
                  <Badge variant={severityVariant(event.severity)}>{event.severity}</Badge>
                </div>
                <p className="event-item__message">{event.message}</p>
                <p className="event-item__meta">
                  #{event.id} • {event.ts}
                </p>
              </div>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
