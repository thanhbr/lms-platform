import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
};

const colorVariant = {
  default: "text-sky-700",
  success: "text-emerald-700"
}

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs"
}

export const CourseProgress = ({
  value,
  variant,
  size
}: CourseProgressProps) => {
  return (
    <div>
      <Progress 
        className="h-2"
        value={value}
        variant={variant}
      />
      <p className={cn(
        "font-medium mt-2 text-sky-700",
        colorVariant[variant || "default"],
        sizeByVariant[size || "default"],
      )}>
        {Math.round(value)}% Complete
      </p>
    </div>
  )
}