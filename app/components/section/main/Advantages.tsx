"use client";

import useApiRoute from "@/app/hooks/useApiRoute";
import { cn } from "@/lib/utils";
import {
  motion,
  SpringOptions,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import CustomSectionTitle from "../../custom/SectionTitle";

type AdvantegesApi = {
  id: number;
  number: number;
  postfix: string;
  description: string;
}[];

const HomeAdvantages = () => {
  const locale = useLocale();
  const t = useTranslations("Home");

  const [data, setData] = useState<AdvantegesApi>([]);
  useEffect(() => {
    async function fetchData() {
      const res = (await fetch(useApiRoute("/statistic", locale), {
        cache: "default",
        next: {
          revalidate: 60,
        },
      }).then((res) => res.json())) as AdvantegesApi;
      setData(res);
    }
    fetchData();
  }, []);
  if (data !== null && data.length > 0) {
    return (
      <section className="py-20">
        <div className="container flex flex-col gap-8">
          <CustomSectionTitle>{t("advantages")}</CustomSectionTitle>

          <div className="w-full h-[1px] bg-green-main"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {data.map((item) => (
              <div key={item.id} className="flex flex-col items-start">
                <div className="text-[3rem] lg:text-[5rem] flex items-center leading-tight">
                  <AnimatedNumberInView to={item.number} />
                  <span>{item.postfix}</span>
                </div>

                <p className="">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default HomeAdvantages;

type AnimatedNumberInView = {
  to: number;
};

function AnimatedNumberInView({ to }: AnimatedNumberInView) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(to);
  }

  return (
    <div className="flex w-full items-center justify-center" ref={ref}>
      <AnimatedNumber
        className="inline-flex items-center"
        springOptions={{
          bounce: 0,
          duration: 3000,
        }}
        value={value}
      />
    </div>
  );
}

type AnimatedNumber = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
};

function AnimatedNumber({ value, className, springOptions }: AnimatedNumber) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className={cn("tabular-nums", className)}>
      {display}
    </motion.span>
  );
}
