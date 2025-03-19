import { lazy } from "react";

export const HomePage = lazy(() => import("./HomePage/HomePage"));
export const SubmittedFormListPage = lazy(
  () => import("./SubmittedFormListPage/SubmittedFormListPage")
);
