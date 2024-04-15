import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

const Applayout = () => {
  const loacation = useLocation();
  const currentPage = loacation.pathname;

  const setFooter = currentPage === "/" || currentPage === "/profile";


  return (
    <div>
      <NavBar />
      <div
        className={`relative  ${currentPage === "/blog" ? "h-[calc(100vh-60.5px)]" : ""}  overflow-hidden`}
      >
        <Outlet />
      </div>
      {setFooter && <Footer />}

    </div>
  );
};

export default Applayout;
