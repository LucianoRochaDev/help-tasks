import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes } from ".";
import { UserContext } from "../context/UserContext";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to={AppRoutes.Login} replace />;
  }

  return children;
};

export default ProtectedRoute;
