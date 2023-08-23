import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Siderbar/Sidebar";
import Balneabilidade from "./pages/Balneabilidade/Balneabilidade";
import CategoriaAgua from "./pages/CategoriaAgua/CategoriaAgua";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter basename="/wqualify/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/balneabilidade" element={<Balneabilidade />} />
        <Route path="/categoria-agua" element={<CategoriaAgua />} />
      </Routes>
      <Sidebar sidebarOpen={sidebarOpen} handleSidebarOpen={setSidebarOpen} />
      <Footer handleMenuClick={setSidebarOpen} />
    </BrowserRouter>
  );
}

export default App;
