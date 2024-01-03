import { FC } from "react";

import { IIconInterface } from "./types";

export const TwitterIcon: FC<IIconInterface> = ({ className, onClick }) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.7462 0.382812H39.0472L25.2813 17.789L41.4758 41.4748H28.7956L18.864 27.1095L7.50008 41.4748H1.19523L15.9192 22.857L0.383789 0.382812H13.3859L22.3631 13.5133L32.7462 0.382812ZM30.5347 37.3024H34.0262L11.4887 4.33607H7.74199L30.5347 37.3024Z"
        fill="#EAEAEA"
      />
    </svg>
  );
};
