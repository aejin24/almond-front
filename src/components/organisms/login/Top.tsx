import styled from "styled-components";

import Image from "next/image";

import { Text } from "@shared/components";

export default function Top() {
  return (
    <>
      <Image src="/images/logo.svg" alt="logo" width={150} height={150} loading="eager" priority={true} />
      <Title>Sign in</Title>
    </>
  );
}

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;
