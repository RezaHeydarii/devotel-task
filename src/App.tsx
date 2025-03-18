import { ThemeProvider } from "@mui/material/styles";
import { DefaultTheme } from "./styles";
import { useDynamicForm } from "./hooks";

function App() {
  useDynamicForm();
  return <ThemeProvider theme={DefaultTheme}></ThemeProvider>;
}

export default App;
