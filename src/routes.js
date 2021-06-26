import React from 'react';
import { Redirect } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import ButtonComponent from './pages/Button/ButtonComponent';
import TableComponent from './pages/Table/TableComponent';
export default [
    {
      path: "/",
      exact: true,
      component: () => <Redirect to="/dashboard" />
    },
    {
      path: "/table",
      component: TableComponent
    },
    {
      path: "/button",
      component: ButtonComponent
    },
    {
        path: "*",
        component: NotFound
    }
  ];