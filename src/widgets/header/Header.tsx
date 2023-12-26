import { FC, useEffect, useRef } from "react";
import s from "./styles.module.scss";
import logo from "@/public/media/common/headerLogo.svg";
import Link from "next/link";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/scss";
import { useRouter } from "next/router";

import rightIco from "@/public/media/common/rightIco.svg";
import { Navigation } from "swiper/modules";
import clsx from "clsx";

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
  const swiperRef = useRef<SwiperRef>(null);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      const welcomeSec = document.getElementById("welcome_section");
      const nftSection = document.getElementById("nft_section");
      const messangerSection = document.getElementById("messanger_section");
      const partnersSection = document.getElementById("partners_section");
      const draxSection = document.getElementById("drax_section");
      const mediaSection = document.getElementById("media_section");
      const roadmapSection = document.getElementById("roadmap_section");
      const vipSection = document.getElementById("vip_section");
      const communitySection = document.getElementById("community_section");

      if (
        welcomeSec &&
        nftSection &&
        messangerSection &&
        partnersSection &&
        draxSection &&
        mediaSection &&
        roadmapSection &&
        vipSection &&
        communitySection
      ) {
        if (screenY < 990) {
          swiperRef.current?.swiper.slideTo(0);
        }

        if (scrollY > 990 && scrollY < nftSection.offsetTop - 10) {
          swiperRef.current?.swiper.slideTo(1);
        } else if (
          scrollY > nftSection.offsetTop - 1 &&
          scrollY < messangerSection.offsetTop - 1
        ) {
          swiperRef.current?.swiper.slideTo(2);
        } else if (
          scrollY > messangerSection.offsetTop - 1 &&
          scrollY < partnersSection.offsetTop - 1
        ) {
          swiperRef.current?.swiper.slideTo(3);
        } else if (
          scrollY > partnersSection.offsetTop - 1 &&
          scrollY < draxSection.offsetTop - 1
        ) {
          swiperRef.current?.swiper.slideTo(4);
        } else if (
          scrollY > draxSection.offsetTop - 1 &&
          scrollY < mediaSection.offsetTop - 1
        ) {
          swiperRef.current?.swiper.slideTo(5);
        } else if (
          scrollY > mediaSection.offsetTop - 1 &&
          scrollY < roadmapSection.offsetTop - 1
        ) {
          swiperRef.current?.swiper.slideTo(6);
        } else if (
          scrollY > roadmapSection.offsetTop - 1 &&
          scrollY < vipSection.offsetTop - 1
        ) {
          swiperRef.current?.swiper.slideTo(7);
        } else if (
          scrollY > vipSection.offsetTop - 1 &&
          scrollY < communitySection.offsetTop - 1
        ) {
          swiperRef.current?.swiper.slideTo(8);
        } else if (scrollY > communitySection.offsetTop - 1) {
          swiperRef.current?.swiper.slideTo(9);
        }
      }
    };

    handleResize();

    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <div className={s.header}>
      <div className={s.header_container}>
        <div className={s.header_body}>
          <img src={logo.src} alt="header-logo" />
          <div className={s.header_links_list}>
            <img
              src={rightIco.src}
              alt="prev-btn"
              className={clsx(s.swiper_prev_btn, "header_prev_el")}
            />
            <Swiper
              modules={[Navigation]}
              ref={swiperRef}
              slidesPerView={"auto"}
              spaceBetween={22}
              className={s.swiper}
              navigation={{
                prevEl: ".header_prev_el",
                nextEl: ".header_next_el",
              }}
            >
              {links.map((item, ind) => (
                <SwiperSlide
                  key={ind}
                  data-id={ind + 1}
                  className={s.swiper_slide}
                >
                  <Link href={item.href}>
                    <span className={s.swiper_slide_title}>{item.title}</span>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <img
              src={rightIco.src}
              className={clsx(s.swiper_next_btn, "header_next_el")}
              alt="next-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
