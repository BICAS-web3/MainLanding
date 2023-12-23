import { FC } from "react";

import { IIconInterface } from "./types";

export const TelegramIcon: FC<IIconInterface> = ({ className, onClick }) => {
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
      <rect width="32" height="32" rx="16" fill="#172F39" />
      <path
        d="M21.9573 11.1835L19.6937 22.2153C19.5229 22.9939 19.0775 23.1876 18.4447 22.8208L14.9957 20.1944L13.3315 21.8485C13.1473 22.0388 12.9933 22.198 12.6383 22.198L12.8861 18.568L19.2784 12.5988C19.5564 12.3427 19.2182 12.2008 18.8465 12.4569L10.944 17.5991L7.54191 16.4987C6.80189 16.2599 6.7885 15.7339 7.69594 15.3671L21.0029 10.0692C21.6191 9.83046 22.1582 10.2111 21.9573 11.1835Z"
        fill="#37AEE2"
      />
    </svg>
  );
};
