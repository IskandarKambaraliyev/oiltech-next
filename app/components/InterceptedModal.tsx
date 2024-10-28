"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { XIcon } from "./Icons";

type Props = {
  children: ReactNode;
};

const InterceptedModal = ({ children }: Props) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 w-full h-screen z-modal bg-black/40 overflow-y-auto py-20">
      <button
        onClick={() => router.back()}
        className="absolute top-8 right-4 size-8 rounded-full flex-center bg-white text-blue-main"
      >
        <XIcon className="size-1/2" />
      </button>
      {children}
    </div>
  );
};

export default InterceptedModal;
