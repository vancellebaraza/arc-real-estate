import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
import Contact from "./components/Contact2";
import App from "./App";
import About2 from "./components/About2";
// import About from "./pages/About";
// import Properties from "./pages/Properties";

export default function AppRoutes() {
  return (
    <Routes>
     <Route path="/" element={<App />} />
      {/*<Route path="/properties" element={<Properties />} />*/}
      <Route path="/about" element={<About2 />} /> 
      <Route path="/contact2" element={<Contact />} />

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}