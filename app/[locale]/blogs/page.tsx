import useFetchData from "@/app/hooks/useFetchData";
import BlogsList from "@/components/section/blogs/Blogs";
import BlogsHero from "@/components/section/blogs/Hero";
import { BlogResults } from "@/types";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};
export default async function BlogsPage({ params }: Props) {
  const { locale } = await params;

  const blog = await useFetchData<BlogResults>("/blogs", locale);
  return (
    <>
      <BlogsHero />
      <BlogsList data={blog} />
    </>
  );
}
