import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type TAxiosReturn<T> = {
  status: number;
  data: T;
};

export type TNextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export enum ModalType {
  LOADING = 1,
  DIALOG = 2,
}

export type TDialogProps = {
  type: "ALERT" | "CONFIRM" | "SUBMIT";
  title: string;
  cancelText?: string;
  submitText: string;
  handleSubmitBtnClick: () => void;
  handleCancelBtnClick?: () => void;
};
