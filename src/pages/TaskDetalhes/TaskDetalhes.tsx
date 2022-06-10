import { Box, Slide } from "@mui/material";
import React, { useState } from "react";
import {
  BackgroundContainer,
  MainContainerTodoList,
} from "../../components/MainContainer";
import ToolbarTodoList from "../../components/Toolbar/ToolbarTodoList";
import * as S from "./styles";

const TaskDetalhes = () => {
  const [slide, setSlide] = useState(true);

  return (
    <BackgroundContainer>
      <ToolbarTodoList />
      <MainContainerTodoList>
        <Box
          overflow="hidden"
          borderRadius="8px"
          padding="15px"
          sx={{ backgroundColor: "transparent" }}
        >
          <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
            <S.TodoListContainer></S.TodoListContainer>
          </Slide>
        </Box>
      </MainContainerTodoList>
    </BackgroundContainer>
  );
};

export default TaskDetalhes;
