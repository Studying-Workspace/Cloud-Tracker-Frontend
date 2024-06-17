import { fireEvent, render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "../context/UserProvider";
import NotificationItem from "../Features/DashBoard/NotificationItem";
import Notifications from "../pages/Notifications";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("Notifications page", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<Notifications />
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("should render correctly", () => {
		expect(screen.getByTestId("NotificationPage")).toBeInTheDocument();
	});
});

describe("Notification Item", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<NotificationItem
							instanceName="EC2"
							priceOnDemand="$30"
							priceReservedInstance="$50"
						/>
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("should have a description for notification item", () => {
		expect(screen.getByTestId("description")).toBeInTheDocument();
	});

	it("should have a title for notification item", () => {
		expect(screen.getByTestId("title")).toBeInTheDocument();
	});

	it("should have a button to show details", () => {
		expect(screen.getByText("Show Options")).toBeInTheDocument();
	});

	it ("should have an image", () => {
		expect(screen.getByAltText("img")).toBeInTheDocument();
	});

	it("should toggle a table on button click", () => {
		const button = screen.getByText("Show Options");
		fireEvent.click(button);
		expect(screen.getByTestId("table")).toBeInTheDocument();
	}	);
});
