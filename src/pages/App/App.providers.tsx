import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserContextProvider } from "../../context/UserContext";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { theme } from "../../shared/theme";
import { ptBR } from "date-fns/locale";

const AppProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
          <BrowserRouter>{children}</BrowserRouter>
        </LocalizationProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
