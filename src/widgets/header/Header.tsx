import { FC, useEffect, useRef, useState } from "react";
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

import youtubeIco from "@/public/media/footerImages/youtube.svg";
import tiktokIco from "@/public/media/footerImages/tiktok.svg";
import githubIco from "@/public/media/footerImages/github.svg";
import linkedinIco from "@/public/media/footerImages/linkedin.svg";
import tgIco from "@/public/media/footerImages/tg.svg";
import inst from "@/public/media/footerImages/inst.svg";
import twitter from "@/public/media/footerImages/twitter.svg";
import discord from "@/public/media/footerImages/discord.svg";
import facebook from "@/public/media/footerImages/facebook.svg";
import reddit from "@/public/media/footerImages/reddiut.svg";
import meduim from "@/public/media/footerImages/medium.svg";
import main from "@/public/media/footerImages/main.svg";
import { useUnit } from "effector-react";

import * as HeaderM from "./model";

export const socialLinks = [
  {
    ico: youtubeIco,
    href: "https://www.youtube.com/@GreekKeepers",
  },
  {
    ico: tiktokIco,
    href: "https://www.tiktok.com/@greekkeepersclub?is_from_webapp=1&sender_device=pc",
  },
  {
    ico: githubIco,
    href: "https://github.com/BICAS-web3",
  },
  {
    ico: linkedinIco,
    href: "https://www.linkedin.com/in/greek-keepers-458b78283/",
  },
  {
    ico: tgIco,
    href: "https://t.me/greekkeepers",
  },
  {
    ico: inst,
    href: "https://instagram.com/greekkeepers?igshid=NTc4MTIwNjQ2YQ==",
  },
  {
    ico: twitter,
    href: "https://twitter.com/GreekKeepers",
  },
  {
    ico: discord,
    href: "https://discord.gg/ReJVd2xJSk",
  },
  {
    ico: facebook,
    href: "https://www.facebook.com/profile.php?id=100092326343777",
  },
  {
    ico: reddit,
    href: "https://www.reddit.com/user/GreekKeepers/?rdt=59831",
  },
  {
    ico: meduim,
    href: "https://medium.com/@greekkeepers",
  },
  {
    ico: main,
    href: "https://www.greekkeepers.io/",
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

  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 700) {
        setisMobile(true);
      } else {
        setisMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpened && isMobile) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100vh";
    } else {
      document.documentElement.style.overflow = "visible";
      document.documentElement.style.height = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "visible";
      document.documentElement.style.height = "auto";
    };
  }, [isOpened]);

  return (
    <>
      <div className={s.header}>
        <img src={bgGroup.src} className={s.header_bg_img} alt="" />
        <div className={s.header_container}>
          <div className={s.header_body}>
            <img src={logo.src} alt="header-logo" />
            <div className={s.burger_open_wrap} onClick={handleBurgerOpen}>
              <div className={clsx(s.burger_btn, isOpened && s.burger_anim)}>
                <span className={clsx(s.burger_line, s.burger_line_1)}></span>
                <span className={clsx(s.burger_line, s.burger_line_2)}></span>
                <span className={clsx(s.burger_line, s.burger_line_3)}></span>
              </div>
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
        <div className={s.burger_menu_wrap_block}>
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
                  <div onClick={close}> {item.title}</div>
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
