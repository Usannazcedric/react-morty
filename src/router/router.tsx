import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Episode from "../pages/episodes/Episode";
import Episodes from "../pages/episodes/Episodes";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
}
