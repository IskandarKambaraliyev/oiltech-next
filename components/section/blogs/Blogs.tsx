import { BlogResults } from "@/types";
import { DialogComponent } from "@/components/DialogComponent";
import BlogCards from "../BlogCards";
import { useLocale } from "next-intl";

type Props = {
  data: BlogResults;
};
const BlogsList = ({ data }: Props) => {
  const locale = useLocale();
  return (
    <section className="-mt-12 mb-20 relative">
      <div className="container">
        {/* <BlogCards data={data} /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <DialogComponent key={item.id} item={item} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsList;
