import { AlertTriangle, ShieldAlert } from 'lucide-react';

import { Badge } from '@/components/ui';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { historicalEvents } from '@/lib/data';
import styles from './events-page.module.scss';

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
        <div className={styles.eventList}>
          {historicalEvents.map((event) => (
            <article className={styles.eventItem} key={event.id}>
              <div className={styles.eventItemIcon}>
                {event.severity === 'critical' ? <ShieldAlert size={18} /> : <AlertTriangle size={18} />}
              </div>
              <div>
                <div className={styles.eventItemHeader}>
                  <p className={styles.eventItemTitle}>{event.type}</p>
                  <Badge variant={severityVariant(event.severity)}>{event.severity}</Badge>
                </div>
                <p className={styles.eventItemMessage}>{event.message}</p>
                <p className={styles.eventItemMeta}>
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
