"use client";

import { motion, type Variants } from "motion/react";

import { useState, useEffect } from "react";
import NavigationContent from "./navigation-content";

const navbarVariants: Variants = {
  hidden: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const SCROLL_THRESHOLD = 60; // pixels

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="bg-background flex items-center justify-between p-4 xl:px-36 shadow-lg fixed top-0 left-0 right-0 z-100 w-full"
      initial="hidden"
      animate={showNavbar ? "visible" : "hidden"}
      variants={navbarVariants}
      style={{ willChange: "transform" }}
    >
      <NavigationContent />
    </motion.nav>
  );
};

export default Navigation;
