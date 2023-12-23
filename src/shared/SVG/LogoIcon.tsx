import { FC } from "react";

import { IIconInterface } from "./types";

export const LogoIcon: FC<IIconInterface> = ({ className, onClick }) => {
  return (
    <svg
      width="182"
      height="24"
      viewBox="0 0 182 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M25.2179 18.5789L21.1191 3.68529H24.1545L26.9461 15.5364L30.2251 3.68529H33.3491L36.5395 15.5364L39.331 3.68529H42.3886L38.179 18.5789H34.8113L31.7317 7.5364L28.5635 18.5789H25.2179ZM47.8838 18.8343C46.7761 18.8343 45.7938 18.6073 44.9372 18.1534C44.0804 17.6995 43.4084 17.0612 42.921 16.2385C42.4336 15.4158 42.1899 14.4654 42.1899 13.3874C42.1899 12.2953 42.4262 11.3236 42.8988 10.4725C43.3862 9.6215 44.0509 8.96193 44.8928 8.49381C45.7495 8.01155 46.7539 7.77042 47.906 7.77042C48.9842 7.77042 49.937 7.99734 50.7641 8.45124C51.5912 8.90515 52.2337 9.52926 52.6916 10.3236C53.1642 11.1037 53.4006 11.9761 53.4006 12.9406C53.4006 13.0967 53.3932 13.2598 53.3785 13.43C53.3785 13.6002 53.3711 13.7775 53.3563 13.9619H45.0036C45.0627 14.7846 45.3581 15.43 45.8898 15.8981C46.4363 16.3662 47.0936 16.6002 47.8617 16.6002C48.4377 16.6002 48.9178 16.4796 49.3018 16.2385C49.7006 15.9832 49.996 15.6569 50.188 15.2597H53.0682C52.8615 15.9264 52.5143 16.5364 52.0269 17.0896C51.5543 17.6286 50.9634 18.0541 50.2545 18.3662C49.5603 18.6782 48.7701 18.8343 47.8838 18.8343ZM47.906 9.98316C47.2118 9.98316 46.5988 10.1747 46.067 10.5577C45.5353 10.9264 45.1957 11.4938 45.0479 12.2598H50.5203C50.4761 11.5648 50.2102 11.0116 49.7227 10.6002C49.2353 10.1888 48.6298 9.98316 47.906 9.98316ZM61.6348 18.8343C60.8077 18.8343 60.0839 18.6853 59.4636 18.3875C58.8433 18.0896 58.341 17.6711 57.957 17.1322L57.6469 18.5789H55.1211V3.25977H57.957V9.53636C58.3115 9.06832 58.7767 8.65691 59.3528 8.30236C59.9436 7.94773 60.7043 7.77042 61.6348 7.77042C62.6688 7.77042 63.5919 8.01155 64.4043 8.49381C65.2167 8.97607 65.8592 9.63564 66.3319 10.4725C66.8045 11.3094 67.0408 12.2598 67.0408 13.3236C67.0408 14.3875 66.8045 15.3378 66.3319 16.1747C65.8592 16.9973 65.2167 17.6499 64.4043 18.1321C63.5919 18.6002 62.6688 18.8343 61.6348 18.8343ZM61.0366 16.4513C61.9376 16.4513 62.6835 16.1605 63.2743 15.5789C63.8652 14.9974 64.1606 14.2456 64.1606 13.3236C64.1606 12.4016 63.8652 11.6427 63.2743 11.047C62.6835 10.4513 61.9376 10.1534 61.0366 10.1534C60.1209 10.1534 59.3676 10.4513 58.7767 11.047C58.2007 11.6286 57.9127 12.3803 57.9127 13.3023C57.9127 14.2243 58.2007 14.9832 58.7767 15.5789C59.3676 16.1605 60.1209 16.4513 61.0366 16.4513ZM74.0496 18.8343C73.0305 18.8343 72.1073 18.6641 71.2801 18.3236C70.453 17.969 69.7883 17.43 69.2861 16.7066C68.784 15.9832 68.5181 15.0754 68.4885 13.9832H71.2801C71.2949 14.7066 71.5386 15.3165 72.0113 15.813C72.4987 16.2953 73.1782 16.5364 74.0496 16.5364C74.8768 16.5364 75.5119 16.3165 75.955 15.8768C76.3983 15.4371 76.6195 14.8839 76.6195 14.2172C76.6195 13.4371 76.3243 12.8484 75.7334 12.4512C75.1574 12.0399 74.4115 11.8342 73.4957 11.8342H72.3436V9.60018H73.5178C74.2711 9.60018 74.8989 9.42998 75.4011 9.08957C75.9033 8.74916 76.1544 8.24557 76.1544 7.57889C76.1544 7.02573 75.9624 6.58601 75.5783 6.25977C75.2091 5.91934 74.6921 5.74913 74.0274 5.74913C73.3037 5.74913 72.735 5.95481 72.3214 6.36616C71.9226 6.7775 71.7011 7.28104 71.6568 7.87681H68.8873C68.9465 6.50091 69.4412 5.4158 70.3718 4.62147C71.3171 3.82714 72.5356 3.42998 74.0274 3.42998C75.0909 3.42998 75.9845 3.61438 76.708 3.98317C77.4466 4.33778 78.0005 4.81296 78.3698 5.4087C78.7543 6.00445 78.9458 6.66403 78.9458 7.38743C78.9458 8.22432 78.7024 8.9335 78.2149 9.51512C77.7419 10.0824 77.1513 10.4654 76.4425 10.6641C77.3138 10.8343 78.0226 11.2456 78.5697 11.8981C79.116 12.5364 79.3891 13.3449 79.3891 14.3236C79.3891 15.1463 79.1823 15.8981 78.7688 16.579C78.3553 17.2598 77.7495 17.8059 76.9522 18.2172C76.1692 18.6286 75.2017 18.8343 74.0496 18.8343ZM81.5094 18.5789V3.68529H87.2476C88.4882 3.68529 89.5152 3.88388 90.3277 4.28104C91.1395 4.67821 91.7453 5.22431 92.1444 5.91934C92.5426 6.61438 92.7425 7.39452 92.7425 8.25979C92.7425 9.08246 92.5503 9.84131 92.1665 10.5363C91.7819 11.2172 91.1838 11.7704 90.372 12.196C89.5594 12.6073 88.518 12.813 87.2476 12.813H84.3453V18.5789H81.5094ZM84.3453 10.6002H87.0706C88.0602 10.6002 88.769 10.3945 89.1978 9.98316C89.6403 9.55761 89.8623 8.98318 89.8623 8.25979C89.8623 7.52218 89.6403 6.94771 89.1978 6.53636C88.769 6.11083 88.0602 5.89807 87.0706 5.89807H84.3453V10.6002ZM97.3325 18.8343C96.3872 18.8343 95.6113 18.6924 95.0062 18.4087C94.4004 18.1108 93.9503 17.7208 93.6543 17.2385C93.359 16.7562 93.2117 16.2243 93.2117 15.6427C93.2117 14.6641 93.61 13.8697 94.4081 13.2598C95.2054 12.6499 96.4017 12.3449 97.9971 12.3449H100.789V12.0896C100.789 11.3661 100.574 10.8343 100.146 10.4939C99.7175 10.1534 99.1858 9.98316 98.551 9.98316C97.9749 9.98316 97.4729 10.1179 97.0441 10.3875C96.6161 10.6427 96.3498 11.0257 96.2468 11.5364H93.4772C93.5513 10.7704 93.8168 10.1038 94.2746 9.53636C94.7476 8.96896 95.3534 8.53638 96.0919 8.23847C96.8305 7.92641 97.6575 7.77042 98.5731 7.77042C100.139 7.77042 101.372 8.14629 102.273 8.89804C103.174 9.64986 103.625 10.7137 103.625 12.0896V18.5789H101.21L100.944 16.8768C100.619 17.4442 100.161 17.9123 99.5703 18.2811C98.9943 18.6499 98.2481 18.8343 97.3325 18.8343ZM97.9749 16.7066C98.7875 16.7066 99.4146 16.4513 99.8579 15.9406C100.316 15.43 100.604 14.7988 100.722 14.047H98.3076C97.5538 14.047 97.0151 14.1817 96.6901 14.4513C96.3651 14.7066 96.2026 15.0257 96.2026 15.4087C96.2026 15.82 96.3651 16.1392 96.6901 16.3662C97.0151 16.5931 97.4432 16.7066 97.9749 16.7066ZM106.672 23.2598L109.22 17.8768H108.555L104.279 8.02576H107.359L110.439 15.4513L113.651 8.02576H116.665L109.685 23.2598H106.672ZM117.853 18.5789V8.02576H120.357L120.601 9.4513C120.955 8.94061 121.421 8.53638 121.997 8.23847C122.587 7.92641 123.266 7.77042 124.035 7.77042C125.733 7.77042 126.937 8.40164 127.646 9.664C128.045 9.08246 128.577 8.62145 129.241 8.28104C129.921 7.94062 130.66 7.77042 131.457 7.77042C132.89 7.77042 133.99 8.18175 134.758 9.00443C135.527 9.82717 135.91 11.0328 135.91 12.6215V18.5789H133.074V12.8768C133.074 11.969 132.89 11.274 132.52 10.7917C132.166 10.3094 131.612 10.0683 130.859 10.0683C130.09 10.0683 129.47 10.3378 128.998 10.8768C128.54 11.4158 128.311 12.1675 128.311 13.1321V18.5789H125.475V12.8768C125.475 11.969 125.291 11.274 124.921 10.7917C124.552 10.3094 123.983 10.0683 123.215 10.0683C122.462 10.0683 121.849 10.3378 121.376 10.8768C120.918 11.4158 120.689 12.1675 120.689 13.1321V18.5789H117.853ZM143.278 18.8343C142.17 18.8343 141.188 18.6073 140.331 18.1534C139.474 17.6995 138.802 17.0612 138.314 16.2385C137.827 15.4158 137.584 14.4654 137.584 13.3874C137.584 12.2953 137.82 11.3236 138.292 10.4725C138.78 9.6215 139.444 8.96193 140.287 8.49381C141.144 8.01155 142.148 7.77042 143.3 7.77042C144.378 7.77042 145.331 7.99734 146.158 8.45124C146.985 8.90515 147.627 9.52926 148.085 10.3236C148.558 11.1037 148.795 11.9761 148.795 12.9406C148.795 13.0967 148.787 13.2598 148.772 13.43C148.772 13.6002 148.765 13.7775 148.75 13.9619H140.397C140.456 14.7846 140.752 15.43 141.284 15.8981C141.83 16.3662 142.487 16.6002 143.255 16.6002C143.831 16.6002 144.311 16.4796 144.696 16.2385C145.094 15.9832 145.389 15.6569 145.582 15.2597H148.462C148.255 15.9264 147.908 16.5364 147.42 17.0896C146.948 17.6286 146.357 18.0541 145.648 18.3662C144.954 18.6782 144.164 18.8343 143.278 18.8343ZM143.3 9.98316C142.605 9.98316 141.993 10.1747 141.461 10.5577C140.929 10.9264 140.59 11.4938 140.442 12.2598H145.914C145.87 11.5648 145.604 11.0116 145.116 10.6002C144.629 10.1888 144.024 9.98316 143.3 9.98316ZM150.515 18.5789V8.02576H153.018L153.24 9.81296C153.58 9.18885 154.067 8.69237 154.702 8.3236C155.352 7.95484 156.113 7.77042 156.984 7.77042C158.343 7.77042 159.399 8.18175 160.153 9.00443C160.906 9.82717 161.283 11.0328 161.283 12.6215V18.5789H158.447V12.8768C158.447 11.969 158.255 11.274 157.871 10.7917C157.486 10.3094 156.888 10.0683 156.076 10.0683C155.278 10.0683 154.621 10.3378 154.104 10.8768C153.602 11.4158 153.351 12.1675 153.351 13.1321V18.5789H150.515ZM168.226 18.5789C167.074 18.5789 166.15 18.3094 165.456 17.7704C164.763 17.2314 164.415 16.2739 164.415 14.8981V10.3023H162.532V8.02576H164.415L164.747 5.19594H167.251V8.02576H170.22V10.3023H167.251V14.9193C167.251 15.43 167.362 15.7846 167.583 15.9832C167.82 16.1676 168.219 16.2598 168.78 16.2598H170.154V18.5789H168.226ZM176.532 18.8343C175.557 18.8343 174.7 18.6853 173.962 18.3875C173.223 18.0754 172.633 17.6499 172.189 17.1108C171.747 16.5719 171.481 15.9477 171.392 15.2385H174.25C174.339 15.6498 174.575 16.0045 174.959 16.3023C175.358 16.586 175.868 16.7278 176.488 16.7278C177.108 16.7278 177.558 16.6073 177.839 16.3662C178.134 16.1251 178.282 15.8485 178.282 15.5364C178.282 15.0825 178.076 14.7775 177.662 14.6215C177.249 14.4513 176.673 14.2881 175.934 14.1321C175.461 14.0328 174.981 13.9122 174.493 13.7704C174.006 13.6285 173.556 13.4512 173.142 13.2385C172.743 13.0115 172.418 12.7278 172.167 12.3874C171.916 12.0328 171.791 11.6002 171.791 11.0895C171.791 10.1534 172.175 9.36616 172.943 8.72783C173.726 8.08958 174.819 7.77042 176.222 7.77042C177.522 7.77042 178.556 8.06115 179.324 8.64277C180.107 9.22431 180.572 10.0257 180.719 11.047H178.039C177.876 10.2669 177.263 9.87677 176.199 9.87677C175.668 9.87677 175.254 9.97605 174.959 10.1747C174.678 10.3732 174.538 10.6215 174.538 10.9193C174.538 11.2314 174.752 11.4796 175.181 11.664C175.609 11.8485 176.177 12.0187 176.887 12.1747C177.654 12.3449 178.356 12.5364 178.991 12.7492C179.641 12.9477 180.159 13.2527 180.542 13.664C180.926 14.0612 181.118 14.6356 181.118 15.3875C181.133 16.0399 180.956 16.6286 180.587 17.1534C180.217 17.6782 179.685 18.0896 178.991 18.3875C178.297 18.6853 177.477 18.8343 176.532 18.8343Z"
        fill="#363636"
      />
      <path
        d="M7.54263 20.8485C9.87671 20.8485 11.7689 18.9621 11.7689 16.6352C11.7689 14.3082 9.87671 12.4219 7.54263 12.4219C5.20855 12.4219 3.31641 14.3082 3.31641 16.6352C3.31641 18.9621 5.20855 20.8485 7.54263 20.8485Z"
        fill="#363636"
      />
      <path
        d="M12.209 13.0363C14.0569 13.0363 15.5548 11.5429 15.5548 9.70076C15.5548 7.8586 14.0569 6.36523 12.209 6.36523C10.3612 6.36523 8.86328 7.8586 8.86328 9.70076C8.86328 11.5429 10.3612 13.0363 12.209 13.0363Z"
        fill="#363636"
      />
      <path
        d="M5.60686 8.20906C7.26016 8.20906 8.60043 6.8729 8.60043 5.22465C8.60043 3.5764 7.26016 2.24023 5.60686 2.24023C3.95355 2.24023 2.61328 3.5764 2.61328 5.22465C2.61328 6.8729 3.95355 8.20906 5.60686 8.20906Z"
        fill="#363636"
      />
      <path
        d="M3.84491 12.4212C4.81745 12.4212 5.60584 11.6353 5.60584 10.6657C5.60584 9.69614 4.81745 8.91016 3.84491 8.91016C2.87238 8.91016 2.08398 9.69614 2.08398 10.6657C2.08398 11.6353 2.87238 12.4212 3.84491 12.4212Z"
        fill="#363636"
      />
    </svg>
  );
};