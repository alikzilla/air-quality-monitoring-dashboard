export type SensorStatus = 'online' | 'warning' | 'offline';

export type Sensor = {
  id: string;
  name: string;
  zone: string;
  status: SensorStatus;
  temperature: number;
  humidity: number;
  aqi: number;
  co2: number;
  co: number;
  updatedAt: string;
};

export const metrics = {
  aqi: 43,
  temperature: 22.4,
  humidity: 45,
  co2: 638,
  co: 7
};

export const timelineData = [
  { time: '08:00', aqi: 38, temperature: 21, humidity: 42, co2: 580, co: 5 },
  { time: '10:00', aqi: 41, temperature: 22, humidity: 44, co2: 610, co: 6 },
  { time: '12:00', aqi: 44, temperature: 23, humidity: 46, co2: 655, co: 6 },
  { time: '14:00', aqi: 48, temperature: 24, humidity: 47, co2: 700, co: 8 },
  { time: '16:00', aqi: 45, temperature: 23, humidity: 45, co2: 675, co: 7 },
  { time: '18:00', aqi: 43, temperature: 22, humidity: 45, co2: 638, co: 7 }
];

export const sensors: Sensor[] = [
  {
    id: 'SEN-001',
    name: 'Lobby Node',
    zone: 'Ground Floor',
    status: 'online',
    temperature: 22.1,
    humidity: 46,
    aqi: 40,
    co2: 620,
    co: 6,
    updatedAt: '2s ago'
  },
  {
    id: 'SEN-002',
    name: 'Warehouse A',
    zone: 'Storage',
    status: 'warning',
    temperature: 27.6,
    humidity: 55,
    aqi: 63,
    co2: 860,
    co: 12,
    updatedAt: '9s ago'
  },
  {
    id: 'SEN-003',
    name: 'Office North',
    zone: 'Floor 2',
    status: 'online',
    temperature: 21.8,
    humidity: 42,
    aqi: 36,
    co2: 590,
    co: 5,
    updatedAt: '5s ago'
  },
  {
    id: 'SEN-004',
    name: 'Parking Intake',
    zone: 'Basement',
    status: 'offline',
    temperature: 0,
    humidity: 0,
    aqi: 0,
    co2: 0,
    co: 0,
    updatedAt: '4m ago'
  }
];

export const historicalEvents = [
  {
    id: 'EV-101',
    ts: '2026-02-08 14:19:24',
    type: 'CO Leak Alert',
    severity: 'critical',
    message: 'Warehouse A crossed CO threshold (15 ppm). Exhaust fan auto-started.'
  },
  {
    id: 'EV-096',
    ts: '2026-02-08 11:03:12',
    type: 'High Temperature',
    severity: 'warning',
    message: 'Server room reached 29.1C. Cooling profile switched to aggressive mode.'
  },
  {
    id: 'EV-088',
    ts: '2026-02-07 20:41:09',
    type: 'Sensor Offline',
    severity: 'major',
    message: 'Parking Intake lost heartbeat for over 120s.'
  },
  {
    id: 'EV-083',
    ts: '2026-02-07 16:22:54',
    type: 'Humidity Spike',
    severity: 'warning',
    message: 'Ground Floor humidity peaked at 62%. Dehumidifier enabled.'
  }
];

export const seedLogs = [
  '[14:32:01] ingestd: packet accepted from SEN-001 (latency 18ms)',
  '[14:32:02] rules: humidity in Ground Floor back to target range',
  '[14:32:03] alert: warning cleared for Office North AQI',
  '[14:32:04] ctrl: ventilation profile set to balanced',
  '[14:32:05] monitor: stream stable, 4 active nodes'
];
