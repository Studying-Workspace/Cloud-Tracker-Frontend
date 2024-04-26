import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUp from "../pages/SignUp";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "../context/UserProvider";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("SignUp", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<SignUp />
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
		const signInLink = screen.getByTestId("signInLink");
		expect(signInLink).toBeInTheDocument();
		fireEvent.click(signInLink);
		expect(window.location.hash).toBe("#/signIn");
	});

	it("should have username input and gray warning Icon", async () => {
		const usernameField = screen.getByTestId("username");
		expect(usernameField).toBeInTheDocument();
		const warningIcon = screen.getByTestId("usernameWarning");
		expect(warningIcon).toHaveClass("text-gray-700");
	});

	it("The warning icon for the username test should be reded out if the field is empty", async () => {
		const usernameField = screen.getByTestId("username");
		const emailField = screen.getByTestId("email");
		await userEvent.click(usernameField);
		await userEvent.type(emailField, "moc");
		const warningIcon = screen.getByTestId("usernameWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the username test should be reded out if the field is min 3 char", async () => {
		const usernameFiled = screen.getByTestId("username");
		const emailField = screen.getByTestId("email");
		await userEvent.type(usernameFiled, "mo");
		await userEvent.type(emailField, "moc");
		const warningIcon = screen.getByTestId("usernameWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the username test should be reded out if the field is max 15 char", async () => {
		const usernameFiled = screen.getByTestId("username");
		const emailField = screen.getByTestId("email");
		await userEvent.type(usernameFiled, "aaaaaaaaaaaaaaaa");
		await userEvent.type(emailField, "moc");
		const warningIcon = screen.getByTestId("usernameWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the username test should be greened out if the field is correct", async () => {
		const usernameFiled = screen.getByTestId("username");
		const emailField = screen.getByTestId("email");
		await userEvent.type(usernameFiled, "Ali");
		await userEvent.type(emailField, "moc");
		const warningIcon = screen.getByTestId("usernameWarning");
		expect(warningIcon).toHaveClass("text-green-600");
	});

	it("should have email input and gray warning Icon", async () => {
		const emailField = screen.getByTestId("email");
		expect(emailField).toBeInTheDocument();
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-gray-700");
	});

	it("The warning icon for the email test should be reded out if the field is empty", async () => {
		const emailField = screen.getByTestId("email");
		const usernameFiled = screen.getByTestId("username");
		await userEvent.click(emailField);
		await userEvent.type(usernameFiled, "moc");
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the email test should be reded out if the field is havent @", async () => {
		const emailField = screen.getByTestId("email");
		const usernameFiled = screen.getByTestId("username");
		await userEvent.type(emailField, "mo");
		await userEvent.type(usernameFiled, "moc");
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the email test should be reded out if the field is havent text before @", async () => {
		const emailField = screen.getByTestId("email");
		const usernameFiled = screen.getByTestId("username");
		await userEvent.type(emailField, "@mo");
		await userEvent.type(usernameFiled, "moc");
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the email test should be reded out if the field is havent text after @", async () => {
		const emailField = screen.getByTestId("email");
		const usernameFiled = screen.getByTestId("username");
		await userEvent.type(emailField, "mo@");
		await userEvent.type(usernameFiled, "moc");
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the email test should be greened out if the field is cottect", async () => {
		const emailField = screen.getByTestId("email");
		const usernameFiled = screen.getByTestId("username");
		await userEvent.type(emailField, "mo@gmail");
		await userEvent.type(usernameFiled, "moc");
		const warningIcon = screen.getByTestId("emailWarning");
		expect(warningIcon).toHaveClass("text-green-600");
	});

	it("should have password input and show and hide it", () => {
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
		const usernameFiled = screen.getByTestId("username");
		await userEvent.click(passwordField);
		await userEvent.type(usernameFiled, "moc");
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

	it("should have confirm password input and show and hide it", () => {
		const confirmPasswordInput = screen.getByTestId("confirmPassword");
		expect(confirmPasswordInput).toBeInTheDocument();
		const showPasswordButton = screen.getByTestId("showConfirmPassword");
		fireEvent.click(showPasswordButton);
		expect(confirmPasswordInput).toHaveAttribute("type", "text");
		fireEvent.click(showPasswordButton);
		expect(confirmPasswordInput).toHaveAttribute("type", "password");
	});

	it("should have confirm password input and gray warning Icon", async () => {
		const confirmPasswordField = screen.getByTestId("confirmPassword");
		expect(confirmPasswordField).toBeInTheDocument();
		const warningIcon = screen.getByTestId("confirmPasswordWarning");
		expect(warningIcon).toHaveClass("text-gray-700");
	});

	it("The warning icon for the confirm password test should be reded out if the field is empty", async () => {
		const passwordField = screen.getByTestId("confirmPassword");
		const usernameFiled = screen.getByTestId("username");
		await userEvent.click(passwordField);
		await userEvent.type(usernameFiled, "moc");
		const warningIcon = screen.getByTestId("confirmPasswordWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});
	it("The warning icon for the confirm password test should be reded out if the password and password confirm aren't the same", async () => {
		const confirmPasswordField = screen.getByTestId("confirmPassword");
		const passwordField = screen.getByTestId("password");
		const usernameFiled = screen.getByTestId("username");
		await userEvent.type(passwordField, "122");
		await userEvent.type(confirmPasswordField, "123");
		await userEvent.type(usernameFiled, "moc");
		const warningIcon = screen.getByTestId("confirmPasswordWarning");
		expect(warningIcon).toHaveClass("text-red-600");
	});

	it("The warning icon for the confirm password test should be greened out if the field is correct", async () => {
		const confirmPasswordField = screen.getByTestId("confirmPassword");
		const passwordField = screen.getByTestId("password");
		const usernameFiled = screen.getByTestId("username");
		await userEvent.type(passwordField, "122");
		await userEvent.type(confirmPasswordField, "122");
		await userEvent.type(usernameFiled, "moc");
		const warningIcon = screen.getByTestId("confirmPasswordWarning");
		expect(warningIcon).toHaveClass("text-green-600");
	});

	it("The warning icon for the confirm password test should be greened out if the field is change to correct", async () => {
		const confirmPasswordField = screen.getByTestId("confirmPassword");
		const passwordField = screen.getByTestId("password");
		await userEvent.type(passwordField, "122");
		await userEvent.type(confirmPasswordField, "123");
		await userEvent.clear(passwordField);
		await userEvent.type(passwordField, "123");
		const warningIcon = screen.getByTestId("confirmPasswordWarning");
		expect(warningIcon).toHaveClass("text-green-600");
	});

	it("should have sign up button", () => {
		const signUpButton = screen.getByTestId("submitForm");
		expect(signUpButton).toBeInTheDocument();
	});

	it("should have logo sing up button", () => {
		const googleButton = screen.getByTestId("google");
		expect(googleButton).toBeInTheDocument();

		const awsButton = screen.getByTestId("aws");
		expect(awsButton).toBeInTheDocument();
	});

	it("should have info section", () => {
		const infoSection = screen.getByText("Welcome To");
		expect(infoSection).toBeInTheDocument();
	});
});
