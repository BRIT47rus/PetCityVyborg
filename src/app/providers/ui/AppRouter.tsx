import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared";

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({  element,path }) => (
      <Route
        path={path}
        key={path}
        element={(
          <Suspense fallback="загрузка">
            <div className="page-wrapper">{element}</div>
          </Suspense>)
        }
      />
    ))}
  </Routes>
);
