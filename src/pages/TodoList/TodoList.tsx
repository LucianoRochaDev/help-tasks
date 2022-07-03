import { Box, CircularProgress, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { AppRoutes } from "../../routes";
import { useTasksService } from "../../services/tasks.service";
import { Colors } from "../../shared/colors";
import * as S from "./styles";
import TaskList from "./TaskList";

const TodoList = () => {
  const [inputAdicionarTask, setInputAdicionarTask] = useState("");
<<<<<<< HEAD
  const [taskListData, setTaskListData] = useState<TaskItemModel[] | null>();

  const { userCtx: user } = useContext(UserContext);
  const { obterTaskList, adicionarTask } = useTasksService();

  useEffect(() => {
    const carregarTaskList = async () => {
      if (user) {
        const obterLista = await obterTaskList(user.uid);
        obterLista.val()
          ? setTaskListData(Object.values(obterLista.val()))
          : setTaskListData(null);
      }
    };
    carregarTaskList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

=======
  const [taskListData, setTaskListData] = useState<TaskItemModel[]>();
  const [taskLoading, setTaskLoading] = useState(false);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { obterTaskList, adicionarTask, removerTask } = useTasksService();

  const carregarTaskList = async () => {
    if (user) {
      taskListData && taskListData.length < 1 && setTaskLoading(true);
      const obterLista = await obterTaskList(user.uid);
      if (obterLista.exists()) {
        setTaskListData(Object.values(obterLista.val()));
      } else {
        setTaskListData([]);
      }
      taskListData &&
        taskListData.length < 1 &&
        setTimeout(() => {
          setTaskLoading(false);
        }, 400);
    }
  };

  useEffect(() => {
    if (!user || !user.uid) {
      navigate(AppRoutes.Login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    carregarTaskList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

>>>>>>> f55bc5f7e85f3543f347060e47c5fafed7423706
  const onAdicionarTask = () => {
    if (inputAdicionarTask && user) {
      const newTaskData: TaskItemModel = {
        dataCriacao: new Date().toISOString(),
        dataDisparo: "",
        notas: "",
        dispararEmail: false,
        dispararWhatsapp: false,
        id: uuidv4(),
        titulo: inputAdicionarTask,
        whatsapp: "",
      };
      adicionarTask(user.uid, newTaskData).then(() => {
        setInputAdicionarTask("");
        carregarTaskList();
      });
    }
  };

  const onRemoverTask = (userId: string, taskId: string) => {
    removerTask(userId, taskId).then(() => {
      carregarTaskList();
    });
  };

  const onTaskDetalhes = (taskId: string) => {
    user && navigate(AppRoutes.TaskDetalhes(user.uid, taskId));
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
              onAdicionarTask={onAdicionarTask}
            />
            <BotaoAdicionarTask onAdicionarTask={onAdicionarTask} />
          </Box>
<<<<<<< HEAD
          {taskListData !== undefined ? (
            <TaskList taskListData={taskListData} />
          ) : (
            <S.LoadingTasksContainer>
              <CircularProgress />
            </S.LoadingTasksContainer>
=======
          {taskListData && !taskLoading ? (
            <TaskList
              taskListData={taskListData.sort((a, b) =>
                a.dataCriacao > b.dataCriacao ? 1 : -1
              )}
              onRemoverTask={onRemoverTask}
              onTaskDetalhes={onTaskDetalhes}
            />
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding={5}
            >
              <CircularProgress />
            </Box>
>>>>>>> f55bc5f7e85f3543f347060e47c5fafed7423706
          )}
        </S.TodoListContainer>
      </MainContainerTodoList>
    </BackgroundContainer>
  );
};

export default TodoList;
