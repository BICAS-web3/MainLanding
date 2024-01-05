import { FC, useEffect, useState } from "react";
import s from "./styles.module.scss";
import bgGroup from "@/public/media/common/commonSectionsBg.png";
import logo from "@/public/media/common/footerLogo_2.png";

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

import Link from "next/link";
import { socialLinks } from "../header/Header";

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
      <img src={bgGroup.src} className={s.footer_bg_img} alt="" />
      <div className={s.border_shadow}></div>
      <div
        className={"container"}
        // s.footer_container
      >
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
                {socialLinks.map((item, ind) => (
                  <Link
                    target="_blank"
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
            <span className={s.footer_bottom_mob_text}>
              © 2023 GreekKeepers
            </span>
            <span className={s.footer_bottom_mob_text}>
              BSC METAVERSE LIMITED | License no. 26818
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
