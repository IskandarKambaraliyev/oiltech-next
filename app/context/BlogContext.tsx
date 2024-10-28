"use client";

import { useLocale } from "next-intl";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import useApiRoute from "../hooks/useApiRoute";

export type BlogApi = {
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

type BlogContextType = {
  data: BlogApi[] | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

type BlogProviderProps = {
  children: ReactNode;
};

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [data, setData] = useState<BlogApi[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale();

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(useApiRoute("/blogs", locale), {
        cache: "default",
        next: {
          revalidate: 600,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch services");
      const result: BlogApi[] = await response.json();
      setData(result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BlogContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to use the BlogContext in any component
export const useBlogs = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }
  return context;
};
