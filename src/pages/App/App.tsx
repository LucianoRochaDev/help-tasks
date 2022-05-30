import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AppRoutes } from "../../routes";
import ProtectedRoute from "../../routes/ProtectedRoute";
import Login from "../Login/Login";
import PaginaNaoEncontrada from "../PaginaNaoEncontrada/PaginaNaoEncontrada";
import Dashboard from "../TodoList/TodoList";
import "./App.css";

const App = () => {
  const user = useContext(UserContext);
  return (
    <Routes>
      <Route path={AppRoutes.Login} element={<Login />} />
      <Route
        path={AppRoutes.Home}
        element={
          <ProtectedRoute user={user.user ? true : false}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
};

export default App;
