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
    <nav className="mobile-tabbar" aria-label="Mobile bottom navigation">
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={{
              pathname: href,
            }}
            className={cn(
              "mobile-tabbar__item",
              active && "mobile-tabbar__item--active",
            )}
          >
            <Icon size={17} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
