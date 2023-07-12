import { ComponentProps } from "react";
import styled from "styled-components";

type TProps = {
  label: string;
} & ComponentProps<"input">;

export default function Input({ label, ...props }: TProps) {
  return (
    <Wrapper>
      <Label htmlFor={props.id}>{label}</Label>
      <input {...props} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;

  input {
    font-size: 14px;
    width: 100%;
    height: 42px;
    line-height: 42px;
    outline: none;
    border: 1px solid var(--GRAY5);
    border-radius: 8px;
    padding-left: 12px;

    &:focus {
      border-color: var(--BLUE7);
    }

    &::placeholder {
      color: var(--GRAY5);
      font-size: 14px;
    }
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;

  &::after {
    content: "*";
    color: var(--RED6);
  }
`;
