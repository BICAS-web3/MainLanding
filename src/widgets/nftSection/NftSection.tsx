import s from "./styles.module.scss";
import { FC, useEffect, useState } from "react";
import bgImg from "@/public/media/nftSection/NftsectionBg.png";
import mainBgImg from "@/public/media/common/commonSectionsBg.png";
import mainBgImgMob from "@/public/media/nftSection/bgMobImg.png";
import { Button } from "@/shared/ui/Button";

import line from "@/public/media/common/silver_line.svg";
import Image from "next/image";

interface NftSectionProps {}

export const NftSection: FC<NftSectionProps> = () => {
  const [is650, setIs650] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      width < 650 && setIs650(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={s.nft_section} id="nft_section">
      <img src={bgImg.src} className={s.nft_bg_img} alt="bg-img-nft-static" />
      <img src={mainBgImg.src} className={s.main_bg_img} alt="bg-static" />
      <Image className={s.silver_line} src={line} alt="line" />
      <div className={s.bg_ellipse}></div>
      <div className={s.nft_section_container}>
        <div className={s.nft_section_body}>
          <div className={s.nft_section_info_wrap}>
            <div className={s.nft_section_info_block}>
              <h2 className={s.nft_section_title}>
                Explore Our <span>NFT Market</span> for Unique Digital Assets
              </h2>
              <p className={s.nft_section_text}>
                The collection includes ancient Greek gods represented as 800
                unique NFTs. Each of these gods has its own level in the
                hierarchy, which is assigned based on its rank. Users who hold
                NFTs will be able to earn drop, which will be distributed among
                the NFTs according to the god's rank.
              </p>
            </div>
            <Button
              className={s.nft_market_btn}
              onClick={() =>
                window.open("https://game.greekkeepers.io/nftmarket", "_blank")
              }
            >
              NFT Market
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
