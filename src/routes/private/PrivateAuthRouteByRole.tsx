import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateAuthRouteByRoleProps {
  RouteComponent: JSX.Element;
  role: string;
  roles: string[];
  fallBackPath: string;
}

export const PrivateAuthRouteByRole: React.FC<PrivateAuthRouteByRoleProps> = ({
  RouteComponent,
  role,
  roles = [],
  fallBackPath,
}) => {
  if (roles.includes(role)) {
    return RouteComponent;
  }

  return <Navigate to={fallBackPath} replace />;
};
