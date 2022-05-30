import { mdiMicrosoftWindows } from "@mdi/js";
import Icon from "@mdi/react";
import { Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../shared/colors";
import * as S from "./styles";

interface Props {
  backgroundColor: string;
  onClick: () => void;
}

function MicrosoftLogin({ backgroundColor, onClick }: Props) {
  return (
    <S.ButtonBaseSocial sx={{ marginBottom: "15px" }} onClick={onClick}>
      <S.SocialContainer $backgroundColor={backgroundColor}>
        <Icon
          path={mdiMicrosoftWindows}
          size={1}
          color={Colors.primaryTints.tint3}
        />
        <Typography marginX="auto" color={Colors.primaryTints.tint3}>
          Continuar com Microsoft
        </Typography>
      </S.SocialContainer>
    </S.ButtonBaseSocial>
  );
}

export default MicrosoftLogin;
