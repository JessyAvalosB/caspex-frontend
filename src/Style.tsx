import styled from "styled-components";

export const SplitScreen = styled.div`
  display: flex;
  padding: 0 40px;

  & > div {
    flex: 1;
    height: 70vh;
  }

  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-child(2) {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    place-content: center;
    overflow: hidden;
  }
`;
