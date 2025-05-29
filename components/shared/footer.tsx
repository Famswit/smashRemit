"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/config";
import FacebookIcon from "@/icons/facebook";
import InstagramIcon from "@/icons/instagram";
import TwitterIcon from "@/icons/twitter";

import MaxWidthContainer from "./max-width-container";

export default function Footer() {
  return (
    <MaxWidthContainer className="bg-[#000029] text-white">
      <motion.footer
        className="flex min-h-[300px] flex-col pt-6 pb-4 sm:pt-8 sm:pb-6 md:min-h-[435px] md:pt-12 md:pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Footer Content */}
        <div className="flex flex-1 flex-col gap-6 md:grid md:grid-cols-12 md:gap-8">
          {/* Logo Section */}
          <div className="col-span-12 flex justify-start md:col-span-3 md:justify-start">
            <Image
              src="/SmashRemitLogo.png"
              alt="SmashRemit Logo"
              width={150}
              height={30}
              className="h-auto w-full max-w-[150px] md:h-[35px] md:max-w-[181px]"
            />
          </div>

          {/* Links Section */}
          <div className="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-6 md:grid-cols-3 md:gap-20">
            {footerLinks.map((foot) => (
              <div
                key={foot.title}
                className="flex flex-col items-start gap-2 md:items-start"
              >
                <h4 className="text-lg font-semibold">{foot.title}</h4>
                <div className="flex flex-col items-start gap-1 md:items-start">
                  {foot.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.link}
                      className="text-center text-sm transition-colors hover:text-blue-400 md:text-left"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Social and Contact Section */}
          <div className="col-span-12 flex flex-col items-center gap-4 md:col-span-3 md:col-start-10 md:items-end">
            <div className="flex justify-center gap-4 md:justify-end">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FacebookIcon />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <InstagramIcon />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <TwitterIcon />
              </motion.div>
            </div>
            <h2 className="text-center text-sm md:text-right">
              contact@email.com
            </h2>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 flex h-auto items-center justify-center border-t border-[#0991FF] pt-4 md:mt-8 md:pt-6">
          <p className="text-sm">2025 SmashRemit. All rights reserved</p>
        </div>
      </motion.footer>
    </MaxWidthContainer>
  );
}
