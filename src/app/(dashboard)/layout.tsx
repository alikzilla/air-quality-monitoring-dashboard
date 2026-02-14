import { auth } from "@clerk/nextjs/server";
import {
  MobileTabbar,
  ProfileDropdown,
  Sidebar,
  ThemeToggle,
} from "@/components/custom";
import styles from "./layout.module.scss";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn({ returnBackUrl: "/sign-in" });

  return (
    <div className={styles.appShell}>
      <Sidebar />
      <div className={styles.appShellMain}>
        <header className={styles.topbar}>
          <div className={styles.topbarBrand}>
            <p className={styles.topbarEyebrow}>AIRMON</p>
            <h1 className={styles.topbarTitle}>Air Quality Dashboard</h1>
          </div>
          <div className={styles.topbarActions}>
            <ThemeToggle />
            <ProfileDropdown />
          </div>
        </header>
        <main className={styles.content}>{children}</main>
        <MobileTabbar />
      </div>
    </div>
  );
}
