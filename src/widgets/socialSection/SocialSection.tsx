import { FC, useEffect, useState } from "react";
import Image from "next/image";

import s from "./styles.module.scss";

import line from "@/public/media/socialSection/social_line.svg";
import line_mobile from "@/public/media/socialSection/social_line_mobile.svg";
import telegram from "@/public/media/socialSection/telegram.svg";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;

    if (width < 998) {
      setIsMobile(true);
    }
  }, []);

  return (
    <section className={s.social}>
      <div className={clsx("container", s.container)}>
        {" "}
        <span className={s.eclipse}></span>
        <div className={s.social_container}>
          <div className={s.social_after}>
            <h2 className={s.social_title}>
              <span>Stay</span> with us
            </h2>
            <p className={s.social_text}>
              Keep up with the GreekKeepers DeFi and do not miss the opportunity
              to receive an rewards from Gods and rise to the Web3 Olympus
            </p>
          </div>
          <div className={s.social_form}>
            <input placeholder="Enter your e-mail address" type="text" />
            <Button className={s.social_fotm_btn}>Subscribe</Button>
          </div>
        </div>
        <article className={s.social_wrapper}>
          {isMobile ? (
            <Image src={line_mobile} alt="" className={s.social_line} />
          ) : (
            <Image src={line} alt="" className={s.social_line} />
          )}

          <h2 className={s.social_subtitle}>Join our socials</h2>
          <div className={s.social_body}>
            <div className={s.social_media}>
              <div className={s.social_media_links}>
                <TelegramIcon
                  onClick={() =>
                    window.open("https://t.me/greekkeepers", "_blank")
                  }
                />
                <InstagramIcon
                  onClick={() =>
                    window.open(
                      "https://instagram.com/greekkeepers?igshid=NTc4MTIwNjQ2YQ==",
                      "_blank"
                    )
                  }
                />
                <TwitterIcon
                  onClick={() =>
                    window.open("https://twitter.com/GreekKeepers", "_blank")
                  }
                />
                <DiscordIcon
                  onClick={() =>
                    window.open("https://discord.gg/ReJVd2xJSk", "_blank")
                  }
                />
                <FacebookIcon
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=100092326343777",
                      "_blank"
                    )
                  }
                />
                <RedditIcon
                  onClick={() =>
                    window.open(
                      "https://www.reddit.com/user/GreekKeepers/?rdt=59831",
                      "_blank"
                    )
                  }
                />
                <GreenIcon
                  onClick={() =>
                    window.open("https://medium.com/@greekkeepers", "_blank")
                  }
                />
                <SocialDraxIcon
                  onClick={() =>
                    window.open("https://docs.greekkeepers.io/", "_blank")
                  }
                />
              </div>
              <div className={s.telegram_container}>
                <div className={s.social_telegram_wrap}>
                  <Image className={s.social_telegram} src={telegram} alt="" />
                </div>
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
      </div>
    </section>
  );
};
