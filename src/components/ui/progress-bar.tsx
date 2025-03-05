import { cn } from "~/lib/utils"

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function ProgressBar({ currentStep, totalSteps, className }: ProgressBarProps) {
  return (
    <div 
      className={cn("grid gap-1", className)} 
      style={{ gridTemplateColumns: `repeat(${totalSteps}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-2 rounded-full transition-colors duration-300",
            index < currentStep ? "bg-purple-500" : "bg-neutral-200"
          )}
        />
      ))}
    </div>
  );
}
