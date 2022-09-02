import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./webPages/LandingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
