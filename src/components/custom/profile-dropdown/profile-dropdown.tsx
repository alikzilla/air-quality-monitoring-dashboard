"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
import styles from "./profile-dropdown.module.scss";

export function ProfileDropdown() {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return <Skeleton className={styles.userAvatarBoxFallback} />;
  }

  return (
    <>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonBox: styles.userButtonBox,
              userButtonTrigger: styles.userButtonTrigger,
              userButtonAvatarBox: styles.userAvatarBox,
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="outline" size="sm">
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
