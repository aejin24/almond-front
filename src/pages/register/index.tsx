import style from "./style.module.scss";

import { ReactElement } from "react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

import LoginLayout from "@shared/layout/LoginLayout";
import { Button, PageTransition } from "@shared/components/other";
import { Input } from "atoms/register";

import { ModalType, TDialogProps, TNextPageWithLayout } from "@shared/types/common";
import { TRegisterInput } from "@shared/types/register";

import useModal from "@shared/hooks/useModal";

const Register: TNextPageWithLayout = () => {
  const formMethod = useForm<TRegisterInput>({
    defaultValues: {
      email: "",
      nickname: "",
      birth: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const { show, hide } = useModal();

  const handleSubmitClick = (data: TRegisterInput) => {
    if (data.password !== data.passwordConfirm) {
      show<TDialogProps>(ModalType.DIALOG, {
        type: "ALERT",
        title: "비밀번호가 일치하지 않습니다.",
        submitText: "확인",
        handleSubmitBtnClick: hide,
      });

      return;
    }
  };

  return (
    <PageTransition>
      <FormProvider {...formMethod}>
        <form action="POST" onSubmit={formMethod.handleSubmit(handleSubmitClick)}>
          <Input registerName="email" label="이메일" type="text" name="email" id="email" required />
          <Input registerName="nickname" label="닉네임" type="text" name="nickname" id="nickname" required />
          <Input
            registerName="birth"
            label="생년월일"
            type="date"
            name="birth"
            id="birth"
            placeholder="숫자만 입력해주세요 :)"
            required
          />
          <Input registerName="password" label="비밀번호" type="password" name="password" id="password" required />
          <Input registerName="passwordConfirm" label="비밀번호 확인" type="password" id="passwordConfirm" required />

          <Button type="submit" className={style.submit}>
            회원가입
          </Button>
        </form>
      </FormProvider>

      <p className={style.signin}>
        계정이 있으신가요&#63; <Link href="/login">로그인</Link>
      </p>
    </PageTransition>
  );
};

Register.getLayout = (page: ReactElement) => {
  return <LoginLayout text="회원가입">{page}</LoginLayout>;
};

export default Register;
