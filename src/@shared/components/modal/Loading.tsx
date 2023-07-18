import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <Wrapper>
      <Loader />
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

const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 10px solid var(--GRAY4);
  border-radius: 50%;
  border-top: 10px solid var(--BLUE7);
  width: 100px;
  height: 100px;
  animation: ${spinner} 1s linear infinite;
`;
