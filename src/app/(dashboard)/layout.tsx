import { auth } from "@clerk/nextjs/server";

import { MobileTabbar } from "@/components/custom/layout/mobile-tabbar";
import { ProfileDropdown } from "@/components/custom/layout/profile-dropdown";
import { Sidebar } from "@/components/custom/layout/sidebar";
import { ThemeToggle } from "@/components/custom/layout/theme-toggle";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn({ returnBackUrl: "/sign-in" });

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-shell__main">
        <header className="topbar">
          <div className="topbar__brand">
            <p className="topbar__eyebrow">AIRMON</p>
            <h1 className="topbar__title">Air Quality Dashboard</h1>
          </div>
          <div className="topbar__actions">
            <ThemeToggle />
            <ProfileDropdown />
          </div>
        </header>
        <main className="content">{children}</main>
        <MobileTabbar />
      </div>
    </div>
  );
}
