import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AppRoutes } from "../../routes";
import ProtectedRoute from "../../routes/ProtectedRoute";
import Cadastro from "../Login/Cadastro";
import Login from "../Login/Login";
import PaginaNaoEncontrada from "../PaginaNaoEncontrada/PaginaNaoEncontrada";
import Dashboard from "../TodoList/TodoList";
import "./App.css";

const App = () => {
  const user = useContext(UserContext);
  return (
    <Routes>
      <Route
        path={AppRoutes.Home}
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
      />
      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
};

export default App;
