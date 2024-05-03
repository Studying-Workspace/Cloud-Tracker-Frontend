import { fireEvent, render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "../context/UserProvider";
import Onboarding from "../pages/Dashboard/Onbording";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("Onbording", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<Onboarding />
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("should have upload file button", () => {
		const uploadFileButton = screen.getByText("Upload File");
		expect(uploadFileButton).toBeInTheDocument();
		fireEvent.click(uploadFileButton);
		const fileInput = screen.getByTestId("fileInput");
		expect(fileInput).toBeInTheDocument();
	});

	it("should have show instructions button", () => {
		const showInstructionsButton = screen.getByText("Show Instructions");
		expect(showInstructionsButton).toBeInTheDocument();
		fireEvent.click(showInstructionsButton);
		expect(window.location.hash).toBe("#/dashboard/instruction");
	});

	it("should have manual onboarding button", () => {
		const manual = screen.getByTestId("manual-onboarding");
		expect(manual).toBeInTheDocument();
		fireEvent.click(manual);
		expect(window.location.hash).toBe("#/dashboard/manual");
	});

	it("should have terminal onboarding button", () => {
		const terminal = screen.getByTestId("terminal");
		expect(terminal).toBeInTheDocument();
		fireEvent.click(terminal);
		expect(window.location.hash).toBe("#/dashboard/terminal");
	});

	it("should have cloud formation onboarding button", () => {
		const cloudFormation = screen.getByTestId("cloudFormation");
		expect(cloudFormation).toBeInTheDocument();
		fireEvent.click(cloudFormation);
		expect(window.location.hash).toBe("#/dashboard/cloudFormation");
	});

	it("should have CDK onboarding button", () => {
		const cdk = screen.getByTestId("cdk");
		expect(cdk).toBeInTheDocument();
		fireEvent.click(cdk);
		expect(window.location.hash).toBe("#/dashboard/cdk");
	});
});
