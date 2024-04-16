import { SelectProductProvider } from "@/context/provider/selectProductProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.scss";
import { ShowCartProvider } from "@/context/provider/showCartProvider";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>MKS Store</title>
      </Head>
      <SelectProductProvider>
        <ShowCartProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </ShowCartProvider>
      </SelectProductProvider>
    </>
  );
}
