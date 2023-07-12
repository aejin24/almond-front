import style from "./style.module.scss";

import { ReactElement } from "react";
import Link from "next/link";

import LoginLayout from "@shared/layout/LoginLayout";
import { Button, PageTransition } from "@shared/components/other";
import { Input } from "atoms/register";

import { TNextPageWithLayout } from "@shared/types/common";

const Register: TNextPageWithLayout = () => {
  return (
    <PageTransition>
      <Input label="이메일" type="text" name="email" id="email" />
      <Input label="닉네임" type="text" name="nickname" id="nickname" />
      <Input label="생년월일" type="text" name="birth" id="birth" placeholder="숫자만 입력해주세요 :)" />
      <Input label="비밀번호" type="password" name="password" id="password" />
      <Input label="비밀번호 확인" type="password" id="passwordConfirm" />

      <Button className={style.submit}>회원가입</Button>

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
