import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserContextProvider } from "../../context/UserContext";
import { theme } from "../../shared/theme";

const AppProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
