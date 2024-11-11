import { useTranslations } from "next-intl";

// Importing Components
import CustomSectionTitle from "./custom/SectionTitle";
import CustomTitle from "./custom/Title";
import ApplicationForm from "./ApplicationForm";

// Importing Icons
import {
  FacebookOutlinedIcon,
  GlobeIcon,
  InstagramOutlinedIcon,
  LinkedinOutlinedIcon,
  MailICon,
  NavigationIcon,
  PhoneICon,
  TelegramOutlinedIcon,
  TimerIcon,
  WhatsappOutlinedIcon,
} from "./Icons";
import { DataApi } from "@/types";

type Props = {
  data: DataApi;
};

const Footer = ({ data }: Props) => {
  const t = useTranslations();
  if (data !== null) {
    return (
      <footer id="contacts" className="pt-12 pb-8 text-white footer">
        <div className="container relative">
          <div className="mb-8">
            <CustomSectionTitle>{t("Footer.title")}</CustomSectionTitle>
            <CustomTitle>{t("Footer.contacts")}</CustomTitle>
          </div>

          <FooterLinks data={data} />

          <div className="w-full h-[1px] bg-white-300 my-10"></div>

          <div className="flex max-[1024px]:flex-col-reverse gap-x-4 gap-y-8 items-start">
            <div className="max-[1024px]:w-full w-[20rem]">
              <h6 className="mb-2 font-semibold text-lg lg:text-xl">
                {t("Form.title")}
              </h6>
              <ApplicationForm />
            </div>

            <div className="flex-1 max-[1024px]:w-full">
              <iframe
                src="https://yandex.com/map-widget/v1/?ll=69.282440%2C41.296180&mode=search&oid=110181046271&ol=biz&z=17"
                width="560"
                height="365"
                allowFullScreen={true}
                className="w-full max-[450px]:h-[250px] min-[450px]:h-[340px]"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
                title="Yandex Map"
              ></iframe>
            </div>
          </div>

          <p className="text-center text-white-500 mt-16">{t("Footer.text")}</p>
        </div>
      </footer>
    );
  }
};

export default Footer;

type FooterLinksProps = {
  data: DataApi;
};
function FooterLinks({ data }: FooterLinksProps) {
  const t = useTranslations("Footer");

  if (data !== null) {
    return (
      <div className="flex items-start flex-wrap gap-x-16 gap-y-12">
        <div className="max-sm:w-full sm:min-w-[20rem] sm:flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-main">
            <NavigationIcon className="size-6" />
            <span>{t("address")}</span>
          </div>

          <a
            href={data.map_link}
            target="_blank"
            className="font-semibold text-base lg:text-xl"
          >
            {data.address}
          </a>
        </div>

        <div className="w-fit flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-main">
            <PhoneICon className="size-6" />
            <span>{t("phone")}</span>
          </div>

          <div className="flex flex-col">
            <a
              href={`tel:${data.phone_number1}`}
              target="_blank"
              className="font-semibold text-base lg:text-xl"
            >
              {data.phone_number1}
            </a>
            <a
              href={`tel:${data.phone_number2}`}
              target="_blank"
              className="font-semibold text-base lg:text-xl"
            >
              {data.phone_number2}
            </a>
          </div>
        </div>

        <div className="w-fit flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-main">
            <MailICon className="size-6" />
            <span>{t("email")}</span>
          </div>

          <a
            href={`mailto:data.email`}
            target="_blank"
            className="font-semibold text-base lg:text-xl"
          >
            {data.email}
          </a>
        </div>

        <div className="w-fit flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-main">
            <TimerIcon className="size-6" />
            <span>{t("working_hours")}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm lg:text-base">{data.working_days}</span>
            <span className="font-semibold text-base lg:text-xl">
              {data.working_hours}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm lg:text-base">{t("lunch")}</span>
            <span className="font-semibold text-base lg:text-xl">
              {data.lunch_time}
            </span>
          </div>
        </div>

        <div className="w-fit flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-main">
            <GlobeIcon className="size-6" />
            <span>{t("socials")}</span>
          </div>

          <div className="flex items-center gap-4">
            {data.facebook && (
              <a
                href={data.facebook}
                target="_blank"
                className="hover:text-green-main"
              >
                <FacebookOutlinedIcon />
              </a>
            )}
            {data.telegram && (
              <a
                href={data.telegram}
                target="_blank"
                className="hover:text-green-main"
              >
                <TelegramOutlinedIcon />
              </a>
            )}
            {data.whatsapp && (
              <a
                href={data.whatsapp}
                target="_blank"
                className="hover:text-green-main"
              >
                <WhatsappOutlinedIcon />
              </a>
            )}
            {data.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                className="hover:text-green-main"
              >
                <LinkedinOutlinedIcon />
              </a>
            )}
            {data.instagram && (
              <a
                href={data.instagram}
                target="_blank"
                className="hover:text-green-main"
              >
                <InstagramOutlinedIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
