import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import CountUp from "./count-up";

// Enhanced MetricCard component
const MetricCard = ({ label, value }: { label: string; value: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
          duration: 0.6,
        },
      });
    } else {
      controls.start({
        y: 50,
        opacity: 0,
        scale: 0.95,
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0, scale: 0.95 }}
      animate={controls}
      className="relative overflow-hidden rounded-[20px] bg-white px-6 transition-all duration-300"
    >
      {/* Decorative element */}
      <div className="bg-dark-orange/10 absolute -top-10 -right-10 h-24 w-24 rounded-full" />
      <div className="bg-dark-orange/5 absolute top-6 right-6 h-12 w-12 rounded-full" />

      <h2 className="text-light-orange relative z-10 mb-1 flex items-baseline text-[30px] leading-[1.1] font-bold lg:text-[60px]">
        <CountUp end={value} />
        <span className="ml-1">+</span>
      </h2>

      <p className="text-dark-blue mb-2 text-xs font-medium lg:text-sm">
        {label}
      </p>
    </motion.div>
  );
};

export default MetricCard;
