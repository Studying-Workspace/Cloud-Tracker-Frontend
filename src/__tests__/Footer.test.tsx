import { render, screen } from "@testing-library/react";
import Footer from "../ui/Footer";
import { HashRouter } from "react-router-dom";

describe("Footer", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<Footer />
			</HashRouter>,
		);
	});

	it("should have wave vector", () => {
		const wave = screen.getByTestId("waveVector");
		expect(wave).toBeVisible();
	});

	it("test copy rights section", () => {
		const logo = screen.getByTestId("logo");
		expect(logo).toBeInTheDocument();

		const copyRights = screen.getByText("copy rights reserved");
		expect(copyRights).toBeInTheDocument();
	});

	it("test explore section", () => {
		const title = screen.getByText("Explore");
		expect(title).toBeInTheDocument();

		const blog = screen.getByText("Blog");
		const dashboard = screen.getByText("Dashboard");
		const about = screen.getByText("About us");

		expect(blog).toBeInTheDocument();
		expect(dashboard).toBeInTheDocument();
		expect(about).toBeInTheDocument();
	});

	it("test contact section", () => {
		const title = screen.getByText("Contact us");
		expect(title).toBeInTheDocument();

		const linkedIn = screen.getByText("LinkedIn");
		const github = screen.getByText("Github");
		const email = screen.getByText("Email");

		expect(linkedIn).toBeInTheDocument();
		expect(github).toBeInTheDocument();
		expect(email).toBeInTheDocument();
	});
});
