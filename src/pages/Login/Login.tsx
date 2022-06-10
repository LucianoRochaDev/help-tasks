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
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.uid) navigate(AppRoutes.TodoList(user.uid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
