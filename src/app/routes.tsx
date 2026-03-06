import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import ExamPage from "../pages/ExamPage";
import ResultPage from "../pages/ResultPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignUpPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/exam" element={<ExamPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}