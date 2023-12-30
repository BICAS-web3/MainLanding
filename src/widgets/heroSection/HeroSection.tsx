import { FC } from "react";
import s from "./styles.module.scss";
import sectionBg from "@/public/media/heroSection/heroSecBg.webp";
import { Button } from "@/shared/ui/Button";

interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <div className={s.hero_section}>
      <div className={s.mob_dark_left_ellipse}></div>
      <div className={s.mob_dark_bottom_ellipse}></div>
      <div className={s.mob_ellipse}></div>
      <img src={sectionBg.src} alt="img-bg" className={s.img_bg} />
      <div className={s.hero_section_container}>
        <div className={s.hero_section_body}>
          <h1 className={s.hero_section_title}>
            THE ANCIENT <br /> GREEK HISTORY <br /> KEEPERS CLUB
          </h1>
          <p className={s.hero_section_text}>
            Embark on an adventure with Greek Keepers, blending ancient Greek
            mythology and modern blockchain. Discover a Web3.0 filled with
            decentralized apps, NFT games, and GameFi experiences.
          </p>
          <Button className={s.buy_token_btn}>Buy Token</Button>
        </div>
      </div>
    </div>
  );
};
