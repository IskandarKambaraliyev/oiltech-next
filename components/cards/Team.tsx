import Image from "next/image";

import { LinkedinCircleIcon, TelegramCircleIcon } from "../Icons";

import { TeamChild } from "@/types";

type Props = {
  item: TeamChild;
};

const CardTeam = ({ item }: Props) => {
  return (
    <div className="h-full flex flex-col">
      <div className="w-full aspect-[1/1]">
        <Image
          src={item.image}
          alt={`Card image of ${item.title}`}
          width={200}
          height={200}
          className="size-full object-cover object-top grayscale-[1]"
        />
      </div>
      <div className="flex-1 bg-green-main p-4 lg:p-6 flex flex-col gap-4">
        <div>
          <h6>{item.title}</h6>
          <p>{item.description}</p>
        </div>

        <div className="flex items-center gap-2">
          {item.telegram && (
            <a href={item.telegram}>
              <TelegramCircleIcon />
            </a>
          )}
          {item.linkedin && (
            <a href={item.linkedin}>
              <LinkedinCircleIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
