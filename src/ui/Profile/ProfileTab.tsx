import { FaRegUserCircle } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const ProfileTab = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <div className={`flex items-center justify-center gap-4`}>
      <NavLink
        to="/profile"
        className={`px-4 transition-all duration-300 ${currentPage === "/profile" ? "rounded-full border-4 border-linearOrange-200" : "border-none"}`}
      >
        Profile
      </NavLink>
      <div
        className={`text-4xl transition-all duration-300 mobile:hidden ${currentPage === "/profile" ? " text-linearOrange-200" : ""}`}
      >
        <FaRegUserCircle />
      </div>
    </div>
  );
};
export default ProfileTab;

