import React, { useContext } from "react";
import {
  BackgroundContainer,
  MainContainerTodoList,
} from "../../components/MainContainer";
import ToolbarTodoList from "../../components/Toolbar/ToolbarTodoList";
import { UserContext } from "../../context/UserContext";
import TodoListView from "./TodoListView";

const TodoList = () => {
  const { Logout } = useContext(UserContext);

  return (
    <BackgroundContainer>
      <ToolbarTodoList onLogout={Logout} />
      <MainContainerTodoList>
        <TodoListView />
      </MainContainerTodoList>
    </BackgroundContainer>
  );
};

export default TodoList;
