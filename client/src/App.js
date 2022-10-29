import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Bookingcar from "./components/Bookingcar/Bookingcar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bookcar" element={<Bookingcar />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
