import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation component", () => {
  test("renders the Show Favourites button text", () => {
    render(<Navigation />);
    const buttonText = screen.getByText(/show favourites/i);
    expect(buttonText).toBeInTheDocument();
  });

  test("renders the previous page button text", () => {
    render(<Navigation />);
    const prevElement = screen.getByText(/prev page/i);
    expect(prevElement).toBeInTheDocument();
  });

  test("renders the next page button text", () => {
    render(<Navigation />);
    const nextElement = screen.getByText(/next page/i);
    expect(nextElement).toBeInTheDocument();
  });

});