import { BlogApi } from "@/app/context/BlogContext";
import { Link } from "@/i18n/routing";
import React from "react";

type Props = {
  item: BlogApi;
};

const CardBlog = ({ item }: Props) => {
  return <Link href={`/blogs/${item.id}`}>{item.title}</Link>;
};

export default CardBlog;
