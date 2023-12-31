import { FC, useEffect, useState } from "react";

import {
  ArbitrumIcon,
  CardIcon,
  ContactIcon,
  DraxIcon,
  LogoIcon,
  MapIcon,
  MetamaskIcon,
  PancakeIcon,
  USDTIcon,
} from "@/shared/SVG";
import { Button } from "@/shared/ui/Button";

import line from "@/public/media/common/silver_line.svg";
import bg from "@/public/media/draxSection/Vector.svg";
import sircle from "@/public/media/draxSection/sircle.png";
import statistic_1 from "@/public/media/draxSection/statistic_1.svg";
import statistic_2 from "@/public/media/draxSection/statistic_2.svg";
import statistic_3 from "@/public/media/draxSection/statistic_3.svg";
import statistic_4 from "@/public/media/draxSection/statistic_4.svg";
import statistic_5 from "@/public/media/draxSection/statistic_5.svg";
import statistic_6 from "@/public/media/draxSection/statistic_6.svg";
import statistic_7 from "@/public/media/draxSection/statistic_7.svg";

import s from "./styles.module.scss";

import clsx from "clsx";
import Image from "next/image";

import imgBg from "@/public/media/common/commonSectionsBg.png";
import { useAccount, useConnect } from "wagmi";
interface DraxSectionProps {}

export const DraxSection: FC<DraxSectionProps> = () => {
  const [is1280, setis1280] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 700) {
        setisMobile(true);
      } else {
        setisMobile(false);
      }

      if (width < 998) {
        setis1280(true);
      } else {
        setis1280(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const statistic = [
    { title: "Events", amount: "3,0%", icon: statistic_1 },
    { title: "NFT, GameFi Incentives", amount: "7,0%", icon: statistic_2 },
    { title: "Team", amount: "10,0%", icon: statistic_3 },
    { title: "Marketing", amount: "10,0%", icon: statistic_4 },
    { title: "Burn", amount: "20,0%", icon: statistic_5 },
    {
      title: "Investors and Early Adopters",
      amount: "20,0%",
      icon: statistic_6,
    },
    { title: "Trading Liquidity", amount: "30,0%", icon: statistic_7 },
  ];

  const TypeButtons = ["Overall", "Last Year"];
  type TypeButtons = "Overall" | "Last Year";
  const [activeTab, setActiveTab] = useState<TypeButtons>("Overall");
  return (
    <section className={s.drax} id="drax_section">
      <Image src={imgBg} alt="img-bg-static" className={s.bg_img} />
      <Image className={s.silver_line} src={line} alt="line" />
      <Image className={s.silver_line_2} src={line} alt="line" />
      <div className="container">
        {" "}
        <article className={s.drax_container}>
          <MapIcon className={s.map_1} />
          <MapIcon className={s.map_2} />
          <div className={s.drax_wrap}>
            <div className={s.drax_after}>
              <h2 className={s.drax_title}>
                DRAX <span>Token</span>
              </h2>
              <p className={s.drax_text}>
                DRAX, our exclusive token, unlocks a world of privileges and
                rewards in our project. We&apos;re enhancing DRAX&apos;s
                features and allocating 20% of our ecosystem&apos;s revenue to
                burn DRAX tokens, aiming to reduce supply and potentially boost
                value.
              </p>
            </div>
            <div className={s.drax_bottom_container}>
              <div className={s.btn_container}>
                <Button
                  onClick={() =>
                    window.open(
                      "https://pancakeswap.finance/swap?outputCurrency=0x7f7F49B6128F7CB89BAaB704F6EA1662A270455b",
                      "_blank"
                    )
                  }
                  className={clsx(s.drax_btn, s.drax_btn_2)}
                >
                  <PancakeIcon /> Buy on PancakeSwap
                </Button>
                <Button className={clsx(s.drax_btn, s.drax_btn_1)}>
                  <MetamaskIcon /> Add Drax to MetaMask
                </Button>
              </div>
              {is1280 && <Swap />}
            </div>
          </div>
          {!is1280 && <Swap />}
        </article>
        <article className={s.allocation_contaoner}>
          <div className={s.allocation_text}>
            <div className={s.allocation_after}>
              {" "}
              <h2 className={s.drax_title}>
                <span>Token </span>Allocation
              </h2>
              <p>
                Drax Burn each time of token transfer. Token burn will end until
                total token burn becomes 200 million DRAX.{" "}
                {isMobile && (
                  <div className={s.allowance_sircle_statistic}>
                    <Image src={sircle} alt="statistic" />
                    <div className={s.allowance_sircle_text}>
                      100%
                      <span>of Drax token</span>
                    </div>
                  </div>
                )}
              </p>
            </div>
            <Button
              onClick={() =>
                window.open(
                  "https://bscscan.com/token/0x7f7f49b6128f7cb89baab704f6ea1662a270455b#code",
                  "_blank"
                )
              }
              className={s.contact_btn}
            >
              <ContactIcon /> Contract
            </Button>
          </div>
          <div className={s.allocation_statistic}>
            {!isMobile && (
              <div className={s.allowance_sircle_statistic}>
                <Image src={sircle} alt="statistic" />
                <div className={s.allowance_sircle_text}>
                  100%
                  <span>of Drax token</span>
                </div>
              </div>
            )}
            <div className={s.statistic}>
              <div className={s.statistic_head}>
                <div className={s.allocation_contaoner_data}>
                  <span className={s.allowance_about_token}>Total Supply</span>
                  <p className={s.allowance_token_price}>
                    764,262,999 <span>DRAX</span>
                  </p>
                </div>
                <div className={s.allocation_contaoner_data}>
                  <span className={s.allowance_about_token}>
                    Burn in Smart Contract
                  </span>
                  <p className={s.allowance_token_price}>
                    200,000,000 <span>DRAX</span>
                  </p>
                </div>
                <div className={s.statistic_tabs}>
                  {TypeButtons.map((el: any) => (
                    <button
                      className={clsx(
                        s.statistic_tab,
                        el === activeTab && s.statistic_tab_active
                      )}
                      // onClick={() => setActiveTab(el)}
                      key={el}
                    >
                      {el}
                    </button>
                  ))}
                </div>
              </div>
              <div className={s.statistic_container}>
                {statistic.map((el, i) => (
                  <div className={s.statistic_item} key={i}>
                    {el.title}
                    <span>
                      {el.amount} <Image src={el.icon} alt="icon" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export const Swap = () => {
  const { connectors, connect } = useConnect();
  const { isConnected } = useAccount();
  const [connectText, setConnectText] = useState("Connect Wallet");

  useEffect(() => {
    if (isConnected) {
      setConnectText("Connected");
    } else {
      setConnectText("Connect Wallet");
    }
  }, [isConnected]);

  return (
    <div className={s.drax_swap_under}>
      <div className={s.drax_swap}>
        {/* <Image className={s.drax_swap_bg} src={bg} alt="bg" /> */}
        <div className={s.drax_title_container}>
          <span></span>
          <h3 className={s.drax_swap_title}>1 DRAX = $0.0337</h3>
          <span></span>
        </div>
        <div className={s.drax_swap_btns}>
          <button className={s.drax_btn_pay}>
            <ArbitrumIcon /> ARB
          </button>
          <button className={s.drax_btn_pay}>
            <USDTIcon /> USDT
          </button>
          <button className={s.drax_btn_pay}>
            <CardIcon /> CARD
          </button>
        </div>
        <div className={s.drax_input_container}>
          <div className={s.drax_amount_container}>
            <span className={s.drax_amount}>
              Amount in <span>ARB</span> you pay
            </span>
            <div className={s.drax_input_wrapp}>
              <input disabled placeholder="0" className={s.drax_} type="text" />
              <ArbitrumIcon />
            </div>
          </div>
          <div className={s.drax_amount_container}>
            <span className={s.drax_amount}>
              Amount in <span>DRAX</span> you receive
            </span>
            <div className={s.drax_input_wrapp}>
              <input disabled placeholder="0" className={s.drax_} type="text" />
              <DraxIcon />
            </div>
          </div>
        </div>
        <div className={s.drax_btn_container}>
          <button className={s.drax_buy} disabled>
            <div className={s.hover_el_gray}></div>
            Coming soon
          </button>
        </div>
        <div className={s.drax_undertitle}>
          Powered by
          <LogoIcon />
        </div>
        <a className={s.drax_link} href="#">
          HOW to buy
        </a>
      </div>
    </div>
  );
};
