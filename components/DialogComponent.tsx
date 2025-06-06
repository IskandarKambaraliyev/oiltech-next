import { CalendarIcon } from "lucide-react";

import useFetchData from "@/app/hooks/useFetchData";
import useDateFormatter from "@/app/hooks/useDateFormatter";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogContainer,
} from "@/components/AnimatedDialog";
import { ScrollArea } from "@/components/website/scroll-area";
import HtmlWithModifiedImages from "./custom/HtmlWithModifiedImages";
import CardProduct from "./cards/Product";

import { BlogDetailApi, BlogResultsChild } from "@/types";

type Props = {
  item: BlogResultsChild;
  locale: string;
};

export async function DialogComponent({ item, locale }: Props) {
  const data = await useFetchData<BlogDetailApi>(`/blogs/${item.id}/`, locale);

  if (data) {
    return (
      <Dialog
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 24,
        }}
        href={`/${locale}/blogs/${item.id}`}
      >
        <DialogTrigger className="bg-blue-100 hover:bg-blue-300 p-4 overflow-hidden backdrop-blur-sm">
          <DialogImage
            src={item.image}
            alt={`Image for - ${item.title}`}
            className="w-full aspect-[3/2] object-cover object-center"
          />

          <div className="mt-4">
            <DialogTitle className="text-base md:text-xl line-clamp-2">
              {item.title}
            </DialogTitle>
            <DialogSubtitle className="text-sm md:text-base line-clamp-2">
              {/* {item.description} */}
              <HtmlWithModifiedImages data={item.description} />
            </DialogSubtitle>
          </div>
        </DialogTrigger>
        <DialogContainer>
          <DialogContent className="relative h-auto w-full text-blue-main">
            <ScrollArea className="h-[100vh]" type="scroll">
              <div className="relative bg-white w-[calc(100%-2rem)] max-w-[75rem] mt-24 mb-28 mx-auto p-4 md:p-6">
                <div className="flex items-start gap-4">
                  <DialogTitle className="text-base md:text-[1.75rem] leading-tight font-semibold flex-1">
                    {data.title}
                  </DialogTitle>
                  <DialogClose className="text-white-main shrink-0" />
                </div>
                <DialogImage
                  src={data.image}
                  alt={`Image for - ${data.title}`}
                  className="w-full object-contain my-4"
                />
                <HtmlWithModifiedImages data={data.description} />
                {/* <DialogSubtitle>
                  <HtmlWithModifiedImages data={data.description} />
                </DialogSubtitle> */}

                {data.related_products && data.related_products.length > 0 && (
                  <div className="flex flex-col gap-2 mt-8">
                    <h6 className="font-semibold text-xl md:text-2xl">
                      {/* {t("Products.related_products")} */}
                    </h6>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {data.related_products.map((item) => (
                        <CardProduct
                          key={item.product_id}
                          id={item.product_id}
                          title={item.product_title}
                          image={item.image_url}
                          description={item.product_description}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-8 mt-8">
                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span className="text-blue-400">
                      {useDateFormatter(data.date_time)}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </DialogContainer>
      </Dialog>
    );
  } else return null;
}
