import type { AppProps } from "next/app";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { polygonMumbai, celoAlfajores } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import Layout from "../components/layouts/Layout";
import CreatorLayout from "../components/layouts/CreatorLayout";
import InfluencerLayout from "../components/layouts/InfluencerLayout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SEOHead from "../components/SEOHead";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://polygon-mumbai.gateway.tenderly.co`,
      }),
    }),
  ]
);

const { connectors, wallets } = getDefaultWallets({
  appName: "ChainWise",
  chains,
  projectId,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

//setup react query
const queryClient = new QueryClient();

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => setIsLoaded(true));

  return (
    //@ts-ignore

    isLoaded && ( //@ts-ignore
      <WagmiConfig config={wagmiConfig}>
        <SEOHead />
        <RainbowKitProvider chains={chains} modalSize="compact">
          <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
              <Layout>
                {router?.pathname?.includes("creator") ? (
                  <CreatorLayout>
                    <Component {...pageProps} />
                  </CreatorLayout>
                ) : router?.pathname?.includes("influencer") ? (
                  <InfluencerLayout>
                    <Component {...pageProps} />
                  </InfluencerLayout>
                ) : (
                  <Component {...pageProps} />
                )}
              </Layout>
            </QueryClientProvider>
          </SessionProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    )
  );
}

export default App;
