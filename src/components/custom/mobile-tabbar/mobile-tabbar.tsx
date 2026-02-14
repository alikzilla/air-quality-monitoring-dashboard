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
import styles from "./mobile-tabbar.module.scss";

const items = [
  { href: "/main", label: "Main", icon: LayoutDashboard },
  { href: "/sensors", label: "Sensors", icon: Activity },
  { href: "/logs", label: "Logs", icon: FileClock },
  { href: "/events", label: "Events", icon: BellRing },
  { href: "/settings", label: "Settings", icon: Cog },
];

export function MobileTabbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.mobileTabbar} aria-label="Mobile bottom navigation">
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={{
              pathname: href,
            }}
            className={cn(styles.item, active && styles.itemActive)}
          >
            <Icon size={17} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
