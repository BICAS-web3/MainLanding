import localFont from "next/font/local";
import { FC } from "react";
import { Source_Sans_3, Nunito_Sans } from "next/font/google";

const source_sans_3 = Source_Sans_3({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
});

const nunito_sans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export const Fonts: FC = () => (
  <style jsx global>
    {`
      :root {
        --font-source-sans-3: ${source_sans_3.style.fontFamily};
        --font-nunito-sans: ${nunito_sans.style.fontFamily};
      }
    `}
  </style>
);
