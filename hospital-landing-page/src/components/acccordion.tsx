"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronDown } from "react-icons/fa";
import {
  NavItem,
  NavSubItem,
  NavSubSubItem,
} from "./navigation/navigation-content";

type AccordionProps = {
  setSidebarOpen: any;
  navItems: NavItem[];
};

const Acccordion = ({ setSidebarOpen, navItems }: AccordionProps) => {
  const [sidebarAccordion, setSidebarAccordion] = useState<string | null>(null);
  const [sidebarSubAccordion, setSidebarSubAccordion] = useState<string | null>(
    null
  );

  const accordionMotion = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] as const },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const subAccordionMotion = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.17, ease: [0.4, 0, 0.2, 1] as const },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.17, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <>
      <div
        className="flex-1 w-full overflow-y-auto"
        style={{
          minHeight: 0,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <ul className="flex flex-col gap-4 items-center w-full font-bold no-scrollbar">
          {navItems.map((item) => {
            const hasSubs = !!item.subItems?.length;
            const isAccordionOpen = sidebarAccordion === item.id;

            return (
              <li
                key={item.id}
                className="flex flex-col w-full border-b border-gray-400 py-4"
              >
                <div
                  className="flex items-center justify-between w-full cursor-pointer px-2"
                  onClick={() => {
                    if (hasSubs) {
                      setSidebarAccordion(isAccordionOpen ? null : item.id);
                      setSidebarSubAccordion(null);
                    } else {
                      setSidebarOpen(false);
                    }
                  }}
                >
                  <span className="text-base hover:text-primary">
                    {item.label}
                  </span>
                  {hasSubs && (
                    <FaChevronDown
                      className={`text-xs text-gray-600 ml-2 transition-transform duration-200 ${
                        isAccordionOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                <AnimatePresence initial={false}>
                  {hasSubs && (
                    <motion.div
                      key={item.id}
                      initial="closed"
                      animate={isAccordionOpen ? "open" : "closed"}
                      exit="closed"
                      variants={accordionMotion}
                      style={{ overflow: "hidden" }}
                    >
                      {isAccordionOpen && (
                        <ul className="flex flex-col p-4">
                          {item.subItems &&
                            item.subItems.map((sub: NavSubItem) => {
                              const hasSubSubs = !!sub.subItems?.length;
                              const isSubAccordionOpen =
                                sidebarSubAccordion === sub.id &&
                                isAccordionOpen;
                              return (
                                <li
                                  key={sub.id}
                                  className="flex flex-col w-full"
                                >
                                  <div
                                    className="flex items-center justify-between w-full cursor-pointer py-2"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (hasSubSubs) {
                                        setSidebarSubAccordion(
                                          isSubAccordionOpen ? null : sub.id
                                        );
                                      } else {
                                        setSidebarOpen(false);
                                      }
                                    }}
                                  >
                                    <span className="text-sm hover:text-primary">
                                      {sub.label}
                                    </span>
                                    {hasSubSubs && (
                                      <FaChevronDown
                                        className={`text-xs text-gray-600 ml-2 transition-transform duration-200 ${
                                          isSubAccordionOpen ? "rotate-180" : ""
                                        }`}
                                      />
                                    )}
                                  </div>

                                  <AnimatePresence initial={false}>
                                    {hasSubSubs && (
                                      <motion.div
                                        key={sub.id}
                                        initial="closed"
                                        animate={
                                          isSubAccordionOpen ? "open" : "closed"
                                        }
                                        exit="closed"
                                        variants={subAccordionMotion}
                                        style={{ overflow: "hidden" }}
                                      >
                                        {isSubAccordionOpen && (
                                          <ul className="flex flex-col pl-4">
                                            {sub.subItems?.map(
                                              (subsub: NavSubSubItem) => (
                                                <li
                                                  key={subsub.id}
                                                  className="py-2 text-sm hover:text-primary cursor-pointer"
                                                  onClick={() =>
                                                    setSidebarOpen(false)
                                                  }
                                                >
                                                  {subsub.label}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </li>
                              );
                            })}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Acccordion;
