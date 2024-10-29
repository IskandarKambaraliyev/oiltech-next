"use client";

import { useBlogs } from "@/app/context/BlogContext";

import CardBlog from "../cards/Blog";

type Props = {
  limit?: number | null;
};

const BlogCards = ({ limit = null }: Props) => {
  const { data } = useBlogs();

  if (data) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.slice(0, limit ? limit : data.length).map((item) => (
          <CardBlog key={item.id} item={item} />
        ))}
      </div>
    );
  }
};

export default BlogCards;
