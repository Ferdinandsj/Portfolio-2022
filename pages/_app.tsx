import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";
import { GlobalContextProvider } from "../context/GlobalContext";
import React from "react";

export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <title>Ferdinand S-J</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/vmk3sno.css"
        />
      </Head>
      <GlobalContextProvider>
        <Toaster />
        <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  );
}
