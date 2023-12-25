import { FC } from "react";

import { IIconInterface } from "./types";

export const FacebookIcon: FC<IIconInterface> = ({ className, onClick }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <rect width="32" height="32" rx="16" fill="#102C3E" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 16.0484C24 11.6038 20.4179 8 16 8C11.5821 8 8 11.6038 8 16.0484C8 20.0653 10.925 23.3949 14.75 23.9993V18.3755H12.7182V16.0484H14.75V14.2752C14.75 12.2584 15.9446 11.1435 17.7718 11.1435C18.6472 11.1435 19.5629 11.3009 19.5629 11.3009V13.2817H18.5535C17.5604 13.2817 17.2496 13.9019 17.2496 14.5392V16.0484H19.4683L19.114 18.3755H17.2501V24C21.075 23.3961 24 20.0664 24 16.0484Z"
        fill="#13A0F8"
      />
    </svg>
  );
};