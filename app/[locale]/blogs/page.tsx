import useFetchData from "@/app/hooks/useFetchData";
import BlogsList from "@/components/section/blogs/Blogs";
import BlogsHero from "@/components/section/blogs/Hero";
import { BlogResults } from "@/types";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Seo");

  return {
    title: t("blogs_title"),
    openGraph: { images: ["/blogs.png"] },
  };
}

export default async function BlogsPage({ params }: Props) {
  const { locale } = await params;

  const blog = await useFetchData<BlogResults>("/blogs", locale);
  return (
    <>
      <BlogsHero />

      {blog && <BlogsList data={blog} />}
    </>
  );
}
