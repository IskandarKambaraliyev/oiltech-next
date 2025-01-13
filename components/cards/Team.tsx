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
        <img
          src={item.image}
          alt={`Card image of ${item.title}`}
          width={640}
          height={640}
          className="size-full object-cover object-top"
          loading="lazy"
        />
        {/* <Image
          src={item.image}
          alt={`Card image of ${item.title}`}
          width={640}
          height={640}
          className="size-full object-cover object-top"
          loading="lazy"
        /> */}
      </div>
      <div className="flex-1 bg-green-main p-4 lg:p-6 flex flex-col gap-4 text-white-main">
        <div>
          <h6 className="text-base md:text-lg font-semibold">{item.title}</h6>
          <p className="text-sm md:text-base text-white-600">
            {item.description}
          </p>
        </div>

        {item.telegram || item.linkedin ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default CardTeam;
