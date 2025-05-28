import React from "react";

import { cn } from "@/lib/utils";

interface MaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return (
    <section
      className={cn(
        "px-4 py-[70px] pr-[20px] lg:pr-[24px] 2xl:px-[150px]",
        className
      )}
    >
      <div className="mx-auto w-full max-w-screen-xl">{children}</div>
    </section>
  );
};

export default MaxWidthContainer;
