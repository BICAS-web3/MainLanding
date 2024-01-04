import s from "./styles.module.scss";
import { FC } from "react";
import imgBg from "@/public/media/common/commonSectionsBg.png";
import imagesBgGroup from "@/public/media/messangerImgs/bgGroup.png";
import phoneTop from "@/public/media/messangerImgs/top2x.png";
import phoneCenter from "@/public/media/messangerImgs/center2x.png";
import phoneBottom from "@/public/media/messangerImgs/bottom2x.png";
import { Button } from "@/shared/ui/Button";
import line from "@/public/media/common/silver_line.svg";
import Image from "next/image";

interface MessangerSectionProps {}

export const MessangerSection: FC<MessangerSectionProps> = () => {
  return (
    <div className={s.messanger_section} id="messanger_section">
      <img src={imgBg.src} alt="img-bg" className={s.bg_img} />
      <Image className={s.silver_line} src={line} alt="line" />
      <div className={s.left_ellipse}></div>
      <div className={s.right_ellipse}></div>
      <img
        src={imagesBgGroup.src}
        className={s.content_bg_img}
        alt="static-bg"
      />
      <div className={s.messanger_section_container}>
        <div className={s.messanger_body}>
          <div className={s.messanger_content_block}>
            <div className={s.messanger_imgs_block}>
              <img src={phoneTop.src} className={s.top_phone} alt="top-ph" />
              <img
                src={phoneCenter.src}
                className={s.center_phone}
                alt="center-ph"
              />
              <img
                src={phoneBottom.src}
                className={s.bottom_phone}
                alt="bottom-ph"
              />
            </div>
            <div className={s.messanger_content_body}>
              <div className={s.messanger_info_wrap}>
                <div className={s.messanger_info_block}>
                  <h1 className={s.messanger_info_title}>
                    Decentralized, <span>Private and Secure</span> Messenger
                  </h1>
                  <p className={s.messanger_info_text}>
                    GreekKeepers messenger is an anonymous, secure and
                    decentralized communication centre built on top of Web3 and
                    distributed ledger data storage
                  </p>
                </div>
                <Button isGray isDisabled={true} className={s.messanger_btn}>
                  Release Soon
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
