import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// CountUp component for animating numbers
const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    // Animate count up
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const progressRatio = Math.min(progress / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progressRatio);

      setCount(Math.floor(easedProgress * end));

      if (progressRatio < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      startTimeRef.current = null;
    };
  }, [end, duration, inView]);

  // Easing function for smooth animation
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  return <span ref={ref}>{count}</span>;
};

export default CountUp;
