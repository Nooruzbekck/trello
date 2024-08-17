import React from "react";
import { RouteObject } from "react-router-dom";
import { PrivateAuthRouteByRole } from "./private/PrivateAuthRouteByRole";

export const AdminRoutes = (role: string): RouteObject[] => {
  if (role !== "ADMIN") {
    return [];
  }

  return [
    {
      path: "task",
      element: (
        <PrivateAuthRouteByRole
          role={role}
          roles={["ADMIN"]}
          fallBackPath="/sign-in"
          RouteComponent={<h1>ADMIN</h1>}
        />
      ),
    },
  ];
};
