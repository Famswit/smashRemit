"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import GetSmashRemitAppSection from "./getSmashRemitAppSection";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const mobileMenuVariants = {
    hidden: { translateX: "100%", opacity: 0, scale: 0.9 },
    visible: { translateX: "0%", opacity: 1, scale: 1 },
    exit: { translateX: "100%", opacity: 0, scale: 0.9 },
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 z-50 w-full bg-[#0d0d2b] shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20">
          <div className="flex items-center">
            <Image
              src="/SmashRemitLogo.png"
              alt="SmashRemit Logo"
              width={150}
              height={30}
              className="h-[30px] w-[150px] text-white md:h-[35px] md:w-[181px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <motion.div
                key={link.label}
                className="relative"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <Link href={link.href} className="block">
                  <motion.span
                    className="text-base font-medium text-white"
                    variants={{
                      rest: { color: "#ffffff" },
                      hover: { color: "#60a5fa" },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-blue-400"
                  variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden items-center md:flex">
            <motion.div
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Button
                className="rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                onClick={toggleModal}
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <motion.div
            className="absolute inset-0 bg-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMobileMenu}
          />

          <motion.div
            className="absolute top-0 right-0 h-full w-[350px] bg-white px-6 py-16 shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <nav className="flex flex-col items-start gap-10 pt-12">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  className="relative"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <Link
                    href={link.href}
                    className="block"
                    onClick={toggleMobileMenu}
                  >
                    <motion.span
                      className="text-base font-medium text-black"
                      variants={{
                        rest: { color: "#000000" },
                        hover: { color: "#60a5fa" },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-400"
                    variants={{
                      rest: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              ))}

              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="mt-6 text-center"
              >
                <Button
                  className="w-[300px] rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                  onClick={toggleModal}
                >
                  Get Started
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black px-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          transition={{ duration: 0.3 }}
        >
          <GetSmashRemitAppSection onClose={closeModal} />
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
