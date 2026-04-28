import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c96c30] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] text-[#e2e4e7] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.12)]",
        brand:
          "bg-[#c96c30] text-white hover:bg-[#e89a68] border border-transparent",
        ghost:
          "bg-transparent text-[#d0d6e0] hover:bg-[rgba(255,255,255,0.04)] border border-transparent",
        subtle:
          "bg-[rgba(255,255,255,0.04)] text-[#d0d6e0] hover:bg-[rgba(255,255,255,0.07)] border border-transparent",
        outline:
          "border border-[rgba(255,255,255,0.08)] bg-transparent text-[#d0d6e0] hover:bg-[rgba(255,255,255,0.04)]",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-[6px] font-[510]",
        sm: "h-7 px-3 rounded-[6px] text-label font-[510]",
        lg: "h-11 px-6 rounded-[6px] text-base font-[510]",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
