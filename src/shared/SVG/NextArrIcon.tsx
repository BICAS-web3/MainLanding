import { FC } from "react";

import { IIconInterface } from "./types";

export const NextArrIcon: FC<IIconInterface> = ({ className, onClick }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="12" fill="#202020" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.0735 27.4062L16.2957 25.5544L21.629 19.9988L16.2957 14.4433L18.0735 12.5914L25.1846 19.9988L18.0735 27.4062Z"
        fill="#7E7E7E"
      />
    </svg>
  );
};
