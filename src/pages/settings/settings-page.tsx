'use client';

import { useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Switch } from '@/components/ui';
import styles from './settings-page.module.scss';

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
        <div className={styles.settingsList}>
          {Object.entries(settings).map(([key, value]) => (
            <div className={styles.settingsItem} key={key}>
              <div>
                <p className={styles.settingsItemLabel}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}</p>
                <p className={styles.settingsItemDesc}>Toggle {key.replace(/([A-Z])/g, ' $1').toLowerCase()} behavior.</p>
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
