import { FC } from "react";

interface MainProps {
  children: any;
}

export const Main: FC<MainProps> = ({ children }) => {
  return <>{children}</>;
};
