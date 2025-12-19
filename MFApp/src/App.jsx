import React, { useState, useEffect, lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FoodList from "./components/FoodList.jsx";
import ProductList from "./components/ProductList.jsx";
import Layout from "./components/Layout.jsx";
import NotFound from "./components/NotFound.jsx";
import { useParentContext, ParentContextProvider } from "../store.jsx";
import "./style.css";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <FoodList />,
        },
        {
          path: "/to-do-app",
          element: <ProductList />,
        },
      ],
    },


  ]);
  return (
    <ParentContextProvider>
      <RouterProvider router={router}>
        <Header />
        <FoodList />
        <ProductList />
        <Footer />
      </RouterProvider>
    </ParentContextProvider>
  )
}

export default App;