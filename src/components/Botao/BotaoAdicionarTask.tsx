import React from "react";
import { Colors } from "../../shared/colors";
import * as S from "./styles";

interface Props {
  onAdicionar: () => void;
}

function BotaoAdicionarTask({ onAdicionar }: Props) {
  return (
    <S.BotaoAdicionar
      sx={{
        marginLeft: "20px",
        padding: "0 20px",
        textTransform: "capitalize",
        color: Colors.primary,
        backgroundColor: Colors.primaryTints.tint3,
        "&:hover": {
          backgroundColor: Colors.primaryTints.tint4,
        },
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        fontSize: "clamp(13px, 1.3vw, 14px)",
      }}
      onClick={onAdicionar}
    >
      Adicionar
    </S.BotaoAdicionar>
  );
}

export default BotaoAdicionarTask;
