import { HashRouter, Route, Routes } from "react-router-dom";

import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ui/ScrollToTop";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route path="signIn" element={<SignIn />} />

          <Route path="signUp" element={<SignUp />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
}
