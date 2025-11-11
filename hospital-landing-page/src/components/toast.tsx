"use client";

import { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

type ToastVariant = "success" | "error" | "info";

type ToastProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  variant?: ToastVariant;
  autoHideDurationMs?: number;
  position?: "top" | "bottom" | "top-right" | "bottom-right";
};

const variantClasses: Record<ToastVariant, string> = {
  success: "bg-green-600 text-white",
  error: "bg-red-600 text-white",
  info: "bg-gray-900 text-white",
};

const MotionToast = ({
  open,
  onClose,
  children,
  variant = "info",
  autoHideDurationMs = 3000,
  position = "top",
}: ToastProps) => {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, autoHideDurationMs);
    return () => clearTimeout(t);
  }, [open, onClose, autoHideDurationMs]);

  const isTop = position === "top" || position === "top-right";
  const isRight = position === "top-right" || position === "bottom-right";

  return (
    <div className="pointer-events-none fixed inset-0 z-1000 flex">
      <div
        className={[
          "w-full flex px-4",
          isTop ? "items-start mt-4" : "items-end mb-6",
          isRight ? "justify-end" : "justify-center",
        ].join(" ")}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                x: isRight ? 48 : 0,
                y: isRight ? 0 : isTop ? -24 : 24,
                scale: 0.98,
              }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                x: isRight ? 48 : 0,
                y: isRight ? 0 : isTop ? -24 : 24,
                scale: 0.98,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={[
                "pointer-events-auto rounded-lg shadow-lg px-4 py-3 text-sm font-medium",
                "max-w-md w-full",
                variantClasses[variant],
              ].join(" ")}
              role="status"
              aria-live="polite"
              onClick={onClose}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MotionToast;
