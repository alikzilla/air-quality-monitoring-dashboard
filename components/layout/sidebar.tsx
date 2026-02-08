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
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__indicator" />
        <div>
          <p className="sidebar__title">AIRMON</p>
          <p className="sidebar__subtitle">terminal.monitor.v1</p>
        </div>
      </div>
      <nav className="sidebar__nav" aria-label="Main navigation">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={{
                pathname: href,
              }}
              className={cn("sidebar__link", active && "sidebar__link--active")}
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
