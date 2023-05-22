import "../styles/global.css";
import { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />;
    </main>
  );
}
