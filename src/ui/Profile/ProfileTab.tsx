import { FaRegUserCircle } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "../../Features/authentication/useUser";

const ProfileTab = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  const { user } = useUser();
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
        {user?.image ? (
          <img
            src={user.image}
            alt="userPhoto"
            className={`h-10 w-10 rounded-full transition-all duration-300 ${currentPage === "/profile" ? "border-2 border-linearOrange-200" : ""}`}
          />
        ) : (
          <FaRegUserCircle />
        )}
      </div>
    </div>
  );
};
export default ProfileTab;
