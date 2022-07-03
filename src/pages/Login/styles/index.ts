import styled from "styled-components";
import { Colors } from "../../../shared/colors";

export const FormContainer = styled.div`
  z-index: 1;
  width: 270px;
  padding: 15px 20px 6px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px 0 rgba(31, 38, 130, 0.3);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.08);
`;

export const FormTitulo = styled.span`
  width: 100%;
  margin-top: 1px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${Colors.gray};
`;
