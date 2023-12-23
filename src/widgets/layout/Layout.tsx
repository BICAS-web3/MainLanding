import { Main } from "@/widgets/main/Main";
import s from "./styles.module.scss";
import { FC } from "react";
import { HeroSection } from "../heroSection/HeroSection";
import { Header } from "../header/Header";
import { WelcomeSection } from "../welcomeSection/WelcomeSection";
import { DraxSection } from "../draxSection/DraxSection";

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
        </Main>
      </div>
      {/* footer */}
    </div>
  );
};
