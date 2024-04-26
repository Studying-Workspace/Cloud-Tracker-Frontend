import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { Profile } from "../pages/Profile";
import UserProvider from "../context/UserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("Profile Page", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<Profile />
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("Should Render multiple ProfileInputField components", () => {
		const inputFields = screen.getAllByRole("textbox");
		expect(inputFields.length).toBeGreaterThan(0);
	});

	it("Should render a ProfileSelectMenu component", () => {
		const selectMenu = screen.getByRole("combobox");
		expect(selectMenu).toBeInTheDocument();
	});

	it("Should render a save changes button", () => {
		const saveButton = screen.getByRole("button", {
			name: /Save/i,
		});
		expect(saveButton).toBeInTheDocument();
	});

	it("Should Render the 'Upload Photo' button", () => {
		const uploadButton = screen.getByText(/upload photo/i);
		expect(uploadButton).toBeInTheDocument();
	});
});
