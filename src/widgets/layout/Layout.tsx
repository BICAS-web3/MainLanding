import { Main } from "@/widgets/main/Main";
import s from "./styles.module.scss";
import { FC } from "react";
import { HeroSection } from "../heroSection/HeroSection";
import { Header } from "../header/Header";
import { WelcomeSection } from "../welcomeSection/WelcomeSection";
import { NftSection } from "../nftSection/NftSection";
import { MessangerSection } from "../messangerSection/MessangerSection";
import { PartnersSection } from "../partnersSection/PartnersSection";
import { Footer } from "../footer/Footer";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className={s.page_container}>
      <Header />
      <div className={s.content}>
        <Main>
          <HeroSection />
          <WelcomeSection />
          <NftSection />
          <MessangerSection />
          <PartnersSection />
        </Main>
      </div>
      <Footer />
    </div>
  );
};
