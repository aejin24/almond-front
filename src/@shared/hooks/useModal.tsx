import { useContext } from "react";
import { GlobalModalContext } from "../components/modal/GlobalModal";

export default function useModal() {
  return useContext(GlobalModalContext);
}
