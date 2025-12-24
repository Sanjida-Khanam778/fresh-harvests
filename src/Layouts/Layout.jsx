import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [activeNav, setActiveNav] = useState("Home");
  const location = useLocation();
  return (
    <>
      <div className={`${location.pathname === "/" ? "hidden" : ""}`}>
        <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>
      <Outlet />
      <div className={`${location.pathname === "/" ? "hidden" : ""}`}>
        <Footer />
      </div>
    </>
  );
}
