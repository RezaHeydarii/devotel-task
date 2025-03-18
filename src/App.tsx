import { ThemeProvider } from "@mui/material/styles";
import { DefaultTheme } from "./styles";
import { AppRoutes } from "./AppRoutes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppRoutes />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
