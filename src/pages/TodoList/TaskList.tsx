import React from "react";
import * as S from "./styles";
import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <S.TaskListContainer>
      <TaskItem titulo={"Primeira Task dessa merda asdasdasdasdasdas"} />
      <TaskItem titulo={"Foda-se mermo"} />
      <TaskItem titulo={"Trabalhar pra caralho"} />
      <TaskItem titulo={"Fazer suco de tamarindo"} />
      <TaskItem titulo={"Fazer suco de tamarindo"} />
      <TaskItem titulo={"Fazer suco de tamarindo"} />
      <TaskItem titulo={"Fazer suco de tamarindo"} />
    </S.TaskListContainer>
  );
};

export default TaskList;
