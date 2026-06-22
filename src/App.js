import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Sejarah from "./pages/Sejarah";
import Kegiatan from "./pages/Kegiatan";
import Prestasi from "./pages/Prestasi";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/prestasi" element={<Prestasi />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </Router>
  );
}

export default App;
