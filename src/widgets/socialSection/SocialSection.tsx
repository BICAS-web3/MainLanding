import { FC, useState } from "react";
import Image from "next/image";

import s from "./styles.module.scss";

import line from "@/public/media/socialSection/social_line.svg";
import telegram from "@/public/media/socialSection/telegram.png";

import clsx from "clsx";
import { Button } from "@/shared/ui/Button";
import { TelegramIcon } from "@/shared/SVG/TelegramIcon";
import { InstagramIcon } from "@/shared/SVG/InstagramIcon";
import { TwitterIcon } from "@/shared/SVG/TwitterIcon";
import { DiscordIcon } from "@/shared/SVG/DiscordIcon";
import { FacebookIcon } from "@/shared/SVG/FacebookIcon";
import { RedditIcon } from "@/shared/SVG/RedditIcon";
import { GreenIcon } from "@/shared/SVG/GreenIcon";
import { SocialDraxIcon } from "@/shared/SVG/SocialDraxIcon";

interface SocialSectionProps {}

export const SocialSection: FC<SocialSectionProps> = () => {
  return (
    <section className={s.social}>
      <div className={s.social_container}>
        <h2 className={s.social_title}>
          <span>Stay</span>
          <br /> with us
        </h2>
        <p className={s.social_text}>
          Keep up with the GreekKeepers DeFi and do not miss the opportunity
          to receive an rewards from Gods and rise to the Web3 Olympus
        </p>
        <div className={s.social_form}>
          <input placeholder="Enter your e-mail address" type="text" />
          <Button className={s.social_fotm_btn}>Subscribe</Button>
        </div>
      </div>
      <article className={s.social_wrapper}>
        <Image src={line} alt="" className={s.social_line} />
        <h2 className={s.social_subtitle}>Join our socials</h2>
        <div className={s.social_body}>
          <div className={s.social_media}>
            <div className={s.social_media_links}>
              <TelegramIcon />
              <InstagramIcon />
              <TwitterIcon />
              <DiscordIcon />
              <FacebookIcon />
              <RedditIcon />
              <GreenIcon />
              <SocialDraxIcon />
            </div>
            <div className={s.telegram_container}>
              <Image className={s.social_telegram} src={telegram} alt="" />
              <button
                onClick={() =>
                  window.open("https://t.me/greekkeepers", "_blank")
                }
              >
                Join Telegram{" "}
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.463 3.09244L13.5012 13.2756C13.3532 13.9943 12.9672 14.1732 12.4187 13.8346L9.42961 11.4102L7.98729 12.937C7.82768 13.1127 7.69419 13.2597 7.38657 13.2597L7.60132 9.90892L13.1413 4.39888C13.3822 4.16251 13.0891 4.03154 12.767 4.26792L5.91813 9.01453L2.96966 7.99877C2.32831 7.77837 2.3167 7.29285 3.10315 6.95426L14.6359 2.0639C15.1699 1.8435 15.6371 2.19487 15.463 3.09244Z"
                    fill="white"
                  />
                </svg>
              </button>
              <svg
                width="2"
                height="30"
                viewBox="0 0 2 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={s.social_bottom_line}
              >
                <path
                  d="M0.999998 0L0.999999 30"
                  stroke="#37AEE2"
                  stroke-dasharray="5 5"
                />
              </svg>
            </div>
          </div>
          <div className={s.social_statistic}>
            <div className={s.social_text_data}>
              <span className={s.social_about}>Community members</span>
              <span className={s.social_count}>322K +</span>
            </div>
            <div className={s.social_text_data}>
              <span className={s.social_about}>Multilangual communities</span>
              <span className={s.social_count}>15 +</span>
            </div>
            <div className={s.social_text_data}>
              <span className={s.social_about}>Community Ambassadors</span>
              <span className={s.social_count}>20 +</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
