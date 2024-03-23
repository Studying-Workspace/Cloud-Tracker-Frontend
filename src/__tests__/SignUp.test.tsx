import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from "../pages/SignUp";
import { HashRouter } from "react-router-dom";

describe("SignUp", () => {
  beforeEach(() => {
    render(
      <HashRouter>
        <SignUp />
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

  it("should have username input", () => {
    const usernameInput = screen.getByTestId("username");
    expect(usernameInput).toBeInTheDocument();

    //fireEvent.change(usernameInput, { target: { value: "178" } });
    const submitButton = screen.getByTestId("submitForm");
    fireEvent.click(submitButton);
    // const warningButton = screen.getByTestId("passwordWarning");
    // fireEvent.click(warningButton);

    // const warningMessage = screen.getByDisplayValue("Please Enter Your Username");
    // expect(warningMessage).toBeInTheDocument();
  });

  it("should have email input", () => {
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();
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

  it("should have confirm password input", () => {
    const confirmPasswordInput = screen.getByTestId("confirmPassword");
    expect(confirmPasswordInput).toBeInTheDocument();
    const showPasswordButton = screen.getByTestId("showConfirmPassword");
    fireEvent.click(showPasswordButton);
    expect(confirmPasswordInput).toHaveAttribute("type", "text");
    fireEvent.click(showPasswordButton);
    expect(confirmPasswordInput).toHaveAttribute("type", "password");
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

    // - add linked in button
  });

  it("should have info section", () => {
    const infoSection = screen.getByText("Welcome To");
    expect(infoSection).toBeInTheDocument();
  });
});
