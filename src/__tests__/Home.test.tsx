import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { HashRouter } from "react-router-dom";

describe("Home Page", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<Home />
			</HashRouter>,
		);
	});

	it("should have button in Intro section", () => {
		const signInButton = screen.getByText("Get Started");
		fireEvent.click(signInButton);

		expect(signInButton).toBeInTheDocument();
		expect(window.location.hash).toBe("#/signIn");
	});

	it("should have button go to Blog Page in Service section", () => {
		const blogButton = screen.getByText("Explore Blog");
		fireEvent.click(blogButton);

		expect(blogButton).toBeInTheDocument();
		expect(window.location.hash).toBe("#/blog");
	});

	it("should have button go to Dashboard Page in Service section", () => {
		const dashboardButton = screen.getByText("Go To Dashboard");
		fireEvent.click(dashboardButton);

		expect(dashboardButton).toBeInTheDocument();
		expect(window.location.hash).toBe("#/dashboard");
	});
});
