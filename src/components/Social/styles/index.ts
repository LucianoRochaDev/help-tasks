import { ButtonBase } from "@mui/material";
import styled from "styled-components";

interface Props {
  $backgroundColor: string;
}

export const ButtonBaseSocial = styled(ButtonBase)`
  width: 100%;
  height: 40px;
`;

export const SocialContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 8px;
`;
