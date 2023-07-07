"use client";

import styles from "./style.module.scss";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { getAccessToken } from "./utils/service";
import { TInput } from "./utils/type";

export default function Login() {
  const { register, getValues, handleSubmit } = useForm<TInput>();

  const { mutate } = useMutation(getAccessToken);

  const { push } = useRouter();

  const handleSubmitClick = () => {
    mutate(
      {
        email: getValues("email"),
        password: getValues("password"),
      },
      {
        onSuccess: (res) => {
          if (res.result) push("/");
        },
      },
    );
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(handleSubmitClick)}>
      <Image src="/images/logo.svg" alt="logo" width={150} height={150} />
      <p className={styles.title}>Sign in</p>

      <div className={styles.inputContainer}>
        <input type="text" required {...register("email")} />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
      </div>

      <div className={styles.inputContainer}>
        <input type="password" required autoComplete="off" {...register("password")} />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
      </div>

      <p className={styles.forgot}>Forgot your password?</p>

      <button type="submit" className={styles.submit}>
        Sign in
      </button>

      <p className={styles.signup}>
        Don&#39;t have an account&#63; <span>Sign up</span>
      </p>
    </form>
  );
}
