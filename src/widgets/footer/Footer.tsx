import { FC, useEffect, useState } from "react";
import s from "./styles.module.scss";

import logo from "@/public/media/common/footerLogo.png";

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

import Link from "next/link";

const socialMediaList = [
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
    title: "Messenger",
    href: "#",
  },
  {
    title: "Info",
    href: "#",
  },
  {
    title: "Communities",
    href: "#",
  },
  {
    title: "Referral Program",
    href: "#",
  },
  {
    title: "News",
    href: "#",
  },
  {
    title: "Terms of Use",
    href: "#",
  },
];

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const [textBlockHeight, setTextBlockHeight] = useState(0);
  const [is700, setIs700] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      const el = document.getElementById("footer-text");

      width < 700 && setIs700(true);

      el && setTextBlockHeight(el?.clientHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={s.footer}>
      <div className={s.border_shadow}></div>
      <div className={s.footer_container}>
        <div className={s.footer_body}>
          <div className={s.footer_top}>
            <div className={s.footer_top_group}>
              <img src={logo.src} alt="logo" className={s.footer_logo} />
              <div className={s.footer_links_list}>
                {links.map((item, ind) => (
                  <Link
                    key={ind}
                    className={s.footer_links_list_item}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className={s.footer_underTop_info_block}>
              <p className={s.footer_text} id="footer-text">
                The content on this website is not intended to serve as
                investment advice, financial advice, or trading advice, and you
                should not interpret any of the website&apos;s information as
                such. DRAX does not endorse the buying, selling, or holding of
                any cryptocurrencies by users. We strongly advise you to conduct
                your own thorough research and seek guidance from a qualified
                financial advisor before making any investment choices. Please
                note that the DRAX BEP-20 compatible token and exchange
                distribution is not accessible to U.S. citizens, residents, or
                entities. Additionally, no information related to the ongoing
                exchange distribution will be provided or discussed in regard to
                these parties.
              </p>
              <div
                className={s.footer_socials_list}
                style={{ height: is700 ? textBlockHeight : "100%" }}
              >
                {socialMediaList.map((item, ind) => (
                  <Link
                    key={ind}
                    href={item.href}
                    className={s.footer_socials_list_item}
                  >
                    <img src={item.ico.src} alt="ico" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={s.footer_bottom}>
            <span className={s.copy_text}>
              Copyright © 2023-2024 «GREEK KEEPERS».
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
