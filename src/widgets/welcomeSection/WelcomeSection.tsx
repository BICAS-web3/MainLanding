import s from "./styles.module.scss";
import { FC, useEffect, useState } from "react";
import useMatchMedia from "use-match-media-hook";
import bgImg from "@/public/media/welcomeSection/welcomeSectionBg.png";
import bgImg2 from "@/public/media/common/commonSectionsBg.png";
import imgsGroup from "@/public/media/welcomeSection/imgsGroup.png";
import imgsGroup1280 from "@/public/media/welcomeSection/imgsGroup1280.png";
import imgsGroupMob from "@/public/media/welcomeSection/imgsGroupMob.png";
import { Button } from "@/shared/ui/Button";

interface WelcomeSectionProps {}

export const WelcomeSection: FC<WelcomeSectionProps> = () => {
  const [is1280, setIs1280] = useState(false);
  const [is650, setIs650] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(window.innerWidth);

      if (width < 1280 && width > 650) {
        setIs1280(true);
        setIs650(false);
      } else if (width < 650) {
        setIs1280(false);
        setIs650(true);
      } else {
        setIs1280(false);
        setIs650(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={s.welcome_section}>
      <img src={bgImg2.src} alt="bg-img" className={s.section_bg_img} />
      <img src={bgImg.src} alt="bg-img-2" className={s.section_bg_img_2} />
      <div className={s.bg_ellipse}></div>
      <div
        className={s.welcome_section_container}
        style={{
          maxWidth:
            windowWidth > 1280
              ? 1500 + (windowWidth - 1500) / 2
              : 1075 + (windowWidth - 1075) / 2,
        }}
      >
        <div className={s.welcome_section_body}>
          <div className={s.welcome_section_info}>
            <div className={s.welcome_section_info_block}>
              <h2 className={s.welcome_section_title}>
                Welcome to the <span>Future</span> <br /> of WEB 3.0{" "}
                <span>Gaming</span>
              </h2>
              <p className={s.welcome_section_text}>
                Step into a New Dimension of Gaming with Our Cutting-Edge Web
                3.0 Platform: Seamless, Decentralized, and Limitless in
                Possibilities&quot;
              </p>
            </div>
            <Button className={s.join_btn}>Join Game</Button>
          </div>
          <div className={s.right_img_wrap}>
            <img
              src={
                is1280
                  ? imgsGroup1280.src
                  : is650
                  ? imgsGroupMob.src
                  : imgsGroup.src
              }
              alt="imgs-group-right-static"
              className={s.right_imgs_group}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
