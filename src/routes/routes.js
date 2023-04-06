import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntryPage from "../pages/landing";
import ProductDescription from "../pages/product";

const AllPages = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />}></Route>
        <Route path="/product/:id" element={<ProductDescription />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default AllPages;
