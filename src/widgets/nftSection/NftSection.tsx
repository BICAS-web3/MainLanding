import s from "./styles.module.scss";
import { FC } from "react";
import bgImg from "@/public/media/nftSection/NftsectionBg.png";
import mainBgImg from "@/public/media/common/commonSectionsBg.png";
import { Button } from "@/shared/ui/Button";

interface NftSectionProps {}

export const NftSection: FC<NftSectionProps> = () => {
  return (
    <div className={s.nft_section}>
      <img src={bgImg.src} className={s.nft_bg_img} alt="bg-img-nft-static" />
      <img src={mainBgImg.src} className={s.main_bg_img} alt="bg-static" />
      <div className={s.bg_ellipse}></div>
      <div className={s.nft_section_container}>
        <div className={s.nft_section_body}>
          <div className={s.nft_section_info_wrap}>
            <div className={s.nft_section_info_block}>
              <h2 className={s.nft_section_title}>
                Explore Our{" "}
                <span>
                  NFT <br /> Market
                </span>{" "}
                for Unique <br /> Digital Assets
              </h2>
              <p className={s.nft_section_text}>
                Discover an array of unique digital assets in our NFT
                marketplace. Explore a diverse collection of non-fungible
                tokens, from art to virtual assets, and find the perfect
                addition to your digital portfolio
              </p>
            </div>
            <Button className={s.nft_market_btn}>NFT Market</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
