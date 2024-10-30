// Blog API types
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

// BlogDetail API types
export type BlogDetailRelatedProduct = {
  product_id: number;
  image_url: string;
  product_title: string;
  product_description: string | null;
};
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
  related_products: BlogDetailRelatedProduct[];
};

// Application post API types
export type SubmitApplicationFormResponse = {
  status: "success" | "error";
  message: string;
  url?: string;
} | null;

// About API types
export type AboutApi = {
  id: number;
  description: string;
  youtube_video: string;
  picture: string;
};

// Team API types
export type TeamChild = {
  id: number;
  title: string;
  image: string;
  description: string;
  linkedin: string | null;
  telegram: string | null;
};
export type TeamApi = TeamChild[];

// Advantages API types
export type AdvantegesApi = {
  id: number;
  number: number;
  postfix: string;
  description: string;
}[];

// Slides API types
export type SlidesApi = {
  id: number;
  title: string;
  image: string;
  description: string | null;
  button_text: string | null;
  button_link: string | null;
  youtube_link: string | null;
}[];

// Services API types
export type ServicesChild = {
  id: number;
  title: string;
  image: string;
  slug: string;
};
export type ServicesApi = ServicesChild[];

// Data API types
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

export type CategoriesCategory = {
  id: number;
  title: string;
  children: CategoriesCategory[];
};

export type CategoriesAnotherCatalog = {
  id: number;
  title: string;
  img: string;
  slug: string;
};

export type CategoriesApi = {
  categories: CategoriesCategory[];
  another_catalog: CategoriesAnotherCatalog[];
};
