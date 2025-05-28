"use client";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

export default function SectionHeader({
  title,
  subtitle,
  description,
  button,
  showTitle = true,
  showSubtitle = true,
  showDescription = true,
  showButton = true,
  containerClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
}: {
  title: string;
  description?: string;
  subtitle?: string;
  button?: React.ReactNode;
  showTitle?: boolean;
  showDescription?: boolean;
  showButton?: boolean;
  containerClassName?: string;
  showSubtitle?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={cn(
        "flex w-full flex-col items-start gap-2",
        containerClassName
      )}
    >
      {showSubtitle && subtitle && (
        <motion.h3
          variants={itemVariants}
          className={cn("text-dark-blue text-xl", subtitleClassName)}
        >
          {subtitle}
        </motion.h3>
      )}
      {showTitle && title && (
        <motion.h2
          variants={itemVariants}
          className={cn("text-light-orange text-2xl font-bold", titleClassName)}
        >
          {title}
        </motion.h2>
      )}

      {showDescription && description && (
        <motion.p
          variants={itemVariants}
          className={cn("text-dark-blue text-base", descriptionClassName)}
        >
          {description}
        </motion.p>
      )}

      {showButton && button && (
        <motion.div
          variants={itemVariants}
          className={cn("mt-2", buttonClassName)}
        >
          {button}
        </motion.div>
      )}
    </motion.div>
  );
}
