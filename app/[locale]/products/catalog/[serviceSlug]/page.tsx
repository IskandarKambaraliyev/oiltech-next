import { CatalogPageProvider } from "@/app/context";
import useFetchData from "@/app/hooks/useFetchData";
import CategoriesHero from "@/components/section/products/CategoriesHero";
import { ServicesChild } from "@/types";

type Props = {
  params: Promise<{ locale: string; serviceSlug: string }>;
};

export default async function ServiceCatalogPage({ params }: Props) {
  const { locale, serviceSlug } = await params;

  const service = await useFetchData<ServicesChild>(
    `/services/${serviceSlug}`,
    locale
  );
  return (
    <CatalogPageProvider initialSlug={serviceSlug}>
      <CategoriesHero data={service} />

      <section className="bg-[#f7f7f7] py-8 text-blue-main">
        <div className="container">Hello</div>
      </section>
    </CatalogPageProvider>
  );
}
