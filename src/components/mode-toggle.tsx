"use client";

import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { toggleTheme, setTheme as updateConfigTheme } from "@/resources/config";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(({ className, ...props }, ref) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && resolvedTheme) {
      updateConfigTheme(resolvedTheme);
    }
  }, [mounted, resolvedTheme]);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    toggleTheme();
  };

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className={cn("px-2", className)}
      aria-label="Toggle theme"
      onClick={handleToggle}
      {...props}
    >
      <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";
