import { FC, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import s from "./styles.module.scss";

import clsx from "clsx";
import { Button } from "@/shared/ui/Button";
import { SwiperSlide, Swiper, SwiperRef } from "swiper/react";
import "swiper/css";
import { Navigation, Scrollbar } from "swiper/modules";
import { PrevArrIcon } from "@/shared/SVG/PrevArrIcon";
import { NextArrIcon } from "@/shared/SVG/NextArrIcon";

import bg from "@/public/media/roadmapSection/bg.svg";
import roadmap_line_1 from "@/public/media/roadmapSection/line.svg";
import roadmap_line_2 from "@/public/media/roadmapSection/roadmap_line_2.svg";
import roadmap_line_3 from "@/public/media/roadmapSection/roadmap_line_3.svg";
import roadmap_coun_1 from "@/public/media/roadmapSection/roadmap_coun_1.svg";
import silver_line from "@/public/media/common/silver_line.svg";
import imgBg from "@/public/media/common/commonSectionsBg.png";
import gold_line from "@/public/media/common/gold_line.svg";

interface RoadmapSectionProps {}

export const RoadmapSection: FC<RoadmapSectionProps> = () => {
  const data = [
    {
      title: "May",
      times: [5, 12, 19, 26, 29],
      text: [
        "Project structuring and development",
        "Creation and development of token issue",
        "Creation of the official website and social networks",
      ],
    },
    {
      title: "June",
      times: [5, 12, 19, 26, 29],
      text: [
        "Listing of Drax token on Dex exchanges",
        "Expansion of the development team",
        "Planning the marketing strategy and branding of the project",
        "Planning and development of platform and game testing strategy",
      ],
    },
    {
      title: "July",
      times: [5, 12, 19, 26, 29],
      text: [
        "Active development of our Web3.0 game platform",
        "Development of Content Marketing Strategy",
      ],
    },
    {
      title: "August",
      times: [5, 12, 19, 26, 29],
      text: [
        "Launch the game platform on the main network",
        "Testing the platform on a test network to ensure it works flawlessly",
      ],
    },
    {
      title: "September",
      times: [5, 12, 19, 26, 29],
      text: [
        "Creating channels to collect and analyze feedback from users.",
        "Developing a unique collection of NFTs",
      ],
    },
    {
      title: "October",
      times: [5, 12, 19, 26, 29],
      text: [
        "Launch the game platform on the main network",
        "Add support for new networks to expand availability",
        "Introduce new games, enriching our catalog",
      ],
    },
    {
      title: "November",
      times: [5, 12, 19, 26, 29],
      text: [
        "Start selling NFT on the popular Element marketplace",
        "Create our own NFT-placement",
        "Implement referral and affiliate programs to attract and reward users",
        "Improve interface and optimize user experience",
        "Begin collaborating with arbitrage companies",
        "Continue adding new games to ensure content is constantly updated",
      ],
    },
    {
      title: "December",
      times: [5, 12, 19, 26, 29],
      text: [
        "Develop partnerships with various projects and investors",
        "Creating a basis for long-term cooperation.",
        "Update the design  of the main site",
        "Developing a VIP level system",
        "Continuing to add new games",
        "Providing fresh and exciting gaming content.",
      ],
    },
    {
      title: "January",
      times: [5, 12, 19, 26, 29],
      text: [
        "Adding token exchange (swap)",
        "Development and launch of messenger",
        "Actively attracting audience to our gaming platform",
        "Collaborate with various projects",
      ],
    },
  ];

  const swiperRef = useRef<SwiperRef>(null);
  return (
    <section className={s.roadmap} id="roadmap_section">
      <Image src={imgBg} alt="img-bg-static" className={s.bg_img} />
      <Image src={bg} className={s.roadmap_line} alt="" />
      <Image className={s.line_1} src={gold_line} alt="line" />
      <Image className={s.line_2} src={silver_line} alt="line" />
      <div className={clsx("container", s.container)}>
        <div className={s.roadmap_container}>
          <h2 className={s.roadmap_title}>
            <span> Roadmap</span>
          </h2>
          <p className={s.roadmap_text}>
            <span>Realised:</span> Build team and discuss issues,
            Launch of marketing, Whitelist registration, Distribution of NFTs to
            Whitelist owners, Develop project concept
          </p>
        </div>
        <div className={clsx(s.roadmap_datapicker)}>
          <button
            className={clsx(s.roadmap_arr, s.roadmap_arr_next, "road_prev_el")}
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.44466 0.443848L6.778 1.83274L2.77799 5.9994L6.778 10.1661L5.44466 11.555L0.111328 5.9994L5.44466 0.443848Z"
                fill="#7E7E7E"
              />
            </svg>
          </button>
          <button
            className={clsx(s.roadmap_arr, s.roadmap_arr_prev, "road_next_el")}
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.55534 11.5547L0.222005 10.1658L4.22201 5.99913L0.222006 1.83247L1.55534 0.443576L6.88867 5.99913L1.55534 11.5547Z"
                fill="#7E7E7E"
              />
            </svg>
          </button>
          <Swiper
            // initialSlide={data.length - 1}
            modules={[Navigation]}
            slidesPerView={"auto"}
            ref={swiperRef}
            className={s.swiper_wrapp}
            navigation={{
              prevEl: ".road_prev_el",
              nextEl: ".road_next_el",
            }}
          >
            {data.map((article, i) => (
              <SwiperSlide
                className={clsx(
                  s.roadmap_article,
                  s[`roadmap_article_${article.title.toLowerCase()}`]
                )}
                key={article.title}
              >
                <h3
                  className={clsx(
                    s.roadmap_article_title,
                    s[`roadmap_article_title_${article.title.toLowerCase()}`]
                  )}
                >
                  {article.title}
                </h3>
                <div className={s.roadmap_data_container}>
                  {article.times.map((time, i) => (
                    <span key={time}>{time}</span>
                  ))}
                </div>
                <div className={s.roadmap_text_container}>
                  {article.text.map((text, i_text) => (
                    <div
                      className={clsx(
                        s.roadmap_item,
                        s[`roadmap_item_${article.title.toLowerCase()}`],
                        s[
                          `roadmap_item_${article.title.toLowerCase()}_${
                            i_text + 1
                          }`
                        ]
                      )}
                      key={i_text}
                    >
                      <span className={s.iten_text}> {text}</span>
                    </div>
                  ))}
                </div>
                {article.title !== "January" && (
                  <Image
                    className={s.roadmap_line}
                    src={roadmap_line_1}
                    alt="line"
                  />
                )}
                {article.title === "May" && (
                  <Image
                    className={s.roadmap_line_2}
                    src={roadmap_line_1}
                    alt="line"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
