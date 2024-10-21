import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "../pages/landing";
import Auth from "../pages/auth";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
