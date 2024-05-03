import { fireEvent, render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "../context/UserProvider";
import Error from "../pages/NotFound";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("Not Found", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<Error />
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("should have 404 Img", () => {
		const notFound = screen.getByTestId("not-found");
		expect(notFound).toBeInTheDocument();
	});

	it("should have Go back button", () => {
		const goBack = screen.getByText(/Go Home/i);
		expect(goBack).toBeInTheDocument();
		fireEvent.click(goBack);
		expect(window.location.pathname).toBe("/");
	});
});
