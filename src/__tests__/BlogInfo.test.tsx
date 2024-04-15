import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import BlogInfo from "../ui/Blog/BlogDetails/BlogInfo";

describe("Blog Page", () => {
  beforeEach(() => {
    render(
      <HashRouter>
        <BlogInfo />
      </HashRouter>,
    );
  });
  it("should have Title", () => {
    const emailInput = screen.getByTestId("title");
    expect(emailInput).toBeInTheDocument();
  });

  it("should have Date", () => {
    const emailInput = screen.getByTestId("date");
    expect(emailInput).toBeInTheDocument();
  });

  it("should have Publisher Name", () => {
    const emailInput = screen.getByTestId("publisherName");
    expect(emailInput).toBeInTheDocument();
  });

  it("should have Publisher Image", () => {
    const emailInput = screen.getByTestId("publisherImage");
    expect(emailInput).toBeInTheDocument();
  });

  it("should have Read Information", () => {
    const emailInput = screen.getByTestId("readInfo");
    expect(emailInput).toBeInTheDocument();
  });

  it("should have Like counter", () => {
    const emailInput = screen.getByTestId("likecounter");
    expect(emailInput).toBeInTheDocument();
  });

  it("should have Like Icon", () => {
    const emailInput = screen.getByTestId("likeIcon");
    expect(emailInput).toBeInTheDocument();
  });

  it("should have Share Icon", () => {
    const emailInput = screen.getByTestId("shareIcon");
    expect(emailInput).toBeInTheDocument();
  });

  it("should have Content", () => {
    const emailInput = screen.getByTestId("content");
    expect(emailInput).toBeInTheDocument();
  });
});
