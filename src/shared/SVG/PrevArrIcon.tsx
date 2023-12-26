import { FC } from "react";

import { IIconInterface } from "./types";

export const PrevArrIcon: FC<IIconInterface> = ({ className, onClick }) => {
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
        d="M21.9256 12.5918L23.7033 14.4436L18.37 19.9992L23.7033 25.5548L21.9256 27.4066L14.8145 19.9992L21.9256 12.5918Z"
        fill="#7E7E7E"
      />
    </svg>
  );
};
