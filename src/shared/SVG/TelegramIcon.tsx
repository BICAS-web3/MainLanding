import { FC } from "react";

import { IIconInterface } from "./types";

export const TelegramIcon: FC<IIconInterface> = ({ className, onClick }) => {
  return (
    <svg
      width="56"
      height="49"
      viewBox="0 0 56 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55.284 4.83562L46.9562 45.6232C46.3279 48.5019 44.6894 49.2184 42.3611 47.8622L29.6722 38.1515L23.5496 44.2671C22.872 44.9707 22.3053 45.5593 20.9995 45.5593L21.9111 32.1383L45.4286 10.0684C46.4511 9.12165 45.2068 8.59709 43.8394 9.54385L14.7659 28.5559L2.24957 24.4874C-0.472989 23.6046 -0.522266 21.6599 2.81625 20.3037L51.773 0.71592C54.0397 -0.166874 56.0231 1.24048 55.284 4.83562Z"
        fill="#37AEE2"
      />
    </svg>
  );
};
