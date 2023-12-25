import { FC } from "react";

import { IIconInterface } from "./types";

export const GreenIcon: FC<IIconInterface> = ({ className, onClick }) => {
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
      <rect width="32" height="32" rx="16" fill="#0C2E22" />
      <path
        d="M17.2 15.6C17.2 18.6928 14.6928 21.2 11.6 21.2C8.5072 21.2 6 18.6928 6 15.6C6 12.5072 8.5072 10 11.6 10C14.6928 10 17.2 12.5072 17.2 15.6Z"
        fill="#00AB6C"
      />
      <path
        d="M22.8 15.6C22.8 18.6928 21.7255 21.2 20.4 21.2C19.0745 21.2 18 18.6928 18 15.6C18 12.5072 19.0745 10 20.4 10C21.7255 10 22.8 12.5072 22.8 15.6Z"
        fill="#00AB6C"
      />
      <path
        d="M25.1996 15.5998C25.1996 18.2508 24.8414 20.3998 24.3996 20.3998C23.9578 20.3998 23.5996 18.2508 23.5996 15.5998C23.5996 12.9488 23.9577 10.7998 24.3996 10.7998C24.8414 10.7998 25.1996 12.9488 25.1996 15.5998Z"
        fill="#00AB6C"
      />
    </svg>
  );
};