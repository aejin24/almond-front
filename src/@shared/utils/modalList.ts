import { Dialog, Loading } from "../components/modal";

export enum ModalType {
  LOADING = 1,
  Dialog = 2,
}

export const modalList: any = {
  [ModalType.LOADING]: Loading,
  [ModalType.Dialog]: Dialog,
};
