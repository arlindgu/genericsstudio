import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 text-label font-[510] transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-[#d0d6e0] border border-[#23252a] rounded-full px-2.5 py-0.5",
        success:
          "bg-[#10b981] text-[#f7f8f8] rounded-full px-2.5 py-0.5",
        subtle:
          "bg-[rgba(255,255,255,0.05)] text-[#f7f8f8] border border-[rgba(255,255,255,0.05)] rounded-sm px-2 py-0.5",
        brand:
          "bg-[rgba(201,108,48,0.15)] text-[#e0813e] border border-[rgba(201,108,48,0.3)] rounded-full px-2.5 py-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
