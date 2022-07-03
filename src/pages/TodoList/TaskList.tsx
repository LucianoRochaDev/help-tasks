<<<<<<< HEAD
import { Typography } from "@mui/material";
import React from "react";
=======
import { Box } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
>>>>>>> f55bc5f7e85f3543f347060e47c5fafed7423706
import { TaskItemModel } from "../../models/TaskItemModel";
import * as S from "./styles";
import TaskItem from "./TaskItem";

interface Props {
<<<<<<< HEAD
  taskListData: TaskItemModel[] | null;
=======
  taskListData: TaskItemModel[];
  onRemoverTask: (userId: string, taskId: string) => void;
  onTaskDetalhes: (taskId: string) => void;
>>>>>>> f55bc5f7e85f3543f347060e47c5fafed7423706
}

const TaskList = ({ taskListData, onRemoverTask, onTaskDetalhes }: Props) => {
  const { user } = useContext(UserContext);

  return (
    <S.TaskListContainer>
<<<<<<< HEAD
      {taskListData &&
        taskListData.length > 0 &&
        taskListData.map((taskItem) => {
          return <TaskItem key={taskItem.id} titulo={taskItem.titulo} />;
        })}
      {taskListData === null && (
        <Typography fontWeight={300} py={5}>
          Não há tarefas.
        </Typography>
=======
      {taskListData.length > 0 &&
        user &&
        taskListData.map((taskItem: TaskItemModel) => {
          return (
            <TaskItem
              key={taskItem.id}
              titulo={taskItem.titulo}
              removerTask={() => onRemoverTask(user.uid, taskItem.id)}
              onTaskDetalhes={() => onTaskDetalhes(taskItem.id)}
            />
          );
        })}
      {taskListData.length < 1 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingTop={2}
          paddingBottom={5}
        >
          Não há tarefas.
        </Box>
>>>>>>> f55bc5f7e85f3543f347060e47c5fafed7423706
      )}
    </S.TaskListContainer>
  );
};

export default TaskList;
