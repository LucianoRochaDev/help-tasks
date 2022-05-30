import React from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes } from ".";

interface Props {
  user: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ user, children }: Props) => {
  if (!user) {
    return <Navigate to={AppRoutes.Login} replace />;
  }

  return children;
};

export default ProtectedRoute;
