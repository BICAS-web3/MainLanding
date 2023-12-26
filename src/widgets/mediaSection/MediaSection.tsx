import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import bg from "@/public/media/roadmapSection/roadmap_bg.png";
import media_1 from "@/public/media/mediaSection/media_1.svg";
import media_2 from "@/public/media/mediaSection/media_2.svg";
import media_3 from "@/public/media/mediaSection/media_3.svg";
import media_4 from "@/public/media/mediaSection/media_4.svg";
import media_5 from "@/public/media/mediaSection/media_5.svg";
import media_6 from "@/public/media/mediaSection/media_6.svg";
import media_7 from "@/public/media/mediaSection/media_7.svg";
import media_8 from "@/public/media/mediaSection/media_8.svg";
import imgBg from "@/public/media/common/commonSectionsBg.png";

import media_mob_1 from "@/public/media/mediaSection/media_mob_1.svg";
import media_mob_2 from "@/public/media/mediaSection/media_mob_2.svg";
import media_mob_3 from "@/public/media/mediaSection/media_mob_3.svg";
import media_mob_4 from "@/public/media/mediaSection/media_mob_4.svg";
import media_mob_5 from "@/public/media/mediaSection/media_mob_5.svg";
import media_mob_6 from "@/public/media/mediaSection/media_mob_6.svg";
import media_mob_7 from "@/public/media/mediaSection/media_mob_7.svg";
import media_mob_8 from "@/public/media/mediaSection/media_mob_8.svg";

import media_token from "@/public/media/mediaSection/media_token.png";
import integration_1 from "@/public/media/mediaSection/integration_1.png";
import integration_2 from "@/public/media/mediaSection/integration_2.png";
import integration_3 from "@/public/media/mediaSection/integration_3.svg";
import integration_4 from "@/public/media/mediaSection/integration_4.png";
import integration_5 from "@/public/media/mediaSection/integration_5.png";
import integration_6 from "@/public/media/mediaSection/integration_6.png";
import integration_7 from "@/public/media/mediaSection/integration_7.png";
import integration_8 from "@/public/media/mediaSection/integration_8.png";

import s from "./styles.module.scss";

import clsx from "clsx";
import { GitbookIcon, GithubIcon } from "@/shared/SVG";
import { useMediaQuery } from "@/shared/utils";

interface MediaSectionProps {}

export const MediaSection: FC<MediaSectionProps> = () => {
  const isMobile = useMediaQuery("(max-width:998px)");

  const imgArr = [
    media_1,
    media_2,
    media_3,
    media_4,
    media_5,
    media_6,
    media_7,
    media_8,
  ];

  const imgMobArr = [
    media_mob_1,
    media_mob_2,
    media_mob_3,
    media_mob_4,
    media_mob_5,
    media_mob_6,
    media_mob_7,
    media_mob_8,
  ];

  const integrationImg = [
    integration_1,
    integration_2,
    integration_3,
    integration_4,
    integration_5,
    integration_6,
    integration_7,
    integration_8,
  ];

  return (
    <section className={s.media} id="media_section">
      <img src={imgBg.src} alt="img-bg-static" className={s.bg_img} />
      <div className={clsx("container", s.container)}>
        <h2 className={s.media_title}>
          <span>GreekKeepers </span>in Media
        </h2>
        <Marquee className={s.media_marquee}>
          {(isMobile
            ? [...imgMobArr, ...imgMobArr, ...imgMobArr]
            : [...imgArr, ...imgArr]
          ).map((el, i) => (
            <div className={s.media_img_wrap} key={i}>
              <Image src={el} alt="img" />
            </div>
          ))}
        </Marquee>
        <div className={s.media_body}>
          <div className={s.media_integration}>
            <h3>Integrations</h3>
            <p>
              Improving the efficiency of our project through decentralized
              innovations
            </p>
            {integrationImg.map((el, i) => (
              <Image
                key={i}
                className={clsx(
                  s.media_integration_img,
                  s[`media_integration_img_${i + 1}`]
                )}
                src={el}
                alt="integration"
              />
            ))}
          </div>

          <div className={s.media_social_container}>
            <div className={s.media_token_wrap}>
              <h2>Source Code on GitHub & GitBook</h2>
              <p>
                Want to see how it works from the inside? We love transparency
                and freedom, so you can explore the source code of our projects
                directly on GitHub and GitBook. Explore, contribute, and create
                new opportunities for the world of cryptocurrency casinos with
                us!
              </p>
              <Image className={s.media_token} src={media_token} alt="token" />
            </div>
            <div className={s.media_links_container}>
              <div
                onClick={() => window.open("", "_blank")}
                className={s.media_links}
              >
                Gitbook <GitbookIcon />
              </div>
              <div
                onClick={() => window.open("", "_blank")}
                className={s.media_links}
              >
                Github <GithubIcon />
              </div>
              <Image src={bg} className={s.media_links_img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
