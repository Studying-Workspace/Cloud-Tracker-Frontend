import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "../pages/Home";

const Applayout = () => {
  return (
    <div>
      <NavBar />
      <div className="relative overflow-hidden font-poppins">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Applayout;
