import { LinkedinCircleIcon, TelegramCircleIcon } from "../Icons";

type Props = {
  item: {
    id: number;
    title: string;
    image: string;
    description: string;
    linkedin: string | null;
    telegram: string | null;
  };
};

const CardTeam = ({ item }: Props) => {
  return (
    <div className="h-full flex flex-col">
      <div className="w-full aspect-[1/1]">
        <img
          src={item.image}
          alt={`Team member Image of - ${item.title}`}
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
