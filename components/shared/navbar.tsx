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

  // Define variants for the underline animation
  const underlineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { scaleX: 1, originX: 0 },
  };

  // Define variants for the button animation
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  // Define variants for modal animation
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
          {/* Logo and Brand Name */}
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
                whileHover="visible"
                initial="hidden"
              >
                <Link
                  href={link.href}
                  className="text-base font-medium text-white transition-colors hover:text-blue-400"
                >
                  {link.label}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-400"
                  variants={underlineVariants}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 flex w-full flex-col items-center justify-center bg-[#0d0d2b] px-4 py-8 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  className="relative"
                  whileHover="visible"
                  initial="hidden"
                >
                  <Link
                    href={link.href}
                    className="text-base font-medium text-white transition-colors hover:text-blue-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-400"
                    variants={underlineVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              ))}
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
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Modal for GetSmashRemitAppSection */}
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
