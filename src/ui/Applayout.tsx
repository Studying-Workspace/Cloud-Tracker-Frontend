import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

const Applayout = () => {
  const loacation = useLocation();
  const currentPage = loacation.pathname;

  return (
    <div>
      <NavBar />
      <div
        className={`relative  ${currentPage === "/blog" ? "h-[calc(100vh-60.5px)]" : ""}  overflow-hidden`}
      >
        <Outlet />
      </div>
      {currentPage === "/" && <Footer />}
    </div>
  );
};

export default Applayout;
