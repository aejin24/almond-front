import { TInput } from "@shared/types/login";

export type TRegisterInput = {
  nickname: string;
  birth: string;
  passwordConfirm: string;
} & TInput;
