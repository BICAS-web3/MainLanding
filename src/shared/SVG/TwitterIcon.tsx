import { FC } from "react";

import { IIconInterface } from "./types";

export const TwitterIcon: FC<IIconInterface> = ({ className, onClick }) => {
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
      <rect width="32" height="32" rx="16" fill="#121F24" />
      <path
        d="M20.0258 9H22.1726L17.4825 14.9303L23 23H18.6799L15.2962 18.1057L11.4245 23H9.27646L14.2929 16.6569L9 9H13.4298L16.4883 13.4735L20.0258 9ZM19.2724 21.5785H20.4619L12.7834 10.3469H11.5069L19.2724 21.5785Z"
        fill="#EAEAEA"
      />
    </svg>
  );
};