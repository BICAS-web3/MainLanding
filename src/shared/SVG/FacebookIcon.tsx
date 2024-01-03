import { FC } from "react";

import { IIconInterface } from "./types";

export const FacebookIcon: FC<IIconInterface> = ({ className, onClick }) => {
  return (
    <svg
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M52.8092 26.688C52.8092 12.0873 41.0416 0.248535 26.5286 0.248535C12.0155 0.248535 0.248047 12.0873 0.248047 26.688C0.248047 39.8839 9.85675 50.8219 22.4223 52.8072L22.4223 34.3327H15.7477L15.7477 26.688H22.4223V20.8631C22.4223 14.2378 26.3466 10.5751 32.3492 10.5751C35.2247 10.5751 38.233 11.0922 38.233 11.0922V17.5994H34.9172C31.6546 17.5994 30.6338 19.6366 30.6338 21.7304V26.688H37.9221L36.7582 34.3327H30.6352L30.6352 52.8097C43.2004 50.8257 52.8092 39.8873 52.8092 26.688Z"
        fill="#13A0F8"
      />
    </svg>
  );
};
