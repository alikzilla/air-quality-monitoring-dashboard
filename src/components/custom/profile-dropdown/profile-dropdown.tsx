"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui";
import styles from "./profile-dropdown.module.scss";

export function ProfileDropdown() {
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
