import { BlogApi } from "@/app/context/BlogContext";
import React from "react";

type Props = {
  item: BlogApi;
};

const CardBlog = ({ item }: Props) => {
  return <div>{item.title}</div>;
};

export default CardBlog;
