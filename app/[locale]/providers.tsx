import { ReactNode } from "react";
import { HeaderProvider } from "../context";

const Providers = ({ children }: { children: ReactNode }) => {
  return <HeaderProvider>{children}</HeaderProvider>;
};

export default Providers;
