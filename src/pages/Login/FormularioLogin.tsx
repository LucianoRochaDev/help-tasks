import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import SocialLogin from "../../components/Social/SocialLogin";
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
        <SocialLogin
          onClick={() => Login("google")}
          backgroundColor={Colors.social.google}
          socialProvider="Google"
        />
        <SocialLogin
          onClick={() => Login("facebook")}
          backgroundColor={Colors.social.facebook}
          socialProvider="Facebook"
        />
        <SocialLogin
          onClick={() => Login("twitter")}
          backgroundColor={Colors.social.twitter}
          socialProvider="Twitter"
        />
        <SocialLogin
          onClick={() => Login("github")}
          backgroundColor={Colors.social.github}
          socialProvider="Github"
        />
        <SocialLogin
          onClick={() => Login("microsoft")}
          backgroundColor={Colors.social.microsoft}
          socialProvider="Microsoft"
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
