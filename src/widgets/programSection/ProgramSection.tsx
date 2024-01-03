import { FC, useState } from "react";
import Image from "next/image";

import s from "./styles.module.scss";

import leptop from "@/public/media/programSection/program.png";
import leptop_2 from "@/public/media/programSection/program_2.png";

import clsx from "clsx";
import { Button } from "@/shared/ui/Button";

import imgBg from "@/public/media/common/commonSectionsBg.png";
interface ProgramSectionProps {}

export const ProgramSection: FC<ProgramSectionProps> = () => {
  return (
    <section className={s.program} id="vip_section">
      <Image src={imgBg} alt="img-bg-static" className={s.bg_img} />
      <div className={clsx(s.container, "container")}>
        <div className={s.drax_container}>
          <div className={s.drax_after}>
            <h2 className={s.drax_title}>
              <span> Discover Our</span>
              <br /> VIP Program
            </h2>
            <p className={s.drax_text}>
              Unlock a World of Exclusive Rewards, Personalized Assistance, and
              Premium Benefits with Our Elite VIP Program&quot;
            </p>
          </div>
          <Button
            onClick={() =>
              window.open("https://game.greekkeepers.io/VipClub", "_blank")
            }
            className={clsx(s.program_btn)}
          >
            Learn more
          </Button>
        </div>
        {/* <Image className={s.program_leptop} src={leptop} alt="leptop" /> */}
        <Image className={s.program_leptop} src={leptop_2} alt="leptop" />
        {/* <img className={s.program_leptop} src={leptop_2.src} alt="leptop" /> */}
      </div>
    </section>
  );
};
