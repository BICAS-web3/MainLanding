import s from "./styles.module.scss";
import { FC } from "react";

import bgImg from "@/public/media/welcomeSection/welcomeSectionBg.png";
import bgImg2 from "@/public/media/common/commonSectionsBg.png";
import imgsGroup from "@/public/media/welcomeSection/imgsGroup.png";
import { Button } from "@/shared/ui/Button";

interface WelcomeSectionProps {}

export const WelcomeSection: FC<WelcomeSectionProps> = () => {
  return (
    <div className={s.welcome_section}>
      <img src={bgImg2.src} alt="bg-img" className={s.section_bg_img} />
      <img src={bgImg.src} alt="bg-img-2" className={s.section_bg_img_2} />
      <img
        src={imgsGroup.src}
        alt="imgs-group-right-static"
        className={s.right_imgs_group}
      />
      <div className={s.bg_ellipse}></div>
      <div className={s.welcome_section_container}>
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
          {/* <div className={s.right_img_wrap}>

          </div> */}
        </div>
      </div>
    </div>
  );
};
