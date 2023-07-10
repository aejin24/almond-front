"use client";

import style from "./style.module.scss";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";

import { Input } from "atoms/login";
import { Top } from "organisms/login";
import { Button, Text } from "@shared/components";

import { TInput } from "@shared/types/login";

import { getAccessToken } from "./service";

export default function Login() {
  const formMethod = useForm<TInput>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useMutation(getAccessToken);

  const { push } = useRouter();

  const handleSubmitClick = (data: TInput) => {
    mutate(
      { ...data },
      {
        onSuccess: (res) => {
          if (res.result) push("/");
        },
      },
    );
  };

  return (
    <FormProvider {...formMethod}>
      <form className={style.wrapper} onSubmit={formMethod.handleSubmit(handleSubmitClick)}>
        <Top />

        <Input type="text" registerName="email" text="Email" required />
        <Input type="password" registerName="password" text="Password" required autoComplete="off" />

        <Text className={style.forgot}>Forgot your password?</Text>

        <Button type="submit" className={style.submit}>
          Sign in
        </Button>

        <Text className={style.signup}>
          Don&#39;t have an account&#63; <span>Sign up</span>
        </Text>
      </form>
    </FormProvider>
  );
}
