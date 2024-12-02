"use client";

import { FC, ReactNode, createContext, useContext, useState } from "react";

type VideoModalContextType = {
  src: string | null;
  setSrc: (src: string | null) => void;
};

const VideoModalContext = createContext<VideoModalContextType | undefined>(
  undefined
);

export const VideoModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [src, setSrc] = useState<string | null>(null);
  const values = {
    src,
    setSrc,
  };
  return (
    <VideoModalContext.Provider value={values}>
      {children}
    </VideoModalContext.Provider>
  );
};

// Custom hook to use the VideoModalContext in any component
export const useVideoModalStates = (): VideoModalContextType => {
  const context = useContext(VideoModalContext);
  if (context === undefined) {
    throw new Error("useBlogs must be used within a VideoModalProvider");
  }
  return context;
};
