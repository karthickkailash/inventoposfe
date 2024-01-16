import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authRoute, unAuthRoute } from "./constants/route";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {unAuthRoute.map((item: any, index: any) => (
            <Route
              key={item?.id}
              path={item?.path}
              element={item?.element}
            ></Route>
          ))}
          {authRoute.map((item: any, index: any) => (
            <Route
              key={item?.id}
              path={item?.path}
              element={item?.element}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
