import { mdiFacebook } from "@mdi/js";
import Icon from "@mdi/react";
import { Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../shared/colors";
import * as S from "./styles";

interface Props {
  backgroundColor: string;
  onClick: () => void;
}

function FacebookLogin({ backgroundColor, onClick }: Props) {
  return (
    <S.ButtonBaseSocial sx={{ marginBottom: "15px" }} onClick={onClick}>
      <S.SocialContainer $backgroundColor={backgroundColor}>
        <Icon path={mdiFacebook} size={1} color={Colors.primaryTints.tint3} />
        <Typography marginX="auto" color={Colors.primaryTints.tint3}>
          Continuar com Facebook
        </Typography>
      </S.SocialContainer>
    </S.ButtonBaseSocial>
  );
}

export default FacebookLogin;
