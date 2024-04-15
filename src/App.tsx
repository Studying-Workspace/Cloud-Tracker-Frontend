import { HashRouter, Route, Routes} from "react-router-dom";

import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ui/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Profile } from "./pages/Profile";


export default function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Applayout />}>
              <Route path="/" element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:blogId" element={<BlogDetails />} />

              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />

            </Route>

            <Route path="signIn" element={<SignIn />} />

            <Route path="signUp" element={<SignUp />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
      <ToastContainer />
    </>
  );
}
