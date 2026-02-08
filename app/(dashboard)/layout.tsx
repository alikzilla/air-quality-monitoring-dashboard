import { MobileTabbar } from '@/components/layout/mobile-tabbar';
import { ProfileDropdown } from '@/components/layout/profile-dropdown';
import { Sidebar } from '@/components/layout/sidebar';
import { ThemeToggle } from '@/components/layout/theme-toggle';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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
