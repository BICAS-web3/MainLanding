import { FC } from "react";
import s from "./styles.module.scss";
import sectionBg from "@/public/media/heroSection/heroSecBg.png";
import { Button } from "@/shared/ui/Button";

interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <div className={s.hero_section}>
      <img src={sectionBg.src} alt="img-bg" className={s.img_bg} />
      <div className={s.hero_section_container}>
        <div className={s.hero_section_body}>
          <h1 className={s.hero_section_title}>
            THE ANCIENT <br /> GREEK HISTORY <br /> KEEPERS CLUB
          </h1>
          <p className={s.hero_section_text}>
            Space of Web3 Tools aims to cross the border of blockchain adoption
            and Fun dive into Crypto with Messenger, NFT, GameFi, Launchpad
          </p>
          <Button className={s.buy_token_btn}>Buy Token</Button>
        </div>
      </div>
    </div>
  );
};
