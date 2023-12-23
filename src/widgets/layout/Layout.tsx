import { Main } from "@/widgets/main/Main";
import s from "./styles.module.scss";
import { FC } from "react";
import { HeroSection } from "../heroSection/HeroSection";
import { Header } from "../header/Header";
import { WelcomeSection } from "../welcomeSection/WelcomeSection";
import { DraxSection } from "../draxSection/DraxSection";
import { MediaSection } from "../mediaSection/MediaSection";
import { ProgramSection } from "../programSection/ProgramSection";
import { SocialSection } from "../socialSection/SocialSection";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className={s.page_container}>
      <Header />
      <div className={s.content}>
        <Main>
          <HeroSection />
          <WelcomeSection />
          <DraxSection />
          <MediaSection />
          <ProgramSection />
          <SocialSection />
        </Main>
      </div>
      {/* footer */}
    </div>
  );
};
