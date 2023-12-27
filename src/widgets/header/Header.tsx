import { FC, useEffect, useRef } from "react";
import s from "./styles.module.scss";
import logo from "@/public/media/common/headerLogo.svg";
import Link from "next/link";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/scss";
import { useRouter } from "next/router";

import pattern from "@/public/media/common/burgerMobPattern.png";

import rightIco from "@/public/media/common/rightIco.svg";
import { Navigation } from "swiper/modules";
import clsx from "clsx";

import bgGroup from "@/public/media/common/commonSectionsBg.png";

import youtubeIco from "@/public/media/footerImages/youtube.png";
import tiktokIco from "@/public/media/footerImages/tiktok.png";
import githubIco from "@/public/media/footerImages/github.png";
import linkedinIco from "@/public/media/footerImages/linkedin.png";
import tgIco from "@/public/media/footerImages/tg.png";
import inst from "@/public/media/footerImages/inst.png";
import twitter from "@/public/media/footerImages/twitter.png";
import discord from "@/public/media/footerImages/discord.png";
import facebook from "@/public/media/footerImages/facebook.png";
import reddit from "@/public/media/footerImages/reddit.png";
import meduim from "@/public/media/footerImages/medium.png";
import main from "@/public/media/footerImages/main.png";
import { useUnit } from "effector-react";

import * as HeaderM from "./model";

const socialLinks = [
  {
    ico: youtubeIco,
    href: "#",
  },
  {
    ico: tiktokIco,
    href: "#",
  },
  {
    ico: githubIco,
    href: "#",
  },
  {
    ico: linkedinIco,
    href: "#",
  },
  {
    ico: tgIco,
    href: "#",
  },
  {
    ico: inst,
    href: "#",
  },
  {
    ico: twitter,
    href: "#",
  },
  {
    ico: discord,
    href: "#",
  },
  {
    ico: facebook,
    href: "#",
  },
  {
    ico: reddit,
    href: "#",
  },
  {
    ico: meduim,
    href: "#",
  },
  {
    ico: main,
    href: "#",
  },
];

const links = [
  {
    title: "Main",
    href: "#",
  },
  {
    title: "Web3,0 GamePlatform",
    href: "#welcome_section",
  },
  {
    title: "NFT Market",
    href: "#nft_section",
  },
  {
    title: "Messenger",
    href: "#messanger_section",
  },
  {
    title: "Referral Program",
    href: "#partners_section",
  },

  {
    title: "Token Info",
    href: "#drax_section",
  },
  {
    title: "About Paltform",
    href: "#media_section",
  },
  {
    title: "Roadmap",
    href: "#roadmap_section",
  },
  {
    title: "Vip Program",
    href: "#vip_section",
  },
  {
    title: "Community",
    href: "#community_section",
  },
];

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [open, close, isOpened] = useUnit([
    HeaderM.Open,
    HeaderM.Close,
    HeaderM.$isOpen,
  ]);

  const handleBurgerOpen = () => {
    if (!isOpened) {
      open();
    } else {
      close();
    }
  };

  return (
    <>
      <div className={s.header}>
        <img src={bgGroup.src} className={s.header_bg_img} alt="" />
        <div className={s.header_container}>
          <div className={s.header_body}>
            <img src={logo.src} alt="header-logo" />
            <div
              className={clsx(s.burger_btn, isOpened && s.burger_anim)}
              onClick={handleBurgerOpen}
            >
              <div className={s.burger_line}></div>
              <div className={s.burger_line}></div>
              <div className={s.burger_line}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(s.burger_menu_wrap, isOpened && s.burger_opened)}>
        <img
          src={bgGroup.src}
          className={clsx(s.burger_bg_img, s.burger_mob_hidden)}
          alt=""
        />
        <div>
          <div className={s.burger_menu_block}>
            <img
              src={bgGroup.src}
              className={clsx(s.burger_bg_img, s.bh_f)}
              alt=""
            />
            <img src={pattern.src} className={s.burger_mob_pattern} alt="" />
            <div className={s.yak_list}>
              {links.map((item, ind) => (
                <Link
                  href={item.href}
                  className={s.header_links_list_item}
                  key={ind}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className={s.burger_socials_block}>
              <h3 className={s.socials_title}>Socials</h3>
              <ul className={s.burger_socials_list}>
                {socialLinks.map((item, ind) => (
                  <Link href={item.href} key={ind}>
                    <img src={item.ico.src} alt="ico" />
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
