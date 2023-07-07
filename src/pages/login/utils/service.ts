import axios from "axios";
import { TAxiosReturn } from "../../@shared/types/common";
import { TGetAccessToken } from "./type";

export const getAccessToken = async ({ email, password }: TGetAccessToken) => {
  const { data } = await axios.post<TAxiosReturn<{ result: boolean }>>("/api/jwt", { email, password });

  return data.data;
};
