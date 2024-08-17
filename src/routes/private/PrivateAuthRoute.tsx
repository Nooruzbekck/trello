import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateAuthRouteProps {
  Component: JSX.Element;
  isAuthorized: boolean;
  fallBackPath: string;
}

export const PrivateAuthRoute: React.FC<PrivateAuthRouteProps> = ({
  Component,
  isAuthorized,
  fallBackPath,
}) => {
  return isAuthorized ? Component : <Navigate to={fallBackPath} replace />;
};
