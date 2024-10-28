import BlogDeatail from "@/app/components/section/blogs/Detail";
import useApiRoute from "@/app/hooks/useApiRoute";

type BlogDetailApi = {
  id: number;
  title: string;
  description: string;
  service: {
    id: number;
    title: string;
    image: string;
  };
  date_time: string;
  image: string;
  related_products: {
    id: number;
    title: string;
    image: string;
    description: string | null;
  }[];
};

export default async function BlogDetailPage({
  params,
}: {
  params: { blogId: string; locale: "ru" | "uz" };
}) {
  const { locale, blogId } = await params;
  const data = (await fetch(useApiRoute(`/blogs/${blogId}`, locale), {
    cache: "force-cache",
    next: {
      revalidate: 600,
    },
  }).then((res) => res.json())) as BlogDetailApi;
  return (
    <div>
      <BlogDeatail data={data} />
    </div>
  );
}
