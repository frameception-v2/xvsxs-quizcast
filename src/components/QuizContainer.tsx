"use client";

import { cn } from "~/lib/utils";
import { type ReactNode } from "react";

export function QuizContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div 
      className={cn(
        "w-full max-w-[600px] mx-auto p-4", // Constrain width for mobile
        "touch-manipulation", // Prevent zoom/scroll gestures
        "[&_button]:touch-default [&_button]:min-h-[48px]", // Touch targets
        "overscroll-contain", // Prevent pull-to-refresh
        className
      )}
      style={{
        // Mobile viewport hack for 100vh
        minHeight: "calc(100dvh - env(safe-area-inset-bottom))",
      }}
    >
      {children}
    </div>
  );
}
