import type { AppProps } from "next/app";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import celoGroups from "@celo/rainbowkit-celo/lists";
import Layout from "../components/layouts/Layout";
import CreatorLayout from "../components/layouts/CreatorLayout";
import InfluencerLayout from "../components/layouts/InfluencerLayout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { publicProvider } from "wagmi/providers/public";
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SEOHead from "../components/SEOHead";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;

const { chains, publicClient } = configureChains(
  [Celo, Alfajores],
  [publicProvider()]
);

const connectors = celoGroups({
  chains,
  projectId,
  appName: (typeof document === "object" && document.title) || "ChainWise",
});

const appInfo = {
  appName: "ChainWise",
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient: publicClient,
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
        <RainbowKitProvider
          chains={chains}
          appInfo={appInfo}
          modalSize="compact"
        >
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
