import { ReactNode } from "react";
import {
  HeaderProvider,
  ApplicationStatusProvider,
  VideoModalProvider,
} from "../context";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <HeaderProvider>
      <VideoModalProvider>
        <ApplicationStatusProvider>{children}</ApplicationStatusProvider>
      </VideoModalProvider>
    </HeaderProvider>
  );
};

export default Providers;
