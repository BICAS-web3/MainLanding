import { FC, useCallback, useRef, useState } from "react";
import Image from "next/image";

import s from "./styles.module.scss";

import clsx from "clsx";
import { Button } from "@/shared/ui/Button";
import { SwiperSlide, Swiper, SwiperRef } from "swiper/react";
import "swiper/css";
import { Scrollbar } from "swiper/modules";
import { PrevArrIcon } from "@/shared/SVG/PrevArrIcon";
import { NextArrIcon } from "@/shared/SVG/NextArrIcon";

import bg from "@/public/media/draxSection/Vector.svg";
import roadmap_line_1 from "@/public/media/roadmapSection/roadmap_line_1.svg";
import roadmap_line_2 from "@/public/media/roadmapSection/roadmap_line_2.svg";
import roadmap_line_3 from "@/public/media/roadmapSection/roadmap_line_3.svg";
import roadmap_coun_1 from "@/public/media/roadmapSection/roadmap_coun_1.svg";

interface RoadmapSectionProps {}

export const RoadmapSection: FC<RoadmapSectionProps> = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);
  return (
    <section className={s.roadmap} id="roadmap_section">
      <Image src={bg} className={s.roadmap_line} alt="" />
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
      <article className={s.roadmap_datapicker}>
        <Swiper
          ref={swiperRef}
          direction="horizontal"
          spaceBetween={279}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className={s.roadmap_swiper}
          modules={[Scrollbar]}
        >
          {[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ].map((el) => (
            <SwiperSlide className={s.roadmap_swiper_slide} key={el}>
              {el}
            </SwiperSlide>
          ))}
        </Swiper>
        <PrevArrIcon
          className={clsx(s.roadmap_arr, s.roadmap_arr_next)}
          onClick={handlePrev}
        />
        <NextArrIcon
          onClick={handleNext}
          className={clsx(s.roadmap_arr, s.roadmap_arr_prev)}
        />
        <div className={s.roadmap_number_conteiner}>
          {" "}
          {[22, 29, 5, 12, 19, 26, 29, 3, 10, 17, 24, 31, 7, 14, 21, 28].map(
            (el, i) => (
              <span className={s.roadmap_number} key={i}>
                {el}
              </span>
            )
          )}
          <Image className={s.roadmap_line_1} src={roadmap_line_1} alt="" />
          <Image className={s.roadmap_line_2} src={roadmap_line_2} alt="" />
          <Image className={s.roadmap_line_3} src={roadmap_line_3} alt="" />
          <Image className={s.roadmap_coun_1} src={roadmap_coun_1} alt="" />
          <span className={s.roadmap_20}>20</span>
        </div>
        <div className={s.roadmap_data_container_1}>
          <div className={clsx(s.roadmap_data_item, s.roadmap_data_item_1)}>
            1. Project architecture and design
          </div>
          <div className={clsx(s.roadmap_data_item, s.roadmap_data_item_2)}>
            6. Release of additional NFT collections
          </div>
        </div>
        <div className={clsx(s.roadmap_data_item, s.roadmap_data_item_3)}>
          2. Development and token release (Token Generation Event)
        </div>
        <div className={clsx(s.roadmap_data_item, s.roadmap_data_item_4)}>
          3. Official website and communication channels
        </div>
        <div className={s.roadmap_data_container_2}>
          <div className={clsx(s.roadmap_data_item, s.roadmap_data_item_5)}>
            4. Involve the community and media
          </div>
          <div className={clsx(s.roadmap_data_item, s.roadmap_data_item_6)}>
            5. Integration with other sales platforms
          </div>
        </div>
        <div className={clsx(s.roadmap_data_item, s.roadmap_data_item_7)}>
          7. Listing on Defi Exchange
        </div>
      </article>
    </section>
  );
};
