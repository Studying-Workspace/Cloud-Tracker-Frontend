import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "../ui/NavBar";
import { HashRouter } from "react-router-dom";
import UserProvider from "../context/UserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("NavBar", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<NavBar />
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("should have three navigation buttons to pages Home , Blog and Dashboard", () => {
		const homePage = screen.queryByText("Home");
		const blogPage = screen.queryByText("Blog");
		const dashboardPage = screen.queryByText("Dashboard");

		expect(homePage).toBeInTheDocument();
		expect(homePage?.tagName).toBe("A");
		expect(homePage).toHaveAttribute("href", "#/");

		expect(blogPage).toBeInTheDocument();
		expect(blogPage?.tagName).toBe("A");
		expect(blogPage).toHaveAttribute("href", "#/blog");

		expect(dashboardPage).toBeInTheDocument();
		expect(dashboardPage?.tagName).toBe("A");
		expect(dashboardPage).toHaveAttribute("href", "#/dashboard");
	});

	it("should have logo", () => {
		const logo = screen.getByTestId("logo");

		expect(logo).toBeInTheDocument();
	});

	it("should go to home bage when click in logo", () => {
		const logoButton = screen.getByTestId("logoBtn");
		fireEvent.click(logoButton);

		const homePage = screen.queryByText("Home");
		expect(homePage).toHaveClass("active");
	});

	it("should have sign in button", () => {
		const signInButton = screen.getByText("Sign In");
		fireEvent.click(signInButton);

		expect(window.location.hash).toBe("#/signIn");
	});
});
