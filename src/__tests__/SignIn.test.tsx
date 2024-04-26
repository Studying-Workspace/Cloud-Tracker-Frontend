import { fireEvent, render, screen } from "@testing-library/react";
import SignIn from "../pages/SignIn";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";
import UserProvider from "../context/UserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("SignIn", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<SignIn />
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("should have logo", () => {
		const logo = screen.getByTestId("logo");
		expect(logo).toBeInTheDocument();
	});

	it("should go to home bage when click in logo", () => {
		const logoButton = screen.getByTestId("logoBtn");
		fireEvent.click(logoButton);
		expect(window.location.hash).toBe("#/");
	});

	it("should be a link to the login page", () => {
		const signUpLink = screen.getByTestId("signUpLink");
		expect(signUpLink).toBeInTheDocument();
		fireEvent.click(signUpLink);
		expect(window.location.hash).toBe("#/signUp");
	});

	it("should have email input and gray warning Icon", async () => {
		const emailField = screen.getByTestId("email");
		expect(emailField).toBeInTheDocument();
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-gray-700");
	});

	it("The warning icon for the email test should be reded out if the field is empty", async () => {
		const emailField = screen.getByTestId("email");
		const passwordFiled = screen.getByTestId("password");
		await userEvent.click(emailField);
		await userEvent.type(passwordFiled, "moc");
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the email test should be reded out if the field is havent @", async () => {
		const emailField = screen.getByTestId("email");
		const passwordFiled = screen.getByTestId("password");
		await userEvent.type(emailField, "mo");
		await userEvent.type(passwordFiled, "moc");
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the email test should be reded out if the field is havent text before @", async () => {
		const emailField = screen.getByTestId("email");
		const passwordFiled = screen.getByTestId("password");
		await userEvent.type(emailField, "@mo");
		await userEvent.type(passwordFiled, "moc");
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the email test should be reded out if the field is havent text after @", async () => {
		const emailField = screen.getByTestId("email");
		const passwordFiled = screen.getByTestId("password");
		await userEvent.type(emailField, "mo@");
		await userEvent.type(passwordFiled, "moc");
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the email test should be greened out if the field is cottect", async () => {
		const emailField = screen.getByTestId("email");
		const passwordFiled = screen.getByTestId("password");
		await userEvent.type(emailField, "mo@gmail");
		await userEvent.type(passwordFiled, "moc");
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-green-600");
	});

	it("should have password input", () => {
		const passwordInput = screen.getByTestId("password");
		expect(passwordInput).toBeInTheDocument();
		const showPasswordButton = screen.getByTestId("showPassword");
		fireEvent.click(showPasswordButton);
		expect(passwordInput).toHaveAttribute("type", "text");
		fireEvent.click(showPasswordButton);
		expect(passwordInput).toHaveAttribute("type", "password");
	});

	it("should have password input and gray warning Icon", async () => {
		const passwordField = screen.getByTestId("password");
		expect(passwordField).toBeInTheDocument();
		const warningIcon = screen.getByTestId("passwordWarning");
		expect(warningIcon).toHaveClass("text-gray-700");
	});

	it("The warning icon for the password test should be reded out if the field is empty", async () => {
		const passwordField = screen.getByTestId("password");
		const emailFiled = screen.getByTestId("email");
		await userEvent.click(passwordField);
		await userEvent.type(emailFiled, "moc");
		const warningIcon = screen.getByTestId("passwordWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the password test should be reded out if the field is min 8 char", async () => {
		const passwordFiled = screen.getByTestId("password");
		const emailField = screen.getByTestId("email");
		await userEvent.type(passwordFiled, "ooooooo");
		await userEvent.type(emailField, "moc");
		const warningIcon = screen.getByTestId("passwordWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the password test should be greened out if the field is correct", async () => {
		const passwordFiled = screen.getByTestId("password");
		const emailField = screen.getByTestId("email");
		await userEvent.type(passwordFiled, "oooooooo");
		await userEvent.type(emailField, "moc");
		const warningIcon = screen.getByTestId("passwordWarning");
		expect(warningIcon).toHaveClass("text-green-600");
	});

	it("should have sign up button", () => {
		const signUpButton = screen.getByTestId("submitForm");
		expect(signUpButton).toBeInTheDocument();
	});

	it("should have remember me icon", () => {
		const rememberMeIcon = screen.getByTestId("rememberMe");
		expect(rememberMeIcon).toHaveAttribute("id", "unselect");
		fireEvent.click(rememberMeIcon);
		expect(rememberMeIcon).toHaveAttribute("id", "select");
	});

	it("should have info section", () => {
		const infoSection = screen.getByText("Welcome Back!");
		expect(infoSection).toBeInTheDocument();
	});
});
