import { FC, useEffect, useState } from "react";
import s from "./styles.module.scss";
import imgBg from "@/public/media/common/commonSectionsBg.png";
import rightImg from "@/public/media/partnersImgs/rightImg.webp";
import topImg from "@/public/media/partnersImgs/topImg.webp";
import bottomImg from "@/public/media/partnersImgs/bottomImg.webp";
import { Button } from "@/shared/ui/Button";
import recentIco from "@/public/media/common/recentIco.svg";
import clsx from "clsx";

const animatedItems = [
  {
    amount: "1.00056",
    to: "0xa513344752133...e34475",
    usd: "70.00",
  },
  {
    amount: "2.00102",
    to: "0xa513344752133...e34475",
    usd: "140.00",
  },
  {
    amount: "1.50048",
    to: "0xa513344752133...e34475",
    usd: "100.00",
  },
  {
    amount: "4.00132",
    to: "0xa513344752133...e34475",
    usd: "240.00",
  },
  // {
  //   amount: "1.00056",
  //   to: "0xa513344752133...e34475",
  //   usd: "70.00",
  // },
  // {
  //   amount: "1.00056",
  //   to: "0xa513344752133...e34475",
  //   usd: "70.00",
  // },
  // {
  //   amount: "1.00056",
  //   to: "0xa513344752133...e34475",
  //   usd: "70.00",
  // },
];

interface PartnersSectionProps {}

export const PartnersSection: FC<PartnersSectionProps> = () => {
  return (
    <div className={s.partners_section} id="partners_section">
      <img src={imgBg.src} alt="img-bg-static" className={s.bg_img} />
      <div className={s.left_ellipse}></div>
      <div className={s.right_ellipse}></div>
      <div className={s.partners_section_container}>
        <div className={s.partners_section_body}>
          <div className={s.partners_info_wrap}>
            <div className={s.partners_info_block}>
              <h1 className={s.partners_info_title}>
                Join Our <span>Referral Program</span> for Exclusive Benefits
              </h1>
              <p
                className={`${s.partners_info_text} ${s.partners_info_text_one}`}
              >
                Invite your friends, colleagues, and family members to join our
                community and reap the benefits together. The more you refer,
                the more you earn.
              </p>
              <p
                className={`${s.partners_info_text} ${s.partners_info_text_two}`}
              >
                Start sharing now and be part of our rewarding referral program!
              </p>
            </div>
            <Button className={s.alpha_btn}>Join Alpha</Button>
          </div>
          <div className={s.imgs_group_block}>
            <img src={rightImg.src} alt="right-img" className={s.right_img} />
            <img src={topImg.src} alt="top-img" className={s.top_img} />
            <img src={bottomImg.src} alt="top-img" className={s.bottom_img} />
          </div>
        </div>
      </div>
    </div>
  );
};
