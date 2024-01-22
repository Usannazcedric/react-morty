import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Episode from "../pages/episodes/Episode";
import Episodes from "../pages/episodes/Episodes";
import Character from "../pages/characters/character";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}
