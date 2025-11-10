"use client";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useContactQuery } from "@/hooks/useContactQuery";

import Acccordion from "./acccordion";
import { NavItem } from "./navigation/navigation-content";

type DrawerProps = {
  sidebarOpen: any;
  setSidebarOpen: any;
  navItems: NavItem[];
};

const Drawer = ({ sidebarOpen, setSidebarOpen, navItems }: DrawerProps) => {
  const { data: contact } = useContactQuery();

  const logoSrc = contact?.logo ?? "/mediciti-logo.png";

  const sidebarVariants = {
    hidden: { x: -320, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, bounce: 0, duration: 0.3 },
    },
    exit: { x: -320, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <div
              key="sidebar-overlay"
              className="fixed block xl:hidden inset-0 z-40 bg-black backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
              aria-label="Sidebar Overlay"
              style={{ opacity: 0.6, transition: "opacity 0.18s" }}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              className="fixed top-0 left-0 bottom-0 w-[240px] md:w-[300px] flex xl:hidden flex-col shadow-lg p-4 items-center bg-white z-50"
            >
              <Image
                src={logoSrc}
                alt="Nepal Mediciti Logo"
                className="h-16 w-auto max-h-16 mb-6"
                height={64}
                width={150}
              />

              <Acccordion setSidebarOpen={setSidebarOpen} navItems={navItems} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Drawer;
