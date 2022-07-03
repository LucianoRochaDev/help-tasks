import { Button, ButtonBase } from "@mui/material";
import styled from "styled-components";
import { Colors } from "../../../shared/colors";

export const BotaoToolbar = styled(Button)`
  width: 95px;
  height: 28px;
`;

export const BotaoAdicionar = styled(Button)`
  height: fit-content;
  width: fit-content;
`;

export const ButtonBaseSocial = styled(ButtonBase)`
  width: 70%;
  height: 40px;
`;

interface Props {
  $disabled: boolean;
}
export const SocialContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ $disabled }) =>
    $disabled ? Colors.gray20p : Colors.social.microsoft};
`;
