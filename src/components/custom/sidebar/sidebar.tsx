"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BellRing,
  Cog,
  FileClock,
  LayoutDashboard,
} from "lucide-react";

import { cn } from "@/lib/utils";
import styles from "./sidebar.module.scss";

const navItems = [
  { href: "/main", label: "Main", icon: LayoutDashboard },
  { href: "/sensors", label: "Sensors", icon: Activity },
  { href: "/logs", label: "Logs", icon: FileClock },
  { href: "/events", label: "Events", icon: BellRing },
  { href: "/settings", label: "Settings", icon: Cog },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.indicator} />
        <div>
          <p className={styles.title}>AIRMON</p>
          <p className={styles.subtitle}>terminal.monitor.v1</p>
        </div>
      </div>
      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={{
                pathname: href,
              }}
              className={cn(styles.link, active && styles.linkActive)}
            >
              <Icon size={16} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
