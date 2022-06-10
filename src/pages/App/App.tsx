import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../routes";
import ProtectedRoute from "../../routes/ProtectedRoute";
import Login from "../Login/Login";
import PaginaNaoEncontrada from "../PaginaNaoEncontrada/PaginaNaoEncontrada";
import TaskDetalhes from "../TaskDetalhes/TaskDetalhes";
import TodoList from "../TodoList/TodoList";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route
        path={AppRoutes.Home}
        element={<Navigate to={AppRoutes.Login} replace />}
      />
      <Route path={AppRoutes.Login} element={<Login />} />
      <Route path={AppRoutes.TodoList()} element={<TodoList />} />
      <Route path={AppRoutes.TaskDetalhes()} element={<TaskDetalhes />} />
      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
};

export default App;
