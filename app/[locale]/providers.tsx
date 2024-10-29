import { ReactNode } from "react";
import { HeaderProvider, ApplicationStatusProvider } from "../context";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <HeaderProvider>
      <ApplicationStatusProvider>{children}</ApplicationStatusProvider>
    </HeaderProvider>
  );
};

export default Providers;
