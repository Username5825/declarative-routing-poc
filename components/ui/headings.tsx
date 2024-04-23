import * as React from "react";

import { cn } from "@/lib/utils/cn";

const H1 = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-4xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
H1.displayName = "H1";

const H2 = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("mb-3 text-2xl font-semibold leading-none  tracking-tight", className)}
      {...props}
    />
  )
);
H2.displayName = "H2";

export { H1, H2 };
