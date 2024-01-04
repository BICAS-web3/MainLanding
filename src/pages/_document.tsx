import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512.png"
        />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/Apple180.webp" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/Apple180.png" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="/favicon16.ico"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/favicon32.ico"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="48x48"
          href="/favicon48.ico"
        />{" "}
        <title>GreekKeepers | Main</title>
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDJSCGDF"height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
