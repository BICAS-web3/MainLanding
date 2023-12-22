import { EffectorNext } from "@effector/next";
import type { AppProps } from "next/app";
import "@/shared/styles/global.scss";
import { Fonts } from "@/shared/fonts/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EffectorNext values={pageProps?.values}>
      <Fonts />
      <Component {...pageProps} />
    </EffectorNext>
  );
}
