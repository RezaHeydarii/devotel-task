import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Suspense fallback={<p className="text-center my-10">Loading</p>}>
      <main>
        <Outlet />
      </main>
    </Suspense>
  );
};
