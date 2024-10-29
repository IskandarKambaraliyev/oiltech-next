import { Link } from "@/i18n/routing";

import useDateFormatter from "@/app/hooks/useDateFormatter";

import { CalendarIcon } from "../Icons";
import Image from "next/image";
import { BlogResultsChild } from "@/types";

type Props = {
  item: BlogResultsChild;
};

const CardBlog = ({ item }: Props) => {
  return (
    <Link
      href={`/blogs/${item.id}`}
      className="flex flex-col gap-2 bg-white-100 hover:bg-white-200 text-white p-4 transition"
    >
      <div className="w-full aspect-[2/1]">
        <Image
          src={item.image}
          alt={`Blog card image of ${item.title}`}
          width={640}
          height={320}
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <h6 className="line-clamp-2 text-lg md:text-xl lg:text-2xl">
            {item.title}
          </h6>
          <p className="line-clamp-2 mt-2 text-white-500">{item.description}</p>
        </div>

        <div className="flex items-center gap-2">
          <CalendarIcon className="size-4" />
          <span className="text-white-500 text-sm">
            {useDateFormatter(item.date_time)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
