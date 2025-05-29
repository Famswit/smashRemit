import React from "react";

import { cn } from "@/lib/utils";

interface MaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return (
    <section
      className={cn("px-4 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-16", className)}
    >
      <div className="mx-auto w-full max-w-screen-xl sm:max-w-screen-md md:max-w-screen-lg">
        {children}
      </div>
    </section>
  );
};

export default MaxWidthContainer;
