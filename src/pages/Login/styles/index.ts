import styled from "styled-components";
import { Colors } from "../../../shared/colors";

export const FormContainer = styled.div`
  width: 270px;
  padding: 15px 20px 6px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${Colors.primaryTints.tint4};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;
`;

export const FormTitulo = styled.span`
  width: 100%;
  margin-top: 1px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${Colors.gray};
`;
