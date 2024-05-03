import { fireEvent, render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "../context/UserProvider";
import CloudFormationMEthod from "../pages/Dashboard/CloudFormationMEthod";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("cloud formation", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<CloudFormationMEthod />
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("should have Step 1", () => {
		const step1 = screen.getByText(/Create a CloudFormation Template/i);
		expect(step1).toBeInTheDocument();
	});

	it("should have Step 2", () => {
		const step2 = screen.getByText(/Step 2: Save the Template/i);
		expect(step2).toBeInTheDocument();
	});

	it("should have Step 3", () => {
		const step3 = screen.getByText(
			/Deploy the Template Using AWS CloudFormation/i,
		);
		expect(step3).toBeInTheDocument();
	});

	it("should have Step 4", () => {
		const step4 = screen.getByText(/Verify the Creation of the Stack/i);
		expect(step4).toBeInTheDocument();
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
