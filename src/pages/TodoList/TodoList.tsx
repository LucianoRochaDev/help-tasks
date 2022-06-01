import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BotaoAdicionarTask from "../../components/Botao/BotaoAdicionarTask";
import TodoInput from "../../components/Input/TodoInput";
import {
  BackgroundContainer,
  MainContainerTodoList,
} from "../../components/MainContainer";
import ToolbarTodoList from "../../components/Toolbar/ToolbarTodoList";
import { UserContext } from "../../context/UserContext";
import { TaskItemModel } from "../../models/TaskItemModel";
import { useTasksService } from "../../services/tasks.service";
import { Colors } from "../../shared/colors";
import * as S from "./styles";
import TaskList from "./TaskList";

const TodoList = () => {
  const [inputAdicionarTask, setInputAdicionarTask] = useState("");
  const [taskListData, setTaskListData] = useState<TaskItemModel[]>();

  const { user } = useContext(UserContext);
  const { obterTaskList, adicionarTask } = useTasksService();

  useEffect(() => {
    const carregarTaskList = async () => {
      if (user) {
        const obterLista = await obterTaskList(user.uid);
        setTaskListData(Object.values(obterLista.val()));
      }
    };
    carregarTaskList();
  }, []);

  console.log(taskListData);

  const onAdicionarTask = () => {
    if (inputAdicionarTask && user) {
      const newTaskData: TaskItemModel = {
        dataCriacao: new Date(),
        dataDisparo: null,
        descricao: "",
        dispararEmail: false,
        dispararWhatsapp: false,
        id: uuidv4(),
        titulo: inputAdicionarTask,
        whatsapp: "",
      };
      adicionarTask(user.uid, newTaskData);
    }
  };
  return (
    <BackgroundContainer>
      <ToolbarTodoList />
      <MainContainerTodoList>
        <S.TodoListContainer>
          <Typography
            fontSize="clamp(19px, 1.3vw, 22px)"
            margin="0 0 -5px 0"
            color={Colors.white}
            fontFamily="Love Ya Like A Sister, cursive"
          >
            Minhas Tarefas
          </Typography>
          <Box display="flex" alignItems="center" width="100%">
            <TodoInput
              inputAdicionarTask={inputAdicionarTask}
              setInputAdicionarTask={setInputAdicionarTask}
            />
            <BotaoAdicionarTask onAdicionarTask={onAdicionarTask} />
          </Box>
          {taskListData ? (
            <TaskList taskListData={taskListData} />
          ) : (
            <CircularProgress />
          )}
        </S.TodoListContainer>
      </MainContainerTodoList>
    </BackgroundContainer>
  );
};

export default TodoList;
