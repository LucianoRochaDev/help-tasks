import { Box, Typography } from "@mui/material";
import React from "react";
import {
  BackgroundContainer,
  MainContainerLogin,
} from "../../components/MainContainer";
import ToolbarLogin from "../../components/Toolbar/ToolbarLogin";

const PaginaNaoEncontrada = () => {
  return (
    <BackgroundContainer>
      <ToolbarLogin />
      <MainContainerLogin>
        <Box display="box" pb={8}>
          <Typography fontSize="112px" color="white">
            404
          </Typography>
          <Typography
            textAlign="center"
            fontSize="22px"
            color="white"
            marginTop="-20px"
          >
            PÁGINA NÃO
          </Typography>
          <Typography textAlign="center" fontSize="22px" color="white">
            ENCONTRADA
          </Typography>
        </Box>
      </MainContainerLogin>
    </BackgroundContainer>
  );
};

export default PaginaNaoEncontrada;
