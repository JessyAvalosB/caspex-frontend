import styled from "styled-components";
import { InputTextBase } from "../InputText/Style";

export const CustomerFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7a7a7a;
  padding: 40px;
  border-radius: 10px;
`;

export const CustomerFormTitle = styled.h2`
  margin: 0 0 20px;
`;

export const CustomerFormForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CustomerFormSubmit = styled(InputTextBase)`
  background-color: #333333;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  color: #fff;

  &:active {
    border-style: unset;
  }
`;
