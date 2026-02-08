import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { sensors } from '@/lib/data';

function statusToVariant(status: string): 'success' | 'warning' | 'danger' {
  if (status === 'online') return 'success';
  if (status === 'warning') return 'warning';
  return 'danger';
}

export default function SensorsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sensor Fleet</CardTitle>
        <CardDescription>All available sensors, status, values and telemetry data.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Zone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Temperature</TableHead>
              <TableHead>Humidity</TableHead>
              <TableHead>AQI</TableHead>
              <TableHead>CO2</TableHead>
              <TableHead>CO</TableHead>
              <TableHead>Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sensors.map((sensor) => (
              <TableRow key={sensor.id}>
                <TableCell>{sensor.id}</TableCell>
                <TableCell>{sensor.name}</TableCell>
                <TableCell>{sensor.zone}</TableCell>
                <TableCell>
                  <Badge variant={statusToVariant(sensor.status)}>{sensor.status}</Badge>
                </TableCell>
                <TableCell>{sensor.temperature ? `${sensor.temperature} C` : '--'}</TableCell>
                <TableCell>{sensor.humidity ? `${sensor.humidity}%` : '--'}</TableCell>
                <TableCell>{sensor.aqi || '--'}</TableCell>
                <TableCell>{sensor.co2 ? `${sensor.co2} ppm` : '--'}</TableCell>
                <TableCell>{sensor.co ? `${sensor.co} ppm` : '--'}</TableCell>
                <TableCell>{sensor.updatedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
