import { FC, useState } from "react";
import Image from "next/image";

import s from "./styles.module.scss";

import leptop from "@/public/media/programSection/program.png";

import clsx from "clsx";
import { Button } from "@/shared/ui/Button";

interface ProgramSectionProps {}

export const ProgramSection: FC<ProgramSectionProps> = () => {
  return (
    <section className={s.program}>
      {" "}
      <div className={s.drax_container}>
        <h2 className={s.drax_title}>
          <span> Discover Our</span>
          <br /> VIP Program
        </h2>
        <p className={s.drax_text}>
          Unlock a World of Exclusive Rewards, Personalized Assistance, and
          Premium Benefits with Our Elite VIP Program"
        </p>
        <Button className={clsx(s.program_btn)}>Learn more</Button>
      </div>
      <Image className={s.program_leptop} src={leptop} alt="leptop" />
    </section>
  );
};
