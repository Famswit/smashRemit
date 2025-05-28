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
      className="relative h-[500px] max-w-[70%] overflow-hidden rounded-lg shadow-lg"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="h-[500px] w-[1041px] rounded-lg"
        style={{
          background: "linear-gradient(185deg, #CEE6FE 30%, #31BAB0 100%)",
        }}
      >
        <CloseButton onClose={onClose} />
        <div className="flex gap-50 p-5 md:flex-row lg:p-20">
          {/* Left Column (Text and Badges) */}
          <div className="mb-6 w-full md:mb-5 md:w-[50%]">
            <motion.div className="mb-7 w-fit rounded-sm bg-black/80 p-2">
              <Image
                src="/SmashRemitLogo.png"
                alt="SmashRemit Logo"
                width={100}
                height={20}
                className=""
              />
            </motion.div>

            <motion.h1
              className="mb-4 text-2xl font-bold text-[#000029] md:text-4xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get the SmashRemit App
            </motion.h1>
            <motion.p
              className="mt-5 mb-6 w-[75%] p-2 text-sm text-[#000029] md:text-lg lg:w-full lg:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Download the SmashRemit app to experience secure money transfers,
              manage multiple currencies, invest wisely, and pay bills – all
              from one easy-to-use platform.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-3 md:flex-row"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="https://play.google.com/store/apps" passHref>
                <div className="xs:mx-[60px] flex h-[43px] w-[130px] items-center justify-center gap-1 rounded-md bg-transparent p-2 text-black ring-1 ring-black">
                  <PlayStoreIcon className="h-6 w-6" />
                  <div className="flex flex-col leading-none">
                    <span className="text-xs">Get it on</span>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </div>
              </Link>
              <Link href="https://www.apple.com/app-store/" passHref>
                <div className="xs:mx-[60px] flex h-[43px] w-[130px] items-center gap-1 rounded-md bg-transparent p-2 text-black ring-1 ring-black">
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
          <div className="mt-29 flex w-full items-end md:w-[30%]">
            <motion.div
              className="flex justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="relative flex items-center justify-center">
                <Image
                  src="/cardPhone.png"
                  alt="SmashRemit App Phone 2"
                  width={280}
                  height={400}
                  className="rounded-lg object-cover"
                  style={{ position: "relative", zIndex: 1 }}
                />
                <Image
                  src="/walletPhone.png"
                  alt="SmashRemit App Phone 1"
                  width={280}
                  height={400}
                  className="-ml-14 rounded-lg object-cover"
                  style={{
                    transform: "translateX(-150px)",
                    position: "absolute",
                    zIndex: 0,
                  }}
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
