import { FC, useEffect, useState } from "react";

import {
  ArbitrumIcon,
  CardIcon,
  ContactIcon,
  DraxIcon,
  LogoIcon,
  MetamaskIcon,
  PancakeIcon,
  USDTIcon,
} from "@/shared/SVG";
import { Button } from "@/shared/ui/Button";

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

interface DraxSectionProps {}

export const DraxSection: FC<DraxSectionProps> = () => {
  const [is1280, setis1280] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 700) {
      setis1280(true);
    }
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
      <article className={s.drax_container}>
        <div className={s.drax_}>
          <h2 className={s.drax_title}>
            DRAX <span>Token</span>
          </h2>
          <p className={s.drax_text}>
            DRAX is the native token that powers GreekKeepers Space to open
            certain rights and rewards for each stakeholder. Holders be able
            to vote on feature proposals in the future, get access to discount,
            bonuses, pools, messenger premium features and much more
          </p>
          <div className={s.drax_bottom_container}>
            <div className={s.btn_container}>
              <Button className={clsx(s.drax_btn, s.drax_btn_1)}>
                <MetamaskIcon /> Add Drax to MetaMask
              </Button>
              <Button className={clsx(s.drax_btn, s.drax_btn_2)}>
                <PancakeIcon /> Buy on PancakeSwap
              </Button>
            </div>
            {is1280 && <Swap />}
          </div>
        </div>
        {!is1280 && <Swap />}
      </article>
      <article className={s.allocation_contaoner}>
        <div className={s.allocation_text}>
          <h2 className={s.drax_title}>
            <span>Token </span>Allocation
          </h2>
          <p>
            Drax Burn each time of token transfer. Token burn will end until
            total token burn becomes 200 million DRAX.
          </p>
          <Button className={s.contact_btn}>
            <ContactIcon /> Contract
          </Button>
        </div>
        <div className={s.allocation_statistic}>
          <div className={s.allowance_sircle_statistic}>
            <Image src={sircle} alt="statistic" />
            <div className={s.allowance_sircle_text}>
              100%
              <span>of Drax token</span>
            </div>
          </div>
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
                    onClick={() => setActiveTab(el)}
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
    </section>
  );
};

export const Swap = () => {
  return (
    <div className={s.drax_swap_under}>
      <div className={s.drax_swap}>
        <Image className={s.drax_swap_bg} src={bg} alt="bg" />
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
              <input placeholder="0" className={s.drax_} type="text" />
              <ArbitrumIcon />
            </div>
          </div>
          <div className={s.drax_amount_container}>
            <span className={s.drax_amount}>
              Amount in <span>DRAX</span> you receive
            </span>
            <div className={s.drax_input_wrapp}>
              <input placeholder="0" className={s.drax_} type="text" />
              <DraxIcon />
            </div>
          </div>
        </div>
        <div className={s.drax_btn_container}>
          <Button className={s.drax_connect}>Connect Wallet</Button>
          <Button className={s.drax_buy} isGray={true}>
            Buy with BNB
          </Button>
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
