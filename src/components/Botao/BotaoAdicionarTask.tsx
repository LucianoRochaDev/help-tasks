import React from "react";
import { Colors } from "../../shared/colors";
import * as S from "./styles";

interface Props {
  onAdicionarTask: () => void;
}

function BotaoAdicionarTask({ onAdicionarTask }: Props) {
  return (
    <S.BotaoAdicionar
      onClick={onAdicionarTask}
      sx={{
        marginLeft: "20px",
        padding: "2.5px 20px 0 20px",
        textTransform: "capitalize",
        color: Colors.primary,
        backgroundColor: Colors.primaryTints.tint3,
        "&:hover": {
          backgroundColor: Colors.primaryTints.tint4,
        },
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        fontSize: "clamp(13px, 1.3vw, 14px)",
      }}
    >
      Adicionar
    </S.BotaoAdicionar>
  );
}

export default BotaoAdicionarTask;
