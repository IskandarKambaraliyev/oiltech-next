// import { convert } from "html-to-text";

import BlogDeatail from "@/components/section/blogs/Detail";

import useApiRoute from "@/app/hooks/useApiRoute";

import { BlogDetailApi } from "@/types";

async function getData(locale: string, blogId: string) {
  return (await fetch(useApiRoute(`/blogs/${blogId}`, locale), {
    next: {
      revalidate: 600,
    },
  }).then((res) => res.json())) as BlogDetailApi;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; blogId: string }>;
}) {
  const { locale, blogId } = await params;

  const data = await getData(locale, blogId);
  return {
    title: data.title,
    description: data.description.slice(0, 300),
    image: data.image,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ blogId: string; locale: string }>;
}) {
  const { locale, blogId } = await params;
  const data = await getData(locale, blogId);
  return (
    <section className="py-28 bg-[#f7f7f7]">
      <BlogDeatail data={data} />
    </section>
  );
}
