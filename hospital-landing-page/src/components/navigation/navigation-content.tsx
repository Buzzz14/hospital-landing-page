"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { useContactQuery } from "@/hooks/useContactQuery";
import { useServicesQuery } from "@/hooks/useServicesQuery";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Drawer from "../drawer";

export type NavSubSubItem = {
  id: string;
  label: string;
};

export type NavSubItem = {
  id: string;
  label: string;
  subItems?: NavSubSubItem[];
};

export type NavItem = {
  id: string;
  label: string;
  subItems?: NavSubItem[];
};

const staticNavItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
    subItems: [
      { id: "about-us", label: "About Us" },
      { id: "our-team", label: "Our Team" },
    ],
  },
  {
    id: "services",
    label: "Services",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

const topBarVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 8 },
};
const midBarVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};
const botBarVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -8 },
};

const phoneRingKeyframes = [0, -16, 16, -16, 16, 0, -16, 16, -16, 16, 0, 0];

const phoneRingTimes = [
  0, 0.06, 0.12, 0.18, 0.24, 0.3, 0.36, 0.42, 0.48, 0.54, 0.6, 1,
];

const NavigationContent = () => {
  const { data: services } = useServicesQuery();
  const { data: contact } = useContactQuery();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const logoSrc = contact?.logo ?? "/mediciti-logo.png";

  const navItems: NavItem[] = staticNavItems.map((item) => {
    if (item.id === "services") {
      return {
        ...item,
        subItems: services?.map((service) => ({
          id: service.id,
          label: service.name,
        })),
      } satisfies NavItem;
    }
    return { ...item } satisfies NavItem;
  });

  return (
    <>
      <div className="flex items-center h-auto w-auto">
        <Image
          src={logoSrc}
          alt="Nepal Mediciti Logo"
          className="h-16 w-auto max-h-16"
          height={64}
          width={150}
        />
      </div>

      <ul className="hidden xl:flex gap-8 items-center font-bold">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="relative list-none h-full flex py-8"
            onMouseEnter={() => setOpenDropdown(item.subItems ? item.id : null)}
            onMouseLeave={() => {
              setOpenDropdown(null);
              setOpenSubDropdown(null);
            }}
          >
            <div className="flex gap-2 items-center text-base cursor-pointer hover:text-primary">
              {item.label}
              {item.subItems && (
                <FaChevronDown className="text-xs text-gray-600" />
              )}
            </div>

            <div
              className={`absolute left-0 top-full min-w-[170px] rounded shadow-lg bg-white z-20
          ${openDropdown === item.id ? "block" : "hidden"}`}
            >
              <ul className="flex flex-col py-2">
                {item.subItems &&
                  item.subItems.map((sub) => (
                    <div
                      key={sub.id}
                      className="relative group"
                      onMouseEnter={() =>
                        setOpenSubDropdown(
                          sub.subItems && sub.subItems.length > 0
                            ? sub.id
                            : null
                        )
                      }
                      onMouseLeave={() => setOpenSubDropdown(null)}
                    >
                      <li className="px-4 py-2 hover:text-primary text-sm cursor-pointer whitespace-nowrap flex items-center">
                        <span>{sub.label}</span>
                        {sub.subItems && sub.subItems.length > 0 && (
                          <FaChevronRight className="ml-2 text-xs text-gray-600" />
                        )}
                      </li>

                      {sub.subItems && sub.subItems.length > 0 && (
                        <div
                          className={`absolute top-0 left-full min-w-[170px] rounded shadow-lg bg-white z-30
                      ${openSubDropdown === sub.id ? "block" : "hidden"}`}
                          style={{ marginLeft: "0px" }}
                        >
                          <ul className="flex flex-col py-2">
                            {sub.subItems.map((subsub) => (
                              <li
                                key={subsub.id}
                                className="px-4 py-2 hover:text-primary text-sm cursor-pointer whitespace-nowrap"
                              >
                                {subsub.label}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden xl:flex items-center gap-4">
        <motion.div
          className="rounded-full inline-block p-3 bg-linear-to-l from-primary to-secondary"
          animate={{
            rotate: phoneRingKeyframes,
          }}
          transition={{
            duration: 2,
            times: phoneRingTimes,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <PiPhoneCallFill className="text-white text-3xl" />
        </motion.div>
        <div>
          <h2 className="capitalize text-sm text-gray-500 font-light">
            call any time
          </h2>
          <h1 className="font-bold font-poppins text-lg">
            {contact?.phone || "+977 - 01 - 421 7766"}
          </h1>
        </div>
      </div>

      {/* Hamburger Button  */}
      <button
        className="block xl:hidden border rounded border-gray-600 p-3 z-50 bg-white"
        type="button"
        aria-label={sidebarOpen ? "Close mobile menu" : "Open mobile menu"}
        onClick={() => setSidebarOpen((open) => !open)}
      >
        <motion.div
          className="relative w-5 h-5 flex flex-col items-center justify-center"
          initial={false}
          animate={sidebarOpen ? "open" : "closed"}
        >
          <motion.div
            className="absolute w-6 h-0.5 bg-gray-900 top-0"
            variants={topBarVariants}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <motion.div
            className="absolute w-6 h-0.5 bg-gray-900 top-2"
            variants={midBarVariants}
            transition={{ duration: 0.19 }}
          />
          <motion.div
            className="absolute w-6 h-0.5 bg-gray-900 top-4"
            variants={botBarVariants}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </motion.div>
      </button>

      {/* Drawer  */}
      <Drawer
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navItems={navItems}
      />
    </>
  );
};

export default NavigationContent;
