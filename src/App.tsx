import { ThemeProvider } from "@mui/material/styles";
import { DefaultTheme } from "./styles";

function App() {
  return <ThemeProvider theme={DefaultTheme}></ThemeProvider>;
}

export default App;
