"use client";

import React from "react";

interface Props {
  data: string;
}

const HtmlWithModifiedImages: React.FC<Props> = ({ data }) => {
  const addDomainToImageSrc = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Select all <img> elements
    const images = doc.querySelectorAll("img");
    images.forEach((img) => {
      const src = img.getAttribute("src");
      if (src && !src.startsWith("http")) {
        // Only modify non-absolute URLs
        img.setAttribute("src", `${process.env.NEXT_PUBLIC_BASE_URL}${src}`);
      }
    });

    return doc.body.innerHTML; // Return modified HTML
  };

  const modifiedHtml = addDomainToImageSrc(data);

  return <div dangerouslySetInnerHTML={{ __html: modifiedHtml }} />;
};

export default HtmlWithModifiedImages;
