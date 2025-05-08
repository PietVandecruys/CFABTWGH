"use client";
import { Button } from "@/components/ui/button";
import { signInWithGitHub } from "@/lib/auth-actions";
import React from "react";

const SignInWithGitHubButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={() => {
        signInWithGitHub();
      }}
    >
      Login with GitHub
    </Button>
  );
};

export default SignInWithGitHubButton;
