import {
  BrowserRouter
} from "react-router-dom";
import { AppRoutes } from "./routes";
import { Light } from "./shared/themes";
import { ThemeProvider } from "@mui/material";

export const App = () => {
  return (
    <ThemeProvider theme={Light}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}