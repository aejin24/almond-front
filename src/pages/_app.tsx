import "@shared/styles/config/reset.scss";
import "@shared/styles/config/global.scss";

import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { TNextPageWithLayout } from "@shared/types/common";

import wrapper from "@shared/store";

import GlobalModal from "@shared/components/modal/GlobalModal";

type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout;
};

export default function App({ Component, ...appProps }: TAppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
            cacheTime: 60 * 30 * 1000, // 30분
          },
        },
      }),
  );

  const { store, props } = wrapper.useWrappedStore(appProps);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Hydrate state={props.pageProps.dehydratedState}>
          <GlobalModal>{getLayout(<Component {...props.pageProps} />)}</GlobalModal>
        </Hydrate>
      </Provider>
    </QueryClientProvider>
  );
}
