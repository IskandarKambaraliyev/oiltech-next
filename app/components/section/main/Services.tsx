"use client";

import React, { useEffect, useState } from "react";
import CustomSectionTitle from "../../custom/SectionTitle";
import { useTranslations } from "next-intl";
import CustomTitle from "../../custom/Title";
import { useServices, type ServicesApi } from "@/app/context/ServicesContext";
import { Link } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";

const HomeServices = () => {
  const t = useTranslations("Home");

  const { data } = useServices();

  if (data !== null && data.length !== 0) {
    return (
      <section>
        <div className="container flex flex-col gap-4">
          <CustomSectionTitle>{t("our_services")}</CustomSectionTitle>
          <CustomTitle>{t("main_services")}</CustomTitle>
        </div>

        <div className="flex flex-col mt-14">
          {data && data.map((item) => <Service key={item.id} item={item} />)}
        </div>
      </section>
    );
  }
};

export default HomeServices;

type ServiceProps = {
  item: ServicesApi;
};

function Service({ item }: ServiceProps) {
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);

  // calculate service's offsetTop and window scrollY
  useEffect(() => {
    const handleScroll = () => {
      const y = document.getElementById(item.slug)?.offsetTop;
      const h = document.getElementById(item.slug)?.clientHeight;

      if (y && h) {
        setTop(window.scrollY - y);
        setHeight(h);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href={`/products/catalog/${item.slug}`}
      className="relative"
      id={item.slug}
    >
      <MouseFollower top={top} height={height} />
      <img
        src={item.image}
        alt={`Service image of ${item.title}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(1, 66, 106, 0.2) 30.56%,rgba(1, 66, 106, 0.4) 33.01%,#01426a 116.13%)",
        }}
      ></div>

      <div className="container relative h-screen min-h-fit flex items-end pt-4 pb-8">
        <div className="sticky bottom-8 left-0">
          <h4 className="font-semibold text-2xl md:text-[2rem] lg:text-[3rem] max-w-[40rem] line-clamp-4 leading-tight">
            {item.title}
          </h4>
        </div>
      </div>
    </Link>
  );
}

const MouseFollower = ({ top, height }: { top: number; height: number }) => {
  const t = useTranslations("Home");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <AnimatePresence>
      {position.y + top < 0 || position.y + top > height ? null : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
          exit={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.1 }}
          style={{
            top: position.y + top,
            left: position.x,
            transform: "translate(-50%, -50%)",
          }}
          className="absolute size-[10rem] rounded-full bg-white-main text-blue-main pointer-events-none will-change-auto z-header-1 flex-center text-sm font-semibold"
        >
          {t("find_out_more")}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
