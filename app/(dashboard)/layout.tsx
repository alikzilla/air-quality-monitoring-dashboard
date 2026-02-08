import { ProfileDropdown } from '@/components/layout/profile-dropdown';
import { Sidebar } from '@/components/layout/sidebar';
import { ThemeToggle } from '@/components/layout/theme-toggle';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-shell__main">
        <header className="topbar">
          <div>
            <p className="topbar__eyebrow">Air Quality Control Center</p>
            <h1 className="topbar__title">Live Environment Dashboard</h1>
          </div>
          <div className="topbar__actions">
            <ThemeToggle />
            <ProfileDropdown />
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
