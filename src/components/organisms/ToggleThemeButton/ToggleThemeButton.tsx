import { Fab, useColorScheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const ToggleThemeButton = () => {
  const { setMode, mode } = useColorScheme();
  return (
    <Fab
      sx={{
        position: "fixed",
        right: "1rem",
        bottom: "1rem",
        background: (s) => s.palette.text.primary,
      }}
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
      }}
      size="small"
    >
      {mode === "dark" ? (
        <LightModeIcon sx={{ color: (s) => s.palette.background.default }} />
      ) : (
        <DarkModeIcon sx={{ color: (s) => s.palette.background.default }} />
      )}
    </Fab>
  );
};
