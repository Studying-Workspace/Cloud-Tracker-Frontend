import { fireEvent, render, screen } from "@testing-library/react";
import SignIn from "../pages/SignIn";
import { HashRouter } from "react-router-dom";

describe("SignUp", () => {
  beforeEach(() => {
    render(
      <HashRouter>
        <SignIn />
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

  it("should have an email input", () => {
    const emailInput = screen.getByTestId("emailInput");
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

  it("should have sign up button", () => {
    const signUpButton = screen.getByTestId("submitForm");
    expect(signUpButton).toBeInTheDocument();
  });

  it("should have info section", () => {
    const infoSection = screen.getByText("Welcome Back!");
    expect(infoSection).toBeInTheDocument();
  });
});
