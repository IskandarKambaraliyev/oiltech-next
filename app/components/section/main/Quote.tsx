import { useLocale } from "next-intl";
import React from "react";

const HomeQuote = () => {
  const locale = useLocale();

  const ruText = `"Oiltech Service" оказывает услуги по обеспечению рынка Узбекистана качественным нефтепродуктами, а также современными технологическими решениями и сервисами.`;
  const uzText = `Oiltech Service” kompaniyasi O‘zbekiston bozorini yuqori sifatli neft mahsulotlari, shuningdek, zamonaviy texnologik yechimlar va xizmatlar bilan ta’minlash bo‘yicha xizmatlar ko‘rsatadi.`;
  return (
    <section className="py-20 relative overflow-hidden">
      <svg
        width="663"
        height="551"
        viewBox="0 0 663 551"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 w-auto h-[calc(110%)] max-sm:hidden"
      >
        <path
          d="M568.562 47.5004H107.124C90.7218 47.5004 75.473 60.0466 72.9101 75.3675L0.381956 522.81C-4.35929 552.245 36.2616 561.655 54.4577 535.235L65.4779 519.311C72.0131 509.902 83.2896 503.87 94.4379 503.87H555.876C572.278 503.87 587.527 491.323 590.09 476.003L662.618 28.681C667.359 -0.754367 626.738 -10.164 608.542 16.2554L597.522 32.1795C590.987 41.5892 579.71 47.621 568.562 47.621V47.5004ZM384.038 367.067H249.233C232.831 367.067 221.683 354.521 224.117 339.2L244.748 212.29C247.183 196.849 262.56 184.423 278.962 184.423H413.767C430.169 184.423 441.317 196.969 438.883 212.29L418.252 339.2C415.817 354.642 400.44 367.067 384.038 367.067Z"
          fill="#00C6B7"
          fillOpacity="0.12"
        />
      </svg>

      <div className="container flex flex-col !max-w-[60rem]">
        <svg
          width="48"
          height="40"
          viewBox="0 0 48 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-8 md:size-12"
        >
          <path
            d="M16.2712 40H0L10.5763 0H22.7797L16.2712 40ZM41.4915 40H25.2203L35.7966 0H48L41.4915 40Z"
            fill="white"
          />
        </svg>

        <div className="px-8 md:px-12 text-lg sm:text-2xl lg:text-[2rem]">
          {locale === "ru" ? ruText : uzText}
        </div>

        <svg
          width="48"
          height="40"
          viewBox="0 0 48 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-8 md:size-12 ml-auto -mt-4"
        >
          <path
            d="M6.50847 0H22.7797L12.2034 40H0L6.50847 0ZM31.7288 0H48L37.4237 40H25.2203L31.7288 0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomeQuote;
