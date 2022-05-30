import { Box } from "@mui/system";
import React from "react";
import BotaoLogout from "../Botao/BotaoLogout";
import * as S from "./styles";

interface Props {
  onLogout: () => void;
}

const ToolbarTodoList = ({ onLogout }: Props) => {
  return (
    <S.Header>
      <S.LogoText>HelpTasks</S.LogoText>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginRight="22px"
      >
        <BotaoLogout onLogout={onLogout} />
      </Box>
    </S.Header>
  );
};

export default ToolbarTodoList;
