"use client";

import useVideoId from "@/app/hooks/useVideoId";
import { YouTubeEmbed } from "@next/third-parties/google";
import { FC, useEffect, useState } from "react";

interface Props {
  data: string;
  className?: string;
}

const HtmlWithModifiedContent: FC<Props> = ({ data, className = "" }) => {
  const [modifiedHtml, setModifiedHtml] = useState<string>("");

  useEffect(() => {
    const processHtml = (html: string) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Handle <oembed> tags
      const oembeds = doc.querySelectorAll("oembed");
      oembeds.forEach((oembed) => {
        const url = oembed.getAttribute("url");
        if (url) {
          const videoIdMatch = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/);
          const videoId = videoIdMatch ? videoIdMatch[1] : null;
          if (videoId) {
            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.style.width = "100%";
            iframe.style.maxWidth = "800px";
            iframe.style.aspectRatio = "16/9";
            iframe.style.margin = "0 auto";
            iframe.frameBorder = "0";
            iframe.allow =
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            oembed.replaceWith(iframe);
          }
        }
      });

      // Modify <img> tags to add domain to relative URLs
      const images = doc.querySelectorAll("img");
      images.forEach((img) => {
        const src = img.getAttribute("src");
        if (src && !src.startsWith("http")) {
          img.setAttribute("src", `${process.env.NEXT_PUBLIC_BASE_URL}${src}`);
        }
      });

      return doc.body.innerHTML; // Return modified HTML
    };

    setModifiedHtml(processHtml(data));
  }, [data]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: modifiedHtml }}
      className={`dangerous-html ${className}`}
    />
  );
};

export default HtmlWithModifiedContent;
