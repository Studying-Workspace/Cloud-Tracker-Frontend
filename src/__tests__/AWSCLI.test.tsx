import { fireEvent, render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "../context/UserProvider";
import AWSCLIMethod from "../pages/Dashboard/AWSCLIMethod";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("AWSCLI", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<AWSCLIMethod />
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("should have Step 1", () => {
		const step1 = screen.getByText(/Create a Policy for Billing Access/i);
		expect(step1).toBeInTheDocument();
	});

	it("should have Step 2", () => {
		const step2 = screen.getByText(/Step 2: Create the Policy via CLI/i);
		expect(step2).toBeInTheDocument();
	});

	it("should have Step 3", () => {
		const step3 = screen.getByText(/Create the Trust Relationship Policy/i);
		expect(step3).toBeInTheDocument();
	});

	it("should have Step 4", () => {
		const step4 = screen.getByText(/Step 4: Create the IAM Role:/i);
		expect(step4).toBeInTheDocument();
	});

	it("should have Step 5", () => {
		const step5 = screen.getByText(
			/Step 5: Attach the Policy to the Role:/i,
		);
		expect(step5).toBeInTheDocument();
	});

	it("should have Step 6", () => {
		const step6 = screen.getByText(
			/Step 6: Verify the Role and Policy Attachment:/i,
		);
		expect(step6).toBeInTheDocument();
	});

	it("shoud have Enter your ARN button", () => {
		const enterArn = screen.getByText(/Enter your ARN/i);
		expect(enterArn).toBeInTheDocument();
		fireEvent.click(enterArn);
	});
	
	it("should have return to all methods page", () => {
		const navigateBack = screen.getByTestId("arrowLeftTest");
		expect(navigateBack).toBeInTheDocument();
		fireEvent.click(navigateBack);
		expect(window.location.hash).toBe("");
	});

});
