import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import Applayout from "./ui/Applayout";
import ScrollToTop from "./ui/ScrollToTop";
import { HashRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/UserProvider";
import ProtectRouter from "./ui/ProtectRouter";
import AllCharts from "./ui/DashBoard/AllCharts";
import PieChart from "./Features/DashBoard/PieChart";
import ColumnChart from "./Features/DashBoard/ColumnChart";
import LineChart from "./Features/DashBoard/LineChart";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

export default function App() {
	return (
		<>
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<ScrollToTop>
							<Routes>
								<Route path="/" element={<Applayout />}>
									<Route index element={<Home />} />
									<Route path="blog" element={<Blog />} />
									<Route path="blog/:id" element={<BlogDetails />} />
									<Route path="dashboard">
										<Route index element={<div>Dashboard</div>} />
										<Route
											path="charts"
											element={
												<ProtectRouter route="dashboard">
													<Dashboard />
												</ProtectRouter>
											}
										>
											<Route index element={<AllCharts />} />
											<Route
												path="pieChart"
												element={<PieChart type="full" />}
											/>
											<Route
												path="columnChart"
												element={<ColumnChart type="full" />}
											/>
											<Route
												path="lineChart"
												element={<LineChart type="full" />}
											/>
											<Route
												path="bubbleChart"
												element={<div>bubble chart</div>}
											/>
											<Route
												path="notification"
												element={<div>notification</div>}
											/>
										</Route>
									</Route>
									<Route
										path="profile"
										element={
											<ProtectRouter route="profile">
												<Profile />
											</ProtectRouter>
										}
									/>
								</Route>

								<Route
									path="signIn"
									element={
										<ProtectRouter route="signIn">
											<SignIn />
										</ProtectRouter>
									}
								/>

								<Route
									path="signUp"
									element={
										<ProtectRouter route="signUp">
											<SignUp />
										</ProtectRouter>
									}
								/>

								<Route path="*" element={<NotFound />} />
							</Routes>
						</ScrollToTop>
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>
			<ToastContainer />
		</>
	);
}
