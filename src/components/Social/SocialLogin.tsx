import {
  mdiFacebook,
  mdiGithub,
  mdiGoogle,
  mdiMicrosoftWindows,
  mdiTwitter,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../shared/colors";
import * as S from "./styles";

interface Props {
  backgroundColor: string;
  onClick: () => void;
  socialProvider: string;
}

function SocialLogin({ backgroundColor, onClick, socialProvider }: Props) {
  let socialIcon = "";
  socialProvider === "Google" && (socialIcon = mdiGoogle);
  socialProvider === "Facebook" && (socialIcon = mdiFacebook);
  socialProvider === "Github" && (socialIcon = mdiGithub);
  socialProvider === "Twitter" && (socialIcon = mdiTwitter);
  socialProvider === "Microsoft" && (socialIcon = mdiMicrosoftWindows);

  return (
    <S.ButtonBaseSocial sx={{ marginBottom: "15px" }} onClick={onClick}>
      <S.SocialContainer $backgroundColor={backgroundColor}>
        <Icon path={socialIcon} size={1} color={Colors.primaryTints.tint4} />
        <Typography marginX="auto" color={Colors.primaryTints.tint4}>
          {`Continuar com ${socialProvider}`}
        </Typography>
      </S.SocialContainer>
    </S.ButtonBaseSocial>
  );
}

export default SocialLogin;
