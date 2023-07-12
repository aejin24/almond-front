import styled from "styled-components";

import Image from "next/image";
import { PropsWithChildren } from "react";

import { Text } from "@shared/components/other";

type TProps = {
  text: string;
};

export default function LoginLayout({ text, children }: PropsWithChildren<TProps>) {
  return (
    <Wrapper>
      <Image src="/images/logo.svg" alt="logo" width={150} height={150} loading="eager" priority={true} />
      <Title>{text}</Title>

      {children}
    </Wrapper>
  );
}

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: fit-content;
  transform: translateX(-50%) translateY(-50%);
`;
