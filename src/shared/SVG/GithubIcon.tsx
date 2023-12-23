import { FC } from "react";

import { IIconInterface } from "./types";

export const GithubIcon: FC<IIconInterface> = ({ className, onClick }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M19.9997 3.33398C17.811 3.33398 15.6437 3.76508 13.6216 4.60266C11.5995 5.44024 9.7622 6.6679 8.21456 8.21554C5.08896 11.3411 3.33301 15.5804 3.33301 20.0007C3.33301 27.3673 8.11634 33.6173 14.733 35.834C15.5663 35.9673 15.833 35.4507 15.833 35.0007V32.184C11.2163 33.184 10.233 29.9507 10.233 29.9507C9.46634 28.0173 8.38301 27.5007 8.38301 27.5007C6.86634 26.4673 8.49967 26.5007 8.49967 26.5007C10.1663 26.6173 11.0497 28.2173 11.0497 28.2173C12.4997 30.7507 14.9497 30.0007 15.8997 29.6007C16.0497 28.5173 16.483 27.784 16.9497 27.3673C13.2497 26.9507 9.36634 25.5173 9.36634 19.1673C9.36634 17.3173 9.99967 15.834 11.083 14.6507C10.9163 14.234 10.333 12.5007 11.2497 10.2507C11.2497 10.2507 12.6497 9.80065 15.833 11.9507C17.1497 11.584 18.583 11.4007 19.9997 11.4007C21.4163 11.4007 22.8497 11.584 24.1663 11.9507C27.3497 9.80065 28.7497 10.2507 28.7497 10.2507C29.6663 12.5007 29.083 14.234 28.9163 14.6507C29.9997 15.834 30.633 17.3173 30.633 19.1673C30.633 25.534 26.733 26.934 23.0163 27.3507C23.6163 27.8673 24.1663 28.884 24.1663 30.434V35.0007C24.1663 35.4507 24.433 35.984 25.283 35.834C31.8997 33.6007 36.6663 27.3673 36.6663 20.0007C36.6663 17.812 36.2352 15.6447 35.3977 13.6226C34.5601 11.6005 33.3324 9.76318 31.7848 8.21554C30.2371 6.6679 28.3998 5.44024 26.3777 4.60266C24.3556 3.76508 22.1884 3.33398 19.9997 3.33398Z"
        fill="#DDDDDD"
      />
    </svg>
  );
};
