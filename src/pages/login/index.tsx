"use client";

import style from "./style.module.scss";

import { ReactElement } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";

import { Input } from "atoms/login";
import { Button, Text } from "@shared/components/other";

import { TInput } from "@shared/types/login";
import { TNextPageWithLayout } from "@shared/types/common";

import { getAccessToken } from "./service";
import LoginLayout from "@shared/layout/LoginLayout";

const Login: TNextPageWithLayout = () => {
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
      <form onSubmit={formMethod.handleSubmit(handleSubmitClick)}>
        <Input type="text" registerName="email" text="Email" required />
        <Input type="password" registerName="password" text="Password" required autoComplete="off" />

        <Text className={style.forgot}>Forgot your password?</Text>

        <Button type="submit" className={style.submit}>
          Sign in
        </Button>

        <Text className={style.signup}>
          Don&#39;t have an account&#63; <Link href="/register">Sign up</Link>
        </Text>
      </form>
    </FormProvider>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout text="Sign in">{page}</LoginLayout>;
};

export default Login;
