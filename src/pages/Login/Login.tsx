import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundContainer,
  MainContainerLogin,
} from "../../components/MainContainer";
import ToolbarLogin from "../../components/Toolbar/ToolbarLogin";
import { UserContext } from "../../context/UserContext";
import { AppRoutes } from "../../routes";
import FormularioLogin from "./FormularioLogin";

const Login = () => {
  const userData = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.user?.uid) navigate(AppRoutes.Home);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <BackgroundContainer>
      <ToolbarLogin />
      <MainContainerLogin>
        <FormularioLogin />
      </MainContainerLogin>
    </BackgroundContainer>
  );
};

export default Login;