import React from "react";
import { PrivateAuthRouteByRole } from "./private/PrivateAuthRouteByRole";
import { RouteObject } from "react-router-dom";

export const UserRoutes = (role: string): RouteObject[] => {
  if (role !== "USER") {
    return [];
  }

  return [
    {
      path: "/user",
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
      path: "task",
      element: (
        <PrivateAuthRouteByRole
          role={role}
          roles={["USER"]}
          fallBackPath="/sign-in"
          RouteComponent={<h1>USER</h1>}
        />
      ),
    },
  ];
};
