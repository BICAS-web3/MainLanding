import s from "./styles.module.scss";
import { FC, useEffect, useState } from "react";
import bgImg from "@/public/media/welcomeSection/welcomeSectionBg.png";
import bgImg2 from "@/public/media/common/commonSectionsBg.png";
import imgsGroup from "@/public/media/welcomeSection/imgsGroup.png";
import imgsGroup1280 from "@/public/media/welcomeSection/imgsGroup1280.png";
import imgsGroupMob from "@/public/media/welcomeSection/mob2x.webp";
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
    <div className={s.welcome_section} id="welcome_section">
      <img src={bgImg2.src} alt="bg-img" className={s.section_bg_img} />
      <img src={bgImg.src} alt="bg-img-2" className={s.section_bg_img_2} />
      <div className={s.bg_ellipse}></div>
      <div className={"container"}>
        <div className={s.welcome_section_body}>
          <div className={s.welcome_section_info}>
            <div className={s.welcome_section_info_block}>
              <h2 className={s.welcome_section_title}>
                Welcome to the <span>Future</span> <br /> of WEB 3.0{" "}
                <span>Gaming</span>
              </h2>
              <p className={s.welcome_section_text}>
                GreekKeepers is a Web3 gaming platform on blockchain with
                transparency of results through VRF, no registration or deposits
                required, with full user control over their funds.
              </p>
            </div>
            <Button
              className={s.join_btn}
              onClick={() =>
                window.open("https://game.greekkeepers.io/", "_blank")
              }
            >
              Join Game
            </Button>
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
