import InterceptedModal from "@/components/InterceptedModal";
import BlogDeatail from "@/components/section/blogs/Detail";

import useApiRoute from "@/app/hooks/useApiRoute";

import { BlogDetailApi } from "@/types";

async function getData(locale: string, blogId: string) {
  return (await fetch(useApiRoute(`/blogs/${blogId}`, locale), {
    cache: "force-cache",
    next: {
      revalidate: 600,
    },
  }).then((res) => res.json())) as BlogDetailApi;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; blogId: string }>;
}) {
  const { locale, blogId } = await params;
  const data = await getData(locale, blogId);
  return (
    <div>
      <InterceptedModal>
        <BlogDeatail data={data} />
      </InterceptedModal>
    </div>
  );
}
