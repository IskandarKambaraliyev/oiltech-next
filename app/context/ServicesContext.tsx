"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
import { useLocale } from "next-intl";

import useApiRoute from "../hooks/useApiRoute";

export type ServicesApi = {
  id: number;
  title: string;
  image: string;
  slug: string;
};

type ServicesContextType = {
  data: ServicesApi[] | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
};

const ServicesContext = createContext<ServicesContextType | undefined>(
  undefined
);

type ServicesProviderProps = {
  children: ReactNode;
};

export const ServicesProvider: FC<ServicesProviderProps> = ({ children }) => {
  const [data, setData] = useState<ServicesApi[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale();

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(useApiRoute("/services", locale), {
        cache: "force-cache",
        next: {
          revalidate: 600,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch services");
      const result: ServicesApi[] = await response.json();
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
    <ServicesContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </ServicesContext.Provider>
  );
};

// Custom hook to use the ServicesContext in any component
export const useServices = (): ServicesContextType => {
  const context = useContext(ServicesContext);
  if (context === undefined) {
    throw new Error("useServices must be used within a ServicesProvider");
  }
  return context;
};
