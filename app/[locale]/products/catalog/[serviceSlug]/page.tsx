import { CatalogPageProvider } from "@/app/context";
import useFetchData from "@/app/hooks/useFetchData";
import CatalogCategories from "@/components/section/products/Categories";
import CategoriesHero from "@/components/section/products/CategoriesHero";
import ProductsList from "@/components/section/products/List";
import { ServicesApi, ServicesChild } from "@/types";
import { Metadata } from "next";

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const services = await useFetchData<ServicesApi>("/services/", locale);

  if (!services) return [];

  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

type Props = {
  params: Promise<{ locale: string; serviceSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug, locale } = await params;

  const service = await useFetchData<ServicesChild>(
    `/services/${serviceSlug}/`,
    locale
  );
  if (!service) return {};
  return {
    title: service.title,
    openGraph: {
      images: [service.image],
    },
  };
}

export default async function ServiceCatalogPage({ params }: Props) {
  const { locale, serviceSlug } = await params;

  const service = await useFetchData<ServicesChild>(
    `/services/${serviceSlug}/`,
    locale
  );
  return (
    <CatalogPageProvider initialSlug={serviceSlug}>
      {service && <CategoriesHero data={service} />}

      <section className="py-8 text-blue-main">
        <div className="container flex gap-x-12 relative">
          <CatalogCategories className="max-lg:hidden" />

          <ProductsList />
        </div>
      </section>
    </CatalogPageProvider>
  );
}
