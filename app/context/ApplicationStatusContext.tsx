"use client";

import { createContext, useContext, useState, ReactNode, FC } from "react";
import { usePathname } from "@/i18n/routing";
import { SubmitApplicationFormResponse } from "@/types";

type ApplicationStatusContextType = {
  isOpen: boolean;
  setIsOpen: (sticky: boolean) => void;
  response: SubmitApplicationFormResponse;
  setResponse: (sticky: SubmitApplicationFormResponse) => void;
};

const ApplicationStatusContext = createContext<
  ApplicationStatusContextType | undefined
>(undefined);

type ApplicationStatusProviderProps = {
  children: ReactNode;
};

export const ApplicationStatusProvider: FC<ApplicationStatusProviderProps> = ({
  children,
}) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [response, setResponse] =
    useState<SubmitApplicationFormResponse>(null);

  return (
    <ApplicationStatusContext.Provider
      value={{ isOpen, setIsOpen, response, setResponse }}
    >
      {children}
    </ApplicationStatusContext.Provider>
  );
};

// Custom hook to use the ApplicationStatusContext in any component
export const useApplicationStatusStates = (): ApplicationStatusContextType => {
  const context = useContext(ApplicationStatusContext);
  if (context === undefined) {
    throw new Error("useBlogs must be used within a ApplicationStatusProvider");
  }
  return context;
};
