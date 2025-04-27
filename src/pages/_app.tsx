import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Footer } from "@/components"; // ← Ahora funciona

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
