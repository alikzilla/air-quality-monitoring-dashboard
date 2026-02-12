"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export function ProfileDropdown() {
  return (
    <>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonBox: "clerk-user-btn",
              userButtonTrigger: "clerk-user-trigger",
              userButtonAvatarBox: "clerk-user-avatar",
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
