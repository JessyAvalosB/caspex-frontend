import styled from "styled-components";

export const InputTextLabel = styled.label`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const InputTextBase = styled.input`
  margin-top: 10px;
  height: 40px;
  padding-left: 5px;
  font-size: 14px;
  border-radius: 5px;

  &:focus-visible {
    outline: unset;
  }
`;

export const InputTextError = styled.span`
  margin-top: 5px;
  color: red;
  font-size: 0.8rem;
  font-weight: bold;
`;
