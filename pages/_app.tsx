import "../styles/globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster";
import { GlobalContextProvider } from "../context/GlobalContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Head>
        <title>Ferdinand S-J</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/vmk3sno.css" />
      </Head>
      <GlobalContextProvider>
        <Toaster />
        <Component {...pageProps} />
      </GlobalContextProvider>
    </main>
  );
}
