import { Box } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { TaskItemModel } from "../../models/TaskItemModel";
import * as S from "./styles";
import TaskItem from "./TaskItem";

interface Props {
  taskListData: TaskItemModel[];
  onRemoverTask: (userId: string, taskId: string) => void;
  onTaskDetalhes: (taskId: string) => void;
}

const TaskList = ({ taskListData, onRemoverTask, onTaskDetalhes }: Props) => {
  const { user } = useContext(UserContext);

  return (
    <S.TaskListContainer>
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
      )}
    </S.TaskListContainer>
  );
};

export default TaskList;
