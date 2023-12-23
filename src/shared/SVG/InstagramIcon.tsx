import { FC } from "react";

import { IIconInterface } from "./types";

export const InstagramIcon: FC<IIconInterface> = ({ className, onClick }) => {
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
      <rect width="32" height="32" rx="16" fill="#391627" />
      <path
        d="M19.8 9H12.6C10.6202 9 9 10.6195 9 12.6V19.8C9 21.7798 10.6202 23.4 12.6 23.4H19.8C21.7798 23.4 23.4 21.7798 23.4 19.8V12.6C23.4 10.6195 21.7798 9 19.8 9ZM16.2 19.1999C14.5429 19.1999 13.1999 17.8564 13.1999 16.2C13.1999 14.5429 14.5429 13.1999 16.2 13.1999C17.8563 13.1999 19.2 14.5429 19.2 16.2C19.2 17.8564 17.8563 19.1999 16.2 19.1999ZM20.1 13.1999C19.6025 13.1999 19.2 12.7969 19.2 12.2999C19.2 11.803 19.6025 11.3999 20.1 11.3999C20.5976 11.3999 21 11.803 21 12.2999C21 12.7969 20.5976 13.1999 20.1 13.1999Z"
        fill="#E13189"
      />
    </svg>
  );
};
