import React from "react";
import { PrivateAuthRouteByRole } from "./private/PrivateAuthRouteByRole";
import { Navigate, RouteObject } from "react-router-dom";
import { Tasks } from "../components/tasks/Tasks";

export const UserRoutes = (role: string): RouteObject[] => {
  if (role !== "USER") {
    return [];
  }

  return [
    {
      path: "boards",
      element: (
        <PrivateAuthRouteByRole
          role={role}
          roles={["USER"]}
          fallBackPath="/sign-in"
          RouteComponent={<h1>asdfasdf</h1>}
        />
      ),
    },
    {
      path: "tasks",
      element: (
        <PrivateAuthRouteByRole
          role={role}
          roles={["USER"]}
          fallBackPath="/sign-in"
          RouteComponent={<Tasks />}
        />
      ),
    },
  ];
};
