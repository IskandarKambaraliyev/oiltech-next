import InterceptedModal from "@/components/InterceptedModal";
import BlogDeatail from "@/components/section/blogs/Detail";

import { BlogDetailApi, BlogResults } from "@/types";
import useFetchData from "@/app/hooks/useFetchData";

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const blogs = await useFetchData<BlogResults>("/blogs", locale);

  return blogs.map((blog) => ({
    blogId: blog.id.toString(),
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; blogId: string }>;
}) {
  const { locale, blogId } = await params;

  const data = await useFetchData<BlogDetailApi>(`/blogs/${blogId}`, locale);
  return (
    <div>
      <InterceptedModal>
        <BlogDeatail data={data} />
      </InterceptedModal>
    </div>
  );
}
