"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import AppleIcon from "@/icons/apple";
import PlayStoreIcon from "@/icons/left-left-icon";

// Define the flag/icon type
interface CircleIcon {
  id: number;
  src: string;
  alt: string;
  size: number;
  direction: "clockwise" | "counterclockwise";
  initialAngle: number;
  distance: number;
  speed: number;
}

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Define circular animation icons
  const circleIcons: CircleIcon[] = [
    {
      id: 1,
      src: "https://res.cloudinary.com/davidleo/image/upload/v1747748782/westernedge/smash-remit/Frame_1000003444_lgswse.png",
      alt: "USA Flag",
      size: 64,
      direction: "clockwise",
      initialAngle: 30,
      distance: 220,
      speed: 35,
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/davidleo/image/upload/v1747748781/westernedge/smash-remit/Frame_1000003445_ua1ly4.png",
      alt: "UK Flag",
      size: 64,
      direction: "counterclockwise",
      initialAngle: 120,
      distance: 250,
      speed: 42,
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/davidleo/image/upload/v1747748781/westernedge/smash-remit/Frame_1000003443_alco1r.png",
      alt: "EU Flag",
      size: 64,
      direction: "clockwise",
      initialAngle: 210,
      distance: 210,
      speed: 38,
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/davidleo/image/upload/v1747748781/westernedge/smash-remit/Frame_1000003443_alco1r.png",
      alt: "Globe Icon",
      size: 64,
      direction: "counterclockwise",
      initialAngle: 300,
      distance: 230,
      speed: 40,
    },
  ];

  if (isInView) {
    controls.start("visible");
  }

  return (
    <div className="relative h-[790px] w-full overflow-hidden bg-[#0d0d2b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(70,70,220,0.1),rgba(10,10,50,0))]" />

      <div
        ref={ref}
        className="relative flex h-full flex-col justify-between md:flex-row"
      >
        {/* Left content */}
        <motion.div
          className="z-10 mt-30 mb-12 flex flex-col justify-center px-[103px] text-white md:mb-0 md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="mb-6 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empower Your Finances.
            <br />
            Anytime, Anywhere.
          </motion.h1>

          <motion.p
            className="mb-8 max-w-lg text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            SmashRemit makes sending, saving, and investing money across borders
            simple, fast, and secure.
          </motion.p>

          <>
            <motion.div
              className="mt-10 flex flex-col gap-3 md:flex-row"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="https://play.google.com/store/apps" passHref>
                <div className="flex h-[43px] w-[130px] items-center gap-1 rounded-md bg-white p-2 text-black">
                  <PlayStoreIcon className="h-6 w-6" />
                  <div className="flex flex-col leading-none">
                    <span className="text-xs">Get it on</span>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </div>
              </Link>
              <Link href="https://www.apple.com/app-store/" passHref>
                <div className="flex h-[43px] w-[130px] items-center gap-1 rounded-md bg-white p-2 text-black">
                  <AppleIcon className="h-5 w-5" />
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px]">Download on the</span>
                    <p className="text-xs font-bold">App Store</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Right content with animated phone */}
        <motion.div
          className="relative flex h-full items-end justify-center md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Circular background */}
          <div className="absolute bottom-0 -mb-[58%] flex size-[872px] items-center justify-center rounded-full bg-[#CEE6FE]">
            <div className="absolute z-10 flex size-[85%] rounded-full border-2 border-white">
              <Image
                src={circleIcons[0].src}
                alt={circleIcons[0].alt}
                width={circleIcons[0].size}
                height={circleIcons[0].size}
                className="absolute top-0 left-0 mt-[24%] rounded-full object-cover"
              />
              <Image
                src={circleIcons[3].src}
                alt={circleIcons[3].alt}
                width={circleIcons[3].size}
                height={circleIcons[3].size}
                className="absolute top-0 right-0 mt-[7%] mr-[13%] rounded-full object-cover"
              />
            </div>
            <div className="absolute z-10 size-[70%] rounded-full border-2 border-white">
              <Image
                src={circleIcons[2].src}
                alt={circleIcons[2].alt}
                width={circleIcons[2].size}
                height={circleIcons[2].size}
                className="absolute top-0 left-0 mt-[1%] ml-[18%] rounded-full object-cover"
              />
              <Image
                src={circleIcons[1].src}
                alt={circleIcons[1].alt}
                width={circleIcons[1].size}
                height={circleIcons[1].size}
                className="absolute top-0 right-0 mt-[26%] -mr-[1%] rounded-t-full object-cover"
              />
            </div>
          </div>
          {/* Phone Image */}
          <motion.div
            className="relative z-15 flex size-full items-end justify-end md:size-full"
            initial={{ y: 20 }}
            animate={{ y: -20 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Image
              src="https://res.cloudinary.com/davidleo/image/upload/v1747748785/westernedge/smash-remit/3b78cd423e5259037fbf22dfee7580087892e76e_c8mi4a.png"
              alt="SmashRemit App"
              fill
              className="relative z-10 mt-[15%] h-full w-full object-cover md:mt-[15%]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
