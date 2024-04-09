import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { Profile } from "../pages/Profile";

describe("Profile Page", () => {
  beforeEach(() => {
    render(
      <HashRouter>
        <Profile />
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
    const saveButton = screen.getByRole("button", { name: /Save Changes/i });
    expect(saveButton).toBeInTheDocument();
  });

  it("Should Render the 'Upload Photo' button", () => {
    const uploadButton = screen.getByRole("button", { name: /upload photo/i });
    expect(uploadButton).toBeInTheDocument();
  });
});
