import { Box, Typography } from "@mui/material";
import React from "react";
import BotaoAdicionarTask from "../../components/Botao/BotaoAdicionarTask";
import TodoInput from "../../components/Input/TodoInput";
import { Colors } from "../../shared/colors";
import { TodoListContainer } from "./styles";
import TaskList from "./TaskList";

const TodoListView = () => {
  return (
    <TodoListContainer>
      <Typography
        fontSize="clamp(19px, 1.3vw, 22px)"
        margin="0 0 -5px 0"
        color={Colors.white}
        fontFamily="Love Ya Like A Sister, cursive"
      >
        Minhas Tarefas
      </Typography>
      <Box display="flex" alignItems="center" width="100%">
        <TodoInput />
        <BotaoAdicionarTask onAdicionar={() => {}} />
      </Box>
      <TaskList />
    </TodoListContainer>
  );
};

export default TodoListView;
