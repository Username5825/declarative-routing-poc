import * as React from "react";
import { cn } from "@/lib/utils/cn";

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                      1️⃣ COLUMN 1️⃣                          */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

const Column = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col items-center gap-6", className)} {...props} />
  )
);
Column.displayName = "Column";

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                       2️⃣ FLEX 2️⃣                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

// 1. Flex Col
const FlexCol = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col", className)} {...props} />
  )
);
FlexCol.displayName = "FlexCol";

// 2. General Flex
const Flex = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex", className)} {...props} />
);
Flex.displayName = "Flex";

// 3. Flex with gap-2
const Flex2 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-2", className)} {...props} />
  )
);
Flex2.displayName = "Flex2";

// 4. Flex with gap-4
const Flex4 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-4", className)} {...props} />
  )
);
Flex4.displayName = "Flex4";

const FlexBetween = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center justify-between", className)} {...props} />
  )
);
FlexBetween.displayName = "FlexBetween";

const FlexCenter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center justify-center", className)} {...props} />
  )
);
FlexCenter.displayName = "FlexCenter";

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                      3️⃣ GRIDS 3️⃣                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

// 1.
const Grid: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("grid w-full  grid-cols-1", className)} {...props}>
    {children}
  </div>
);
Grid.displayName = "Grid";

// 2.
const Grid2: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("grid w-full grid-cols-2 gap-8", className)} {...props}>
    {children}
  </div>
);
Grid2.displayName = "Grid2";

// 3.
const Grid3: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("grid w-full grid-cols-3 gap-6", className)} {...props}>
    {children}
  </div>
);
Grid3.displayName = "Grid3";

// 4.
const Grid4: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("grid w-full grid-cols-4 gap-4", className)} {...props}>
    {children}
  </div>
);
Grid4.displayName = "Grid4";

export { Column, Flex, Flex2, Flex4, FlexCol, FlexBetween, FlexCenter, Grid, Grid2, Grid3, Grid4 };
