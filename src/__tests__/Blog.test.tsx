import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Blog from "../pages/Blog";

describe("Blog Page", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<Blog />
			</HashRouter>,
		);
	});

	it("Renders multiple BlogElement components", () => {
		const blogElements = screen.getAllByText(
			/Exploring the Future of Digital Innovation/i,
		);
		expect(blogElements.length).toBeGreaterThan(0);
	});

	it("Should render image in each blog element", () => {
		const blogImages = screen.getAllByAltText(/img/i);
		expect(blogImages.length).toBeGreaterThan(0);
	});

	it("Should render publisher in each blog element", () => {
		const publishers = screen.getAllByText(/Publisher/i);
		expect(publishers.length).toBeGreaterThan(0);
	});

	it("Should render a navigation component", () => {
		const navigation = screen.getByRole("tablist");
		expect(navigation).toBeInTheDocument();
	});

	it("Should render a navigation component with more than 1 tab", () => {
		const tabs = screen.getAllByRole("tab");
		expect(tabs.length).toBeGreaterThan(1);
	});

	it("Should render a navigation component with a tab selected", () => {
		const selectedTab = screen.getByRole("tab", { name: /All/i });
		expect(selectedTab).toHaveClass("Mui-selected");
	});

	it("Should render a navigation component with a tab not selected", () => {
		const selectedTab = screen.getByRole("tab", {
			name: /Machine Learning/i,
		});
		expect(selectedTab).not.toHaveClass("Mui-selected");
	});
});
