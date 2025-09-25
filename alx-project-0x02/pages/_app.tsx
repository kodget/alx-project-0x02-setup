import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import Index from ".";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
