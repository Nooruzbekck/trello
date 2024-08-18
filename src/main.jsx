import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/index.ts";
import { AppRoutes } from "./routes/router.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#333",
          color: "#FFF",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#FFF",
          fontSize: "14px",
          fontWeight: "400",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <AppRoutes />
    </Provider>
  </ThemeProvider>
);
