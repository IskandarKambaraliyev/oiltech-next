import Image from "next/image";
import { Link } from "@/i18n/routing";

type Props = {
  id: number;
  title: string;
  image: string;
  description: string | null;
};
const CardProduct = ({ id, title, image, description }: Props) => {
  return (
    <Link
      href={`/products/product/${id}`}
      className="flex flex-col gap-4 p-4 bg-white-500 border border-blue-100 hover:bg-blue-100 backdrop-blur-sm"
      style={{
        boxShadow: "0px 4px 27px 0px rgba(0, 0, 0, 0.03)",
      }}
    >
      <Image
        src={image}
        alt={`Product image of ${title}`}
        width={300}
        height={300}
        className="w-full h-auto object-contain !relative"
      />

      <div className="flex flex-col">
        <h6 className="font-semibold">{title}</h6>
        {description && <p className="text-blue-500 text-sm">{description}</p>}
      </div>
    </Link>
  );
};

export default CardProduct;
