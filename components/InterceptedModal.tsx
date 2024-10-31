"use client";

// Importing Dependencies
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Importing Icons
import { XIcon } from "./Icons";
import useClickOutside from "@/app/hooks/useClickOutside";

type Props = {
  children: ReactNode;
};

const InterceptedModal = ({ children }: Props) => {
  const pathname = usePathname();

  const router = useRouter();

  useEffect(() => {
    if (!pathname.includes("/blogs/")) {
      window.location.reload();
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const target = useRef<HTMLDivElement | null>(null);

  useClickOutside(target, () => {
    router.back();
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 w-full h-screen z-modal bg-blue-500 backdrop-blur overflow-y-auto py-20"
    >
      <button className="absolute top-8 right-[var(--spacing-container)] size-8 rounded-full flex-center bg-white text-blue-main">
        <XIcon className="size-1/2" />
      </button>
      <div className="min-h-full h-fit flex-center" ref={target}>
        {children}
      </div>
    </motion.div>
  );
};

export default InterceptedModal;
