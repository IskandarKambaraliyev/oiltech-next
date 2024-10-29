"use client";

import { BlogResults } from "@/types";
import BlogCards from "../BlogCards";

type Props = {
  data: BlogResults;
};
const BlogsList = ({ data }: Props) => {
  return (
    <section className="-mt-12 mb-20 relative">
      <div className="container">
        <BlogCards data={data} />
      </div>
    </section>
  );
};

export default BlogsList;
