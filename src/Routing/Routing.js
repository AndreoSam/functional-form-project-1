import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Parent from "../Components/Parent";
// import MyForm from "../Components/MyForm";
import MyForm2 from "../Components/MyForm2";
import Navbar from "../Navbar/Navbar";

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="parent" element={<Parent />} /> */}
        {/* <Route path="" element={<MyForm />} /> */}
        <Route path="" element={<MyForm2 />} />
      </Routes>
    </Router>
  );
};

export default Routing;
