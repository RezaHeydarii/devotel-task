import { Route, Routes } from "react-router-dom";
import { HomePage, SubmittedFormListPage } from "./pages";
import { DefaultLayout } from "./components/layouts";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/forms" element={<SubmittedFormListPage />} />
      </Route>
    </Routes>
  );
};
