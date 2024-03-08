import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { BurgerSpin } from "react-burger-icons";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  const [startPosition, setStartPostion] = useState<string>(currentPage);

  // need this state in mobile design only
  const [showNav, setShowNav] = useState<boolean>(false);

  useEffect(
    function () {
      setStartPostion(currentPage);
      setShowNav(false);
    },
    [currentPage],
  );

  return (
    <nav
      className={`relative z-50 flex w-full items-center justify-between bg-gradient-to-r from-linearBlue-3 via-linearBlue-2 to-linearBlue-1 px-24 py-1 font-poppins font-semibold 
    text-white mobile:px-8 mobile:text-sm tablet:px-12 tablet:text-sm ${showNav ? "mobile:fixed" : ""}`}
    >
      <Logo />
      <button
        onClick={() => {
          setShowNav(!showNav);
          window.scrollTo(0, 0);
        }}
        className="hidden mobile:block"
      >
        <BurgerSpin isClosed={showNav} />
      </button>

      <div
        className={`flex w-[70%] items-center justify-between 
        mobile:fixed mobile:top-[45px]
        ${showNav ? "mobile:left-0" : "left-[-200%]"}  
        z-50 transition-all duration-500 mobile:h-full
        mobile:w-screen
        mobile:flex-col mobile:justify-start mobile:gap-10 mobile:bg-linearBlue-1 mobile:py-10`}
      >
        <div
          className="relative mt-0 flex w-[450px] items-center justify-between pt-0 
        mobile:flex 
        mobile:h-[120px] mobile:w-[100px] mobile:flex-col tablet:w-[300px]"
        >
          <NavLink
            to="/"
            className="peer/item1 z-10 w-[150px] text-center tablet:w-[100px]"
          >
            Home
          </NavLink>

          <NavLink
            to="/blog"
            className="peer/item2 z-10 w-[150px] text-center tablet:w-[100px]"
          >
            Blog
          </NavLink>

          <NavLink
            to="/dashboard"
            className="peer/item3 z-10 w-[150px] text-center tablet:w-[100px]"
          >
            Dashboard
          </NavLink>

          <div
            id="activeLink"
            className={`absolute z-0 
            ${
              startPosition === "/"
                ? "left-0 mobile:top-[-5px]"
                : startPosition === "/blog"
                  ? "left-[150px] mobile:left-0 mobile:top-[45px] tablet:left-[100px]"
                  : "left-[300px] mobile:left-0 mobile:top-[95px] tablet:left-[200px]"
            } 
            h-[30px] w-[150px] rounded-full border-4 border-linearOrange-200 transition-all 
            duration-500 peer-hover/item1:left-0 
            peer-hover/item2:left-[150px] peer-hover/item3:left-[300px] 
            mobile:w-[100px] mobile:peer-hover/item1:left-[0px]  mobile:peer-hover/item1:top-[-5px]
            mobile:peer-hover/item2:left-[0px]
            mobile:peer-hover/item2:top-[46px] 
            mobile:peer-hover/item3:left-[0px]
            mobile:peer-hover/item3:top-[95px]
            tablet:w-[100px] 
            tablet:peer-hover/item2:left-[100px]
            tablet:peer-hover/item3:left-[200px]`}
          ></div>
        </div>

        <Button onClick={() => navigate("/signIn")}>Sign In</Button>
      </div>
    </nav>
  );
};

export default NavBar;
