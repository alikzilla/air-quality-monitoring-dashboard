'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { LaptopMinimal, Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui';
import styles from './theme-toggle.module.scss';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: LaptopMinimal, label: 'System' }
  ] as const;

  const active = options.find((option) => option.value === theme) ?? options[0];
  const ActiveIcon = mounted ? active.icon : LaptopMinimal;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={styles.menuTrigger} aria-label="Open theme menu">
          <ActiveIcon size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" aria-label="Theme switcher">
        <DropdownMenuRadioGroup value={mounted ? theme ?? 'light' : 'light'} onValueChange={setTheme}>
          {options.map((option) => {
            const OptionIcon = option.icon;
            return (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                <OptionIcon size={18} />
                {option.label}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
