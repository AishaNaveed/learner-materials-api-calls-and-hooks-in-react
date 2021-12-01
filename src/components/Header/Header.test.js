import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("renders the world of disney title", () => {
    render(<Header />);
    const titleElement = screen.getByText(/the world of disney/i);
    expect(titleElement).toBeInTheDocument();
  });
});