import CardBlog from "../cards/Blog";
import { BlogResults } from "@/types";

type Props = {
  data: BlogResults;
};

const BlogCards = ({ data }: Props) => {
  if (data !== null) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <CardBlog key={item.id} item={item} />
        ))}
      </div>
    );
  }
};

export default BlogCards;
