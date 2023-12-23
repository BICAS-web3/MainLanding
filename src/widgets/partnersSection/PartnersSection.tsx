import { FC } from "react";
import s from "./styles.module.scss";
import imgBg from "@/public/media/common/commonSectionsBg.png";
import rightImg from "@/public/media/partnersImgs/rightImg.png";
import topImg from "@/public/media/partnersImgs/topImg.png";
import bottomImg from "@/public/media/partnersImgs/bottomImg.png";

interface PartnersSectionProps {}

export const PartnersSection: FC<PartnersSectionProps> = () => {
  return (
    <div className={s.partners_section}>
      <img src={imgBg.src} alt="img-bg-static" className={s.bg_img} />
      <img src={rightImg.src} alt="right-img" className={s.right_img} />
      <img src={topImg.src} alt="top-img" className={s.top_img} />
      <img src={bottomImg.src} alt="bottom-img" className={s.bottom_img} />
      <div className={s.left_ellipse}></div>
      <div className={s.right_ellipse}></div>
      <div className={s.partners_section_container}>
        <div className={s.partners_section_body}>
          <div className={s.partners_info_wrap}>
            <div className={s.partners_info_block}>
              <h1 className={s.partners_info_title}>
                Join Our{" "}
                <span>
                  Referral <br /> Program
                </span>{" "}
                for Exclusive <br /> Benefits
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
            <button className={s.alpha_btn}>Join Alpha</button>
          </div>
        </div>
      </div>
    </div>
  );
};
