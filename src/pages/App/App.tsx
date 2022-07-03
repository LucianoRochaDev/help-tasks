<<<<<<< HEAD
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
=======
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
>>>>>>> f55bc5f7e85f3543f347060e47c5fafed7423706
import { AppRoutes } from "../../routes";
import ProtectedRoute from "../../routes/ProtectedRoute";
import Cadastro from "../Login/Cadastro";
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
<<<<<<< HEAD
        element={<Navigate replace to={AppRoutes.Tarefas} />}
      />
      <Route path={AppRoutes.Login} element={<Cadastro />} />
      <Route
        path={AppRoutes.Tarefas}
        element={
          <ProtectedRoute user={user.userCtx ? true : false}>
            <Dashboard />
          </ProtectedRoute>
        }
=======
        element={<Navigate to={AppRoutes.Login} replace />}
>>>>>>> f55bc5f7e85f3543f347060e47c5fafed7423706
      />
      <Route path={AppRoutes.Login} element={<Login />} />
      <Route path={AppRoutes.TodoList()} element={<TodoList />} />
      <Route path={AppRoutes.TaskDetalhes()} element={<TaskDetalhes />} />
      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
};

export default App;
