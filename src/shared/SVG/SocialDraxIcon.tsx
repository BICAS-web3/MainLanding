import { FC } from "react";

import { IIconInterface } from "./types";

export const SocialDraxIcon: FC<IIconInterface> = ({ className, onClick }) => {
  return (
    <svg
      width="60"
      height="46"
      viewBox="0 0 60 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.2959 14.6591C51.2662 14.504 53.1973 13.9118 55.4687 12.6816C58.4552 11.0646 59.7226 5.99055 59.7226 5.99055C52.3891 10.8479 42.3629 11.8754 42.3629 11.8754C39.3754 16.5955 36.6229 19.3586 34.32 20.9615C33.9412 20.7446 33.6011 20.4682 33.3131 20.1433C32.6 19.2166 32.5173 18.275 32.5401 18.1153C32.5629 17.9556 32.7303 17.6968 33.1106 17.5829C33.2397 17.5378 33.3778 17.5236 33.5136 17.5415C33.6493 17.5593 33.7788 17.6088 33.8912 17.6856C33.78 17.0317 33.7182 16.7188 33.3283 16.3947C32.9661 16.0948 32.3072 16.0491 32.3072 16.0491C31.9762 15.786 31.579 15.6156 31.1577 15.5558C30.0509 15.4036 29.3198 15.8725 28.8006 16.3489C28.1075 16.985 28.0533 18.1704 27.5541 19.5314C27.33 20.1323 26.8938 20.6342 26.3247 20.9457C24.0276 19.339 21.2855 16.5787 18.3085 11.8773C18.3085 11.8773 8.2823 10.8498 0.949707 5.99242C0.949707 5.99242 2.21618 11.0665 5.20265 12.6835C7.47506 13.9137 9.40614 14.5059 12.3755 14.661C12.3755 14.661 8.37167 14.9982 3.77074 12.8198C3.77074 12.8198 6.35692 16.8244 8.79097 18.1321C11.225 19.4399 14.2647 19.9564 16.4278 19.8509C16.4278 19.8509 12.6655 20.7411 9.53926 19.4399C9.53926 19.4399 12.8233 23.6882 18.7069 23.55C18.7069 23.55 16.7986 24.0236 15.0197 23.7106C15.0197 23.7106 17.7266 25.9646 19.9639 26.3355C19.9639 26.3355 20.8671 26.512 22.7345 26.3131C22.159 26.664 21.4978 26.856 20.8205 26.8689C20.8205 26.8689 22.7316 27.9898 24.154 28.1122C24.5311 28.1367 24.9098 28.1217 25.2836 28.0673C25.0085 28.2314 24.7043 28.3429 24.387 28.3961C24.387 28.3961 26.2838 29.0603 27.5246 28.4811C26.1469 32.5847 25.1315 33.8149 25.1315 33.8149L25.4966 34.2427C25.5343 34.2877 25.5822 34.3233 25.6364 34.3468C25.6907 34.3703 25.7497 34.3811 25.8089 34.3782C25.8682 34.3753 25.9259 34.3588 25.9774 34.3301C26.029 34.3014 26.0731 34.2612 26.106 34.2128L26.9237 33.1106L25.9663 34.8172L26.3685 35.2123C26.4101 35.2539 26.4611 35.2852 26.5173 35.304C26.5735 35.3227 26.6333 35.3282 26.6921 35.3201C26.7509 35.3121 26.8069 35.2906 26.8557 35.2574C26.9045 35.2243 26.9447 35.1804 26.9732 35.1292L27.5085 34.2539L26.7973 35.8559L27.2365 36.2118C27.2821 36.2493 27.3359 36.2758 27.3938 36.2892C27.4516 36.3025 27.5118 36.3024 27.5696 36.2888C27.6274 36.2752 27.6811 36.2484 27.7264 36.2107C27.7718 36.173 27.8075 36.1254 27.8308 36.0717L28.1598 35.3945L27.7557 36.6742L28.2311 36.9797C28.2804 37.0111 28.3365 37.0309 28.395 37.0374C28.4534 37.044 28.5126 37.0371 28.5679 37.0174C28.6232 36.9976 28.6731 36.9656 28.7136 36.9237C28.7542 36.8818 28.7843 36.8313 28.8016 36.776L29.1819 35.6981L28.9023 37.1553C28.8818 37.2635 28.8935 37.3753 28.9362 37.477C28.9789 37.5788 29.0507 37.6663 29.1429 37.7288L29.9739 38.1641L30.2953 36.1091L30.6157 38.1641L31.4476 37.7288C31.5399 37.6663 31.6116 37.5788 31.6543 37.477C31.697 37.3753 31.7088 37.2635 31.6882 37.1553L31.4191 35.6981L31.7994 36.776C31.8167 36.8313 31.8468 36.8818 31.8874 36.9237C31.9279 36.9656 31.9778 36.9976 32.0331 37.0174C32.0884 37.0371 32.1476 37.044 32.206 37.0374C32.2645 37.0309 32.3206 37.0111 32.3699 36.9797L32.8453 36.6742L32.4412 35.3945L32.7702 36.0717C32.7935 36.1254 32.8292 36.173 32.8746 36.2107C32.9199 36.2484 32.9737 36.2752 33.0314 36.2888C33.0892 36.3024 33.1494 36.3025 33.2073 36.2892C33.2651 36.2758 33.3189 36.2493 33.3645 36.2118L33.8037 35.8559L33.0916 34.2539L33.6278 35.1292C33.6563 35.1804 33.6965 35.2243 33.7453 35.2574C33.7941 35.2906 33.8501 35.3121 33.9089 35.3201C33.9677 35.3282 34.0276 35.3227 34.0837 35.304C34.1399 35.2852 34.1909 35.2539 34.2325 35.2123L34.6347 34.8172L33.6697 33.1115L34.4874 34.2138C34.5203 34.2623 34.5644 34.3027 34.6161 34.3315C34.6677 34.3603 34.7256 34.3768 34.7849 34.3797C34.8443 34.3826 34.9035 34.3718 34.9578 34.3482C35.0121 34.3246 35.0601 34.2888 35.0978 34.2437L35.4629 33.8158C35.4629 33.8158 34.4436 32.5819 33.0621 28.4596V28.4494C34.2982 29.0939 36.2787 28.4008 36.2787 28.4008C35.9617 28.3475 35.6579 28.236 35.383 28.072C35.7565 28.1263 36.1349 28.1414 36.5116 28.1168C37.9378 27.9926 39.8451 26.8735 39.8451 26.8735C39.1679 26.8607 38.5067 26.6687 37.9312 26.3177C39.7985 26.5167 40.7018 26.3402 40.7018 26.3402C42.9438 25.9665 45.646 23.7153 45.646 23.7153C43.867 24.0282 41.9588 23.5546 41.9588 23.5546C47.8423 23.6901 51.1274 19.4445 51.1274 19.4445C48.0011 20.7458 44.2388 19.8556 44.2388 19.8556C46.4009 19.9611 49.4416 19.4436 51.8747 18.1368C54.3078 16.83 56.9006 12.8189 56.9006 12.8189C52.2997 14.9963 48.2959 14.6591 48.2959 14.6591Z"
        fill="#D9B06E"
      />
      <path
        d="M52.2683 20.2852C52.1913 20.3852 51.1844 21.6603 49.3322 22.8531C49.2866 33.1069 40.7826 41.4335 30.3362 41.4335C19.8897 41.4335 11.3848 33.1059 11.3391 22.8531C9.48696 21.6603 8.48101 20.3852 8.40305 20.2852L7.6947 19.3679C7.52146 20.494 7.43469 21.6312 7.43513 22.77C7.4741 28.7118 9.90401 34.3973 14.1945 38.5854C18.4849 42.7734 24.2875 45.124 30.3357 45.124C36.3839 45.124 42.1864 42.7734 46.4769 38.5854C50.7674 34.3973 53.1973 28.7118 53.2362 22.77C53.2365 21.6312 53.1501 20.494 52.9776 19.3679L52.2683 20.2852Z"
        fill="#D9B06E"
      />
      <path
        d="M12.6883 9.38324C14.1041 9.74101 15.3648 9.99321 16.3441 10.1651C18.1208 8.2557 20.2828 6.73078 22.6924 5.68748C25.1019 4.64418 27.7063 4.10536 30.3395 4.10536C32.9727 4.10536 35.577 4.64418 37.9866 5.68748C40.3962 6.73078 42.5582 8.2557 44.3348 10.1651C45.3141 9.99321 46.5749 9.74101 47.9906 9.38324C48.1951 9.33093 48.4062 9.27582 48.622 9.2179C47.9804 8.38624 47.2815 7.5988 46.5302 6.86114C44.4039 4.77183 41.8795 3.11448 39.1011 1.98373C36.3228 0.852986 33.3449 0.270996 30.3376 0.270996C27.3303 0.270996 24.3524 0.852986 21.5741 1.98373C18.7957 3.11448 16.2713 4.77183 14.1449 6.86114C13.3936 7.5988 12.6947 8.38624 12.0532 9.2179C12.269 9.27582 12.4801 9.33093 12.6883 9.38324Z"
        fill="#D9B06E"
      />
    </svg>
  );
};
