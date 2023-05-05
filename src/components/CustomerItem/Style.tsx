import styled from "styled-components";

export const CustomerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  margin: 0 auto;
  max-width: 200px;
  width: 100%;
  height: fit-content;
  background-color: #333333;
  border-radius: 5px;
  overflow: hidden;
`;

export const CustomerItemTitle = styled.h3`
  margin: 0 0 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CustomerItemSpan = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:last-of-type {
    margin-top: 10px;
  }
`;

export const CustomerItemActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  transition: all 0.3s ease;

  & img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);
    cursor: pointer;

    &:first-of-type {
      margin-right: 5px;
    }
  }
`;
