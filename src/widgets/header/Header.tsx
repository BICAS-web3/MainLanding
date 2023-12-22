import { FC } from "react";
import s from "./styles.module.scss";
import logo from "@/public/media/common/headerLogo.svg";
import Link from "next/link";

const links = [
  {
    title: "Communities",
    href: "#",
  },
  {
    title: "Referral Program",
    href: "#",
  },
  {
    title: "Messenger",
    href: "#",
  },
  {
    title: "News",
    href: "#",
  },
  {
    title: "Info",
    href: "#",
  },
];

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={s.header}>
      <div className={s.header_container}>
        <div className={s.header_body}>
          <img src={logo.src} alt="header-logo" />
          <div className={s.header_links_list}>
            {links.map((item, ind) => (
              <Link
                key={ind}
                className={s.header_links_list_item}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
