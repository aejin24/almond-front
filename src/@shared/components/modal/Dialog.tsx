import Image from "next/image";
import styled from "styled-components";

import { TDialogProps } from "@shared/types/common";

export default function Dialog({
  type,
  title,
  cancelText,
  submitText,
  handleSubmitBtnClick,
  handleCancelBtnClick,
}: TDialogProps) {
  return (
    <Wrapper>
      <Container>
        <Image width="60" height="60" alt="dialogImage" src={`/images/${type.toLowerCase()}.png`} />
        <Title>{title}</Title>

        <BtnWrapper>
          {type === "SUBMIT" && (
            <Cancel type="button" onClick={handleCancelBtnClick}>
              {cancelText}
            </Cancel>
          )}

          <Submit type="button" onClick={handleSubmitBtnClick}>
            {submitText}
          </Submit>
        </BtnWrapper>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #0000004d;

  img {
    display: block;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  width: 360px;
  height: fit-content;
  padding: 24px;
  background-color: var(--WHITE);
  border-radius: 8px;
  z-index: 9999;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 32px 0;
  text-align: center;
`;

const BtnWrapper = styled.div`
  margin: 0 auto;
  margin-top: 16px;
  width: fit-content;
  display: flex;

  button {
    width: 100px;
    height: 40px;
    cursor: pointer;
    border-radius: 8px;
    font-size: 13px;
  }
`;

const Cancel = styled.button`
  color: var(--GRAY7);
  background-color: var(--WHITE);
  border: 1px solid var(--GRAY7);
  margin-right: 8px;
`;

const Submit = styled.button`
  color: var(--WHITE);
  background-color: var(--BLUE7);
  border: none;
`;
