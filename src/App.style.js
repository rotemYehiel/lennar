import styled from "styled-components";

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  gap: 1rem;

  > * {
    flex: 1;
    box-sizing: border-box;
    padding: 0.64rem;
  }

  > :first-child {
    background-color: pink;
  }

  > :nth-child(2) {
    background-color: #cde3f1;
  }

  > :nth-child(3) {
    background-color: whitesmoke;
  }
`;
