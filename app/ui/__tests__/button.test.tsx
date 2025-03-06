import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../button";

describe("Button component", () => {
  it("renders its children", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies the filled background class when isFilled is true", () => {
    render(<Button isFilled>Filled Button</Button>);
    const buttonElement = screen.getByText("Filled Button");

    expect(buttonElement).toHaveClass("bg-black");
  });

  it("applies the unfilled background class when isFilled is false", () => {
    render(<Button isFilled={false}>Unfilled Button</Button>);
    const buttonElement = screen.getByText("Unfilled Button");

    expect(buttonElement).toHaveClass("bg-[#F3F2F2]");
  });

  it("appends additional classes passed via className", () => {
    render(<Button className="extra-class">Extra</Button>);
    const buttonElement = screen.getByText("Extra");
    expect(buttonElement).toHaveClass("extra-class");
  });
});
