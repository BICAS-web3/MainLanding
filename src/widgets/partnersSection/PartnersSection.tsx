import { FC, useEffect, useState } from "react";
import s from "./styles.module.scss";
import imgBg from "@/public/media/common/commonSectionsBg.png";
import rightImg from "@/public/media/partnersImgs/rightImg.png";
import topImg from "@/public/media/partnersImgs/topImg.png";
import bottomImg from "@/public/media/partnersImgs/bottomImg.png";
import { Button } from "@/shared/ui/Button";
import recentIco from "@/public/media/common/recentIco.svg";

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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={s.partners_section}>
      <img src={imgBg.src} alt="img-bg-static" className={s.bg_img} />
      <div className={s.left_ellipse}></div>
      <div className={s.right_ellipse}></div>
      <div
        className={s.partners_section_container}
        style={{
          maxWidth:
            windowWidth > 1280
              ? 1500 + (windowWidth - 1500) / 2
              : 1075 + (windowWidth - 1075) / 2,
        }}
      >
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
            {/* <div className={s.bottom_img}>
              <div className={s.anim_head_block}>
                <img src={recentIco.src} alt="recent-ico" />
                Last Withdrawals
              </div>
              <div className={s.anim_underline}></div>
              <ul className={s.animated_items_list}>
                {animatedItems.map((item, ind) => (
                  <li className={s.animated_items_list_item}>
                    <div className={s.animated_items_list_item_body_block}>
                      <div className={s.amount_title_block}>
                        <span>Amount</span>
                        {item.amount} BNB
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
