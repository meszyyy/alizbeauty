import Navbar from "./Navbar";
import About from "./About";
import Nagel from "./Nagel";
import Wimpern from "./Wimpern";
import Footer from "./Footer";
import React from "react";
import ScrollButton from "./ScrollButton";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
      <div className="container-fluid p-0">        
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/nagel" element={<Nagel />}></Route>
          <Route path="/wimpern" element={<Wimpern />}></Route>
        </Routes>
        <Footer />,
        <ScrollButton />
      </div>
      </>
  );
}

export default App;
