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

type DataContextType = {
  data: DataApi | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataApi | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale();

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(useApiRoute("/data", locale), {
        cache: "force-cache",
        next: {
          revalidate: 3600,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch data");
      const result: DataApi = await response.json();
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
    <DataContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the DataContext in any component
export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
