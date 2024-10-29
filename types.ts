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

export type AboutApi = {
  id: number;
  description: string;
  youtube_video: string;
  picture: string;
};

export type TeamApi = {
  id: number;
  title: string;
  image: string;
  description: string;
  linkedin: string | null;
  telegram: string | null;
}[];

export type AdvantegesApi = {
  id: number;
  number: number;
  postfix: string;
  description: string;
}[];

export type SlidesApi = {
  id: number;
  title: string;
  image: string;
  description: string | null;
  button_text: string | null;
  button_link: string | null;
  youtube_link: string | null;
}[];

export type BlogResultsChild = {
  id: number;
  title: string;
  image: string;
  service: {
    id: number;
    title: string;
    image: string;
  };
  date_time: string;
  description: string;
};
export type BlogResults = BlogResultsChild[];

export type BlogApi = {
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogResults;
};

export type ServicesChild = {
  id: number;
  title: string;
  image: string;
  slug: string;
};

export type ServicesApi = ServicesChild[];

export type DataApi = {
  id: number;
  catalog: string;
  address: string;
  map_link: string;
  phone_number1: string;
  phone_number2: string;
  email: string;
  working_hours: string;
  working_days: string;
  lunch_time: string;
  facebook: string;
  telegram: string;
  whatsapp: string;
  linkedin: string;
  instagram: string;
};
