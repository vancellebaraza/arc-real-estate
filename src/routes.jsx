import { Routes, Route } from "react-router-dom";

import Contact from "./components/Contact2";
import App from "./App";
import About from "./components/About2";
import Properties from "./components/Properties2";
import WhatsAppButton from "./components/whatsappbutton";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="text-4xl font-bold">
                404 - Page Not Found
              </h1>
            </div>
          }
        />
      </Routes>

      <WhatsAppButton />
    </>
  );
}
