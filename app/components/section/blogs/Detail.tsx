import React from "react";
import { CalendarIcon } from "../../Icons";
import useDateFormatter from "@/app/hooks/useDateFormatter";
import { cn } from "@/lib/utils";
import HtmlWithModifiedImages from "../../custom/HtmlWithModifiedImages";
import { BlogDetailApi } from "@/types";

type Props = {
  data: BlogDetailApi;
  className?: string;
};

const BlogDeatail = ({ data, className }: Props) => {
  return (
    <div
      className={cn(
        "container !max-w-[75rem] bg-white p-4 md:p-6 text-blue-main",
        className
      )}
    >
      <h1>{data.title}</h1>
      <div className="w-full aspect-[2/1] my-4">
        <img className="size-full object-cover" src={data.image} />
      </div>

      <HtmlWithModifiedImages data={data.description} />

      <div className="flex items-center gap-8 mt-8">
        <div className="flex items-center gap-2">
          <CalendarIcon />
          <span className="text-blue-400">
            {useDateFormatter(data.date_time)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogDeatail;
