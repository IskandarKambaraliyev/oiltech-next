"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { XIcon } from "./Icons";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

const InterceptedModal = ({ children }: Props) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 w-full h-screen z-modal bg-black/40 overflow-y-auto py-20"
    >
      <button
        onClick={() => router.back()}
        className="absolute top-8 right-[var(--spacing-container)] size-8 rounded-full flex-center bg-white text-blue-main"
      >
        <XIcon className="size-1/2" />
      </button>
      {children}
    </motion.div>
  );
};

export default InterceptedModal;
