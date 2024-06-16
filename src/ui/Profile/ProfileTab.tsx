import { FaRegEdit, FaRegUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../Features/authentication/useUser";
import Menus from "../Menus";
import { RiListSettingsLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { useLogout } from "../../Features/authentication/useLogout";

const ProfileTab = () => {
	const {logout} = useLogout("/" , "Logout Successfully!") ;
	const location = useLocation();
	const currentPage = location.pathname;
	const { user } = useUser();
	const navigate = useNavigate();
	return (
		<div className={`flex items-center justify-center gap-4`}>
			<Menus>
				<Menus.Toggle id="profile">
					<button
						className={`px-4 transition-all duration-300 ${currentPage === "/profile" ? "rounded-full border-4 border-linearOrange-200" : "border-none"}`}
					>
						{user.name}
					</button>
				</Menus.Toggle>
				<Menus.List id="profile">
					<Menus.Button onClick={() => navigate("/profile")}>
						<FaRegEdit />
						<span>Profile</span>
					</Menus.Button>
					<Menus.Button onClick={() => navigate("/dashboard")}>
						<RiListSettingsLine />
						<span>Manage Billing Data</span>
					</Menus.Button>
					<Menus.Button onClick={() => logout()}>
						<IoLogOutOutline />
						<span>Sign Out</span>
					</Menus.Button>
				</Menus.List>
			</Menus>
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
