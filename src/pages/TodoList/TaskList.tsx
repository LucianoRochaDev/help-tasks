import { Typography } from "@mui/material";
import React from "react";
import { TaskItemModel } from "../../models/TaskItemModel";
import * as S from "./styles";
import TaskItem from "./TaskItem";

interface Props {
  taskListData: TaskItemModel[] | null;
}

const TaskList = ({ taskListData }: Props) => {
  return (
    <S.TaskListContainer>
      {taskListData &&
        taskListData.length > 0 &&
        taskListData.map((taskItem) => {
          return <TaskItem key={taskItem.id} titulo={taskItem.titulo} />;
        })}
      {taskListData === null && (
        <Typography fontWeight={300} py={5}>
          Não há tarefas.
        </Typography>
      )}
    </S.TaskListContainer>
  );
};

export default TaskList;
