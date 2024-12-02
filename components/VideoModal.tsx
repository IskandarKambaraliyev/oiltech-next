"use client";
import { YouTubeEmbed } from "@next/third-parties/google";
import { motion, AnimatePresence } from "framer-motion";
import { useVideoModalStates } from "@/app/context/VideoModalContext";
import useVideoId from "@/app/hooks/useVideoId";
import { useEffect, useState } from "react";
import { XIcon } from "./Icons";
import useClickOutside from "@/app/hooks/useClickOutside";

const VideoModal = () => {
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);
  const { src, setSrc } = useVideoModalStates();
  const videoId = useVideoId(src);

  useEffect(() => {
    if (src) {
      document.body.style.overflow = "hidden";

      const wrapper = document.querySelector<HTMLDivElement>(
        '[data-ntpc="YouTubeEmbed"]'
      );
      setWrapper(wrapper);
    } else {
      document.body.style.overflow = "auto";
      setWrapper(null);
    }
  }, [src]);

  useClickOutside(wrapper, () => {
    setSrc(null);
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <AnimatePresence>
      {src && videoId && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 size-full bg-blue-500 z-modal flex-center"
        >
          <button className="absolute top-4 right-4 size-8 bg-white text-blue-main hover:bg-green-main hover:text-white-main flex-center rounded-full z-[1]">
            <XIcon />
          </button>
          <div className="relative w-full">
            <YouTubeEmbed videoid={videoId} style="margin: 0 auto" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
