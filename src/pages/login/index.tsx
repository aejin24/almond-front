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
      <form className={style.wrapper} onSubmit={formMethod.handleSubmit(handleSubmitClick)}>
        <Input type="text" registerName="email" text="이메일" required />
        <Input type="password" registerName="password" text="비밀번호" required autoComplete="off" />

        <Text className={style.forgot}>비밀번호를 잊으셨나요&#63;</Text>

        <Button type="submit" className={style.submit}>
          로그인
        </Button>

        <Text className={style.signup}>
          새로운 뉴스레터를 만나보세요&#33; <Link href="/register">회원가입</Link>
        </Text>
      </form>
    </FormProvider>
  );
};

Login.getLayout = (page: ReactElement) => {
  return <LoginLayout text="로그인">{page}</LoginLayout>;
};

export default Login;
