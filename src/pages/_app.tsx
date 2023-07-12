import "@shared/styles/config/reset.scss";
import "@shared/styles/config/global.scss";

import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TNextPageWithLayout } from "@shared/types/common";

type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout;
};

export default function App({ Component, pageProps }: TAppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      }),
  );

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{getLayout(<Component {...pageProps} />)}</Hydrate>
    </QueryClientProvider>
  );
}
