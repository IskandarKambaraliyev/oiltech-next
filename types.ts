export type BlogDetailApi = {
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
    product_id: number;
    image_url: string;
    product_title: string;
    product_description: string | null;
  }[];
};

export type SubmitApplicationFormResponse = {
  status: "success" | "error";
  message: string;
  url?: string;
};
