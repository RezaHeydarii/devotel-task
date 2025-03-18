import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import { DefaultLayout } from "./components/layouts";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
