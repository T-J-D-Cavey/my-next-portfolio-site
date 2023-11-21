import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";


// We need to add a provider here to pass our global state:

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tim's Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
