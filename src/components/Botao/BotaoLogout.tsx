import React from "react";
import { Colors } from "../../shared/colors";
import * as S from "./styles";

interface Props {
  onLogout: () => void;
}

function BotaoLogout({ onLogout }: Props) {
  return (
    <S.BotaoToolbar
      sx={{
        textTransform: "capitalize",
        color: Colors.primary,
        backgroundColor: Colors.primaryTints.tint4,
        "&:hover": {
          backgroundColor: Colors.blue9,
        },
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      onClick={onLogout}
    >
      Sair
    </S.BotaoToolbar>
  );
}

export default BotaoLogout;
