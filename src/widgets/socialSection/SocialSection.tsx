import { FC, useState } from "react";
import Image from "next/image";

import s from "./styles.module.scss";

import leptop from "@/public/media/programSection/program.png";

import clsx from "clsx";
import { Button } from "@/shared/ui/Button";

interface SocialSectionProps {}

export const SocialSection: FC<SocialSectionProps> = () => {
  return (
    <section className={s.social}>
      <div className={s.social_container}>
        <h2 className={s.social_title}>
          <span>Stay</span>
          <br /> with us
        </h2>
        <p className={s.social_text}>
          Keep up with the GreekKeepers DeFi and do not miss the opportunity
          to receive an rewards from Gods and rise to the Web3 Olympus
        </p>
        <div className={s.social_form}>
          <input placeholder="Enter your e-mail address" type="text" />
          <Button className={s.social_fotm_btn}>Subscribe</Button>
        </div>
      </div>
      <article>
        <h2>Join our socials</h2>
      </article>
    </section>
  );
};
