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
  {
    amount: "1.00056",
    to: "0xa513344752133...e34475",
    usd: "70.00",
  },
  {
    amount: "1.00056",
    to: "0xa513344752133...e34475",
    usd: "70.00",
  },
  {
    amount: "1.00056",
    to: "0xa513344752133...e34475",
    usd: "70.00",
  },
];

interface PartnersSectionProps {}

export const PartnersSection: FC<PartnersSectionProps> = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [animStop, setAnimStop] = useState(false);
  const [top, setTop] = useState(0);

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

  useEffect(() => {
    const anim = () => {
      const els = document.querySelectorAll(".animated-item");
      const elsWrap = document.querySelector(".animated_list");
      let index = 0;

      const intervalId = setInterval(() => {
        if (index < els.length) {
          const currentEl = els[index];
          elsWrap?.classList.remove(s.anim_end);
          if (index < 4) {
            els[index].classList.add(s.item_animated);
          } else {
            setTop((prev) => prev + 105);
            els[index].classList.add(s.item_animated);
            if (index === 4) {
              elsWrap?.classList.add(s.anim_stop1);
            } else if (index === 5) {
              elsWrap?.classList.add(s.anim_stop2);
            } else if (index === 6) {
              elsWrap?.classList.add(s.anim_stop3);
            }
          }

          index++;
        } else {
          clearInterval(intervalId);
          index = 0;
          console.log("STOP");
          elsWrap?.classList.add(s.anim_end);
          elsWrap?.classList.remove(s.anim_stop1);
          elsWrap?.classList.remove(s.anim_stop2);
          elsWrap?.classList.remove(s.anim_stop3);
          setTop(0);
        }
      }, 2000);
    };

    anim();

    const intervalId = setInterval(() => {
      const els = document.querySelectorAll(".animated-item");
      anim();
      els.forEach((el) => {
        el.classList.remove(s.item_animated);
      });
    }, 17000);

    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  // useEffect(() => {

  // }, [])

  return (
    <div className={s.partners_section} id="partners_section">
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
            <img
              src={bottomImg.src}
              alt="top-img"
              className={clsx(s.bottom_img, s.mob_bottom)}
            />
            <div className={clsx(s.bottom_img, s.desk_anim_block)}>
              <div className={s.anim_block_header}>
                <div className={s.anim_head_block}>
                  <img src={recentIco.src} alt="recent-ico" />
                  Last Withdrawals
                </div>
                <div className={s.anim_underline}></div>
              </div>
              <ul
                className={clsx(s.animated_items_list, "animated_list")}
                style={{ "--top": `${top}px` } as any}
              >
                {animatedItems.map((item, ind) => (
                  <li
                    key={ind}
                    className={clsx(
                      s.animated_items_list_item,
                      "animated-item"
                    )}
                  >
                    <div className={s.animated_items_list_item_body_block}>
                      <div className={clsx(s.amount_title_block, s.bnb_block)}>
                        <span>Amount</span>
                        {item.amount}{" "}
                        <span className={s.bnb_title_sp}>BNB</span>
                      </div>
                      <span className={s.usd_title}>+{item.usd}$</span>
                    </div>
                    <div className={s.animated_items_list_item_body_block}>
                      <div
                        className={clsx(s.amount_title_block, s.address_block)}
                      >
                        <span>To</span>
                        {item.to}
                      </div>
                      <span className={s.bnb_title}>
                        {item.amount}{" "}
                        <span className={s.bnb_title_sp}>BNB</span>{" "}
                      </span>
                    </div>
                    <div className={s.animated_items_list_item_body_block}>
                      <span className={s.date_title}>10.10.23</span>
                      <span className={s.status_title}>Completed</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
