import { ThemeProvider } from "@mui/material/styles";
import { DefaultTheme } from "./styles";
import { AppRoutes } from "./AppRoutes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CssBaseline from "@mui/material/CssBaseline";
import { ToggleThemeButton } from "./components/organisms";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <ToggleThemeButton />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppRoutes />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
