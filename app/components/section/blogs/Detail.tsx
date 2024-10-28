import React from "react";
import { CalendarIcon } from "../../Icons";
import useDateFormatter from "@/app/hooks/useDateFormatter";

type Props = {
  data: {
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
};

const BlogDeatail = ({ data }: Props) => {
  return (
    <div className="container bg-white p-4 text-blue-main">
      <h1>{data.title}</h1>
      <div className="w-full">
        <img className="size-full object-cover" src={data.image} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: data.description }}></div>

      <div className="flex items-center gap-8">
        <div className="flex items-center">
          <CalendarIcon />
          <span>{useDateFormatter(data.date_time)}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDeatail;
