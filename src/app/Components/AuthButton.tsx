"use client";

import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export function AuthButton() {
  const { isSignedIn } = useUser();

  return isSignedIn ? (
    <UserButton afterSignOutUrl="/" />
  ) : (
    <button className="hidden md:block bg-[--primary] hover:bg-[--primary-hover] text-white px-4 py-2 rounded-lg transition-colors">
      Sign In
    </button>
  );
}