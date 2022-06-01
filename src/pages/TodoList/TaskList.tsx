import React from "react";
import { TaskItemModel } from "../../models/TaskItemModel";
import * as S from "./styles";
import TaskItem from "./TaskItem";

interface Props {
  taskListData: TaskItemModel[];
}

const TaskList = ({ taskListData }: Props) => {
  return (
    <S.TaskListContainer>
      {taskListData.length > 0 &&
        taskListData.map((taskItem) => {
          return <TaskItem key={taskItem.id} titulo={taskItem.titulo} />;
        })}
      {taskListData.length < 1 && <span>Não há tarefas.</span>}
    </S.TaskListContainer>
  );
};

export default TaskList;
