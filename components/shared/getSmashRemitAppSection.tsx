"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import AppleIcon from "@/icons/apple";
import PlayStoreIcon from "@/icons/left-left-icon";

import CloseButton from "../ui/closeButton";

const GetSmashRemitAppSection = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[95%] overflow-hidden rounded-lg shadow-lg sm:max-w-[70%] md:max-w-[90%] lg:max-w-[80%]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-full rounded-lg py-5 sm:py-10"
        style={{
          background: "linear-gradient(185deg, #CEE6FE 30%, #31BAB0 100%)",
        }}
      >
        <div className="absolute top-4 right-4 z-20">
          <CloseButton onClose={onClose} />
        </div>

        <div className="flex flex-col gap-8 px-4 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:px-10">
          {/* Left Column (Text and Badges) */}
          <div className="w-full md:w-full lg:w-1/2">
            <motion.div className="w-fit rounded-sm bg-black/80 p-2">
              <Image
                src="/SmashRemitLogo.png"
                alt="SmashRemit Logo"
                width={100}
                height={20}
                className="h-auto w-[80px] sm:w-[100px]"
              />
            </motion.div>

            <motion.h1
              className="mt-6 mb-4 text-xl font-bold text-[#000029] sm:text-2xl md:text-3xl lg:text-4xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get the SmashRemit App
            </motion.h1>
            <motion.p
              className="mt-2 mb-6 w-full px-2 text-xs text-[#000029] sm:px-0 sm:text-sm md:text-base lg:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Download the SmashRemit app to experience secure money transfers,
              manage multiple currencies, invest wisely, and pay bills – all
              from one easy-to-use platform.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-row flex-wrap gap-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="https://play.google.com/store/apps" passHref>
                <div className="flex h-[43px] w-[130px] items-center justify-center gap-1 rounded-md bg-transparent p-2 text-black ring-1 ring-black">
                  <PlayStoreIcon className="h-6 w-6" />
                  <div className="flex flex-col leading-none">
                    <span className="text-xs">Get it on</span>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </div>
              </Link>
              <Link href="https://www.apple.com/app-store/" passHref>
                <div className="flex h-[43px] w-[130px] items-center gap-1 rounded-md bg-transparent p-2 text-black ring-1 ring-black">
                  <AppleIcon className="h-5 w-5" />
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px]">Download on the</span>
                    <p className="text-xs font-bold">App Store</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column (Phone Images) */}

          <div className="relative hidden h-[350px] w-full items-end justify-center lg:flex lg:h-[400px] lg:w-1/2">
            <motion.div
              className="relative h-full w-full"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Phone 2 (Card)  */}
              <div className="absolute right-0 bottom-0 z-10 h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] xl:-mt-[400px]">
                <Image
                  src="/cardPhone.png"
                  alt="SmashRemit App Phone 2"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Phone 1 (Wallet) */}
              <div className="absolute bottom-0 -left-[15%] z-0 h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] xl:-mt-[400px]">
                <Image
                  src="/walletPhone.png"
                  alt="SmashRemit App Phone 1"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetSmashRemitAppSection;
