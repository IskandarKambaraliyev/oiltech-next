"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usePathname } from "@/i18n/routing";

type HeaderContextType = {
  sticky: boolean;
  setSticky: (sticky: boolean) => void;
  special: boolean;
  setSpecial: (special: boolean) => void;
  catalog: boolean;
  setCatalog: (catalog: boolean) => void;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

type HeaderProviderProps = {
  children: ReactNode;
};

export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
  const pathname = usePathname();

  const [sticky, setSticky] = useState<boolean>(false);
  const [special, setSpecial] = useState<boolean>(false);
  const [catalog, setCatalog] = useState<boolean>(false);

  function handleScroll() {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    setSpecial(pathname.includes("/blogs/"));

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <HeaderContext.Provider
      value={{ sticky, setSticky, special, setSpecial, catalog, setCatalog }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

// Custom hook to use the HeaderContext in any component
export const useHeaderStates = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useBlogs must be used within a HeaderProvider");
  }
  return context;
};
