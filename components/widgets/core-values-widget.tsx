import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { useInView } from "react-intersection-observer";
type Props = {
  value: {
    title: string;
    description: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    bgImage: string;
  };
};
export const CoreValuesWidget = ({ value }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
    rootMargin: "-100px 0px",
  });

  const bgControls = useAnimation();
  const contentControls = useAnimation();
  React.useEffect(() => {
    if (inView) {
      // Animate background zoom
      bgControls.start({
        scale: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      });

      // Animate content sliding in
      contentControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
      });
    } else {
      // Reset animations when out of view
      bgControls.start({
        scale: 1.1,
        transition: { duration: 0.5 },
      });

      contentControls.start({
        x: "-50px",
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [inView, bgControls, contentControls]);
  return (
    <div
      ref={ref}
      className="relative grid h-[375px] w-full overflow-hidden rounded-[20px] rounded-[32px] bg-[#F8F8F8] p-8"
    >
      {/* Content container with slide-in animation */}
      <motion.div
        initial={{ x: "-50px", opacity: 0 }}
        animate={contentControls}
        className="z-40 size-fit space-y-5 rounded-[20px] bg-white p-5"
      >
        <div className="bg-light-orange flex size-[44px] items-center justify-center rounded-full">
          <value.icon className="size-5 text-white" />
        </div>
        <div>
          <h4 className="text-dark-blue text-lg font-bold">{value.title}</h4>
          <p className="text-dark-blue max-w-[231px] text-base font-normal">
            {value.description}
          </p>
        </div>
      </motion.div>
      <div className="absolute right-0 bottom-0 size-[199px]">
        <Image src={value.bgImage} alt="core-values" fill />
      </div>
    </div>
  );
};
