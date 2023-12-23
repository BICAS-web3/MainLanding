import { FC } from "react";

import { IIconInterface } from "./types";

export const USDTIcon: FC<IIconInterface> = ({ className, onClick }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12.5" cy="12" r="12" fill="#50AF95" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.8433 13.3728C13.7683 13.3786 13.3807 13.4026 12.5163 13.4026C11.8288 13.4026 11.3406 13.3812 11.1694 13.3728C8.51239 13.2516 6.52917 12.7723 6.52917 12.1985C6.52917 11.6246 8.51239 11.1459 11.1694 11.0229V12.8954C11.3431 12.9084 11.8407 12.9388 12.5282 12.9388C13.3532 12.9388 13.7664 12.9032 13.8408 12.896V11.0242C16.4921 11.1466 18.471 11.6259 18.471 12.1985C18.471 12.771 16.4928 13.2503 13.8408 13.3721L13.8433 13.3728ZM13.8433 10.8305V9.15485H17.5434V6.59961H7.46921V9.15485H11.1688V10.8298C8.16175 10.973 5.90039 11.5903 5.90039 12.3299C5.90039 13.0696 8.16175 13.6863 11.1688 13.8301V19.1996H13.8426V13.8281C16.8428 13.685 19.1004 13.0683 19.1004 12.3293C19.1004 11.5903 16.8447 10.9736 13.8426 10.8298L13.8433 10.8305Z"
        fill="#EAEAEA"
      />
    </svg>
  );
};
