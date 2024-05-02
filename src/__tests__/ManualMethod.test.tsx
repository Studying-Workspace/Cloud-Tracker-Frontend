import { fireEvent, render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "../context/UserProvider";
import ManualMethod from "../pages/Dashboard/ManualMethod";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("Manual", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<ManualMethod />
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("should have Step 1", () => {
		const step1 = screen.getByText(/Sign In to AWS Management Console/i);
		expect(step1).toBeInTheDocument();
	});

	it("should have Step 2", () => {
		const step2 = screen.getByText(/Navigate to IAM Service/i);
		expect(step2).toBeInTheDocument();
	});

	it("should have Step 3", () => {
		const step3 = screen.getByText(/Create a New IAM Role/i);
		expect(step3).toBeInTheDocument();
	});

	it("should have Step 4", () => {
		const step4 = screen.getByText(/Set Permissions/i);
		expect(step4).toBeInTheDocument();
	});

	it("should have Step 5", () => {
		const step5 = screen.getByText(/Review and Create Role/i);
		expect(step5).toBeInTheDocument();
	});

	it("should have Step 6", () => {
		const step6 = screen.getByText(/Provide the Role ARN/i);
		expect(step6).toBeInTheDocument();
	});

	it("shoud have Enter your ARN button", () => {
		const enterArn = screen.getByText(/Enter your ARN/i);
		expect(enterArn).toBeInTheDocument();
		fireEvent.click(enterArn);
	});


});
