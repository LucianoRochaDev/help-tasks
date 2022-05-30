import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import FacebookLogin from "../../components/Social/FacebookLogin";
import GithubLogin from "../../components/Social/GithubLogin";
import GoogleLogin from "../../components/Social/GoogleLogin";
import MicrosoftLogin from "../../components/Social/MicrosoftLogin";
import TwitterLogin from "../../components/Social/TwitterLogin";
import { UserContext } from "../../context/UserContext";
import { Colors } from "../../shared/colors";
import * as S from "./styles";

const FormularioLogin = () => {
  const { Login } = useContext(UserContext);

  return (
    <Box>
      <S.FormContainer>
        <S.FormTitulo>{`Bem Vindo(a)!`}</S.FormTitulo>
        <Typography marginY={"12px"} fontWeight={500}>
          {`Inicie com seu login social ;)`}
        </Typography>
        <GoogleLogin
          onClick={() => Login("google")}
          backgroundColor={Colors.social.google}
        />
        <FacebookLogin
          onClick={() => Login("facebook")}
          backgroundColor={Colors.social.facebook}
        />
        <TwitterLogin
          onClick={() => Login("twitter")}
          backgroundColor={Colors.social.twitter}
        />
        <GithubLogin
          onClick={() => Login("github")}
          backgroundColor={Colors.social.github}
        />
        <MicrosoftLogin
          onClick={() => Login("microsoft")}
          backgroundColor={Colors.social.microsoft}
        />
      </S.FormContainer>
      <Typography
        marginY={"10px"}
        fontSize={"13px"}
        textAlign="center"
        width={"300px"}
        color={Colors.primaryTints.tint4}
      >
        Rocha Tecnologia &#174;
      </Typography>
    </Box>
  );
};

export default FormularioLogin;
