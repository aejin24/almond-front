import styled from "styled-components";

import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

import { TInput } from "@shared/types/login";

type TProps = {
  registerName: "email" | "password";
  text: string;
} & ComponentProps<"input">;

export default function Input({ registerName, text, ...props }: TProps) {
  const { register } = useFormContext<TInput>();

  return (
    <InputContainer>
      <input {...register(registerName)} {...props} />
      <Label htmlFor={registerName}>{text}</Label>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  margin-bottom: 16px;

  input {
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    height: 48px;
    margin-bottom: 16px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--GRAY9);
    outline: none;

    &:focus,
    &:valid {
      border-color: var(--BLUE6);

      + label {
        font-size: 14px;
        color: var(--BLUE6);
        transform: translateY(-45%);
      }
    }
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  line-height: 48px;
  transition: 0.2s;
`;
