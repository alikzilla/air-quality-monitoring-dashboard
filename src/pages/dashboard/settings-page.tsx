'use client';

import { useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const defaultSettings = {
  notifications: true,
  soundAlerts: true,
  emailDigest: false,
  autoAcknowledge: false,
  maintenanceMode: false
};

export default function SettingsPageView() {
  const [settings, setSettings] = useState(defaultSettings);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Notification switches and runtime preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="settings-list">
          {Object.entries(settings).map(([key, value]) => (
            <div className="settings-item" key={key}>
              <div>
                <p className="settings-item__label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}</p>
                <p className="settings-item__desc">Toggle {key.replace(/([A-Z])/g, ' $1').toLowerCase()} behavior.</p>
              </div>
              <Switch
                checked={value}
                onCheckedChange={(checked) =>
                  setSettings((prev) => ({
                    ...prev,
                    [key]: checked
                  }))
                }
                aria-label={`Toggle ${key}`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
