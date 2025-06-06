import { convert } from "html-to-text";

import BlogDeatail from "@/components/section/blogs/Detail";

import { BlogDetailApi, BlogResults } from "@/types";
import useFetchData from "@/app/hooks/useFetchData";
import { Metadata } from "next";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const blogs = await useFetchData<BlogResults>("/blogs/", locale);

  if (!blogs) return [];
  return blogs.map((blog) => ({
    blogId: blog.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; blogId: string }>;
}): Promise<Metadata> {
  const { locale, blogId } = await params;

  const data = await useFetchData<BlogDetailApi>(`/blogs/${blogId}/`, locale);

  if (!data) return {};
  return {
    title: data.title,
    description: convert(data.description).slice(0, 300),
    openGraph: {
      images: [data.image],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ blogId: string; locale: string }>;
}) {
  const { locale, blogId } = await params;
  const data = await useFetchData<BlogDetailApi>(`/blogs/${blogId}/`, locale);
  return (
    <section className="py-28">{data && <BlogDeatail data={data} />}</section>
  );
}
