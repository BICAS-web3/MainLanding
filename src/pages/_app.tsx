import { EffectorNext } from "@effector/next";
import type { AppProps } from "next/app";
import "@/shared/styles/global.scss";
import { Fonts } from "@/shared/fonts/Fonts";
import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";
import Script from "next/script";

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);
const config = createConfig({
  connectors: [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "01e7a60839e8572c2da88e40b1db4893",
      },
    }),
  ],
  autoConnect: true,
  publicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `
          
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NDJSCGDF');
          
          `,
        }}
      />
      <EffectorNext values={pageProps?.values}>
        <Fonts />
        <WagmiConfig config={config}>
          <Component {...pageProps} />
        </WagmiConfig>
      </EffectorNext>
    </>
  );
}
