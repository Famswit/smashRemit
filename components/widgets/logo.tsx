"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className: string;
  logoLink: string;
}

export const Logo = ({ className, logoLink }: LogoProps) => {
  return (
    <div className={cn("relative", className)}>
      <Link href="/" className="absolute top-0 left-0 z-30 size-full" />
      <Image
        src={logoLink}
        alt="logo"
        fill
        className="object-contain object-left"
      />
    </div>
  );
};
