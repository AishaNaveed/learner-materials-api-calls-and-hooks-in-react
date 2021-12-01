import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
  test("renders the Show Favourites button text", () => {
    render(<Navigation />);
    const buttonText = screen.getByText("Show Favourites");
    expect(buttonText).toBeInTheDocument();
  });
});