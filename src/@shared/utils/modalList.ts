import { ModalType } from "../types/common";
import { Dialog, Loading } from "../components/modal";

export const modalList: any = {
  [ModalType.LOADING]: Loading,
  [ModalType.DIALOG]: Dialog,
};
