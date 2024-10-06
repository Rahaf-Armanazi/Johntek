import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home"; // استيراد المكون
import "./App.css";
import DashBoard from "./pages/DashBoard/DashBoard";
import { Router } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  <Footer /> */}
        <Route path="/Products" element={<DashBoard />} />
      </Routes>
    </div>
  );
}
