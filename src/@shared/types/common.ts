import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type TAxiosReturn<T> = {
  status: number;
  data: T;
};

export type TNextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
