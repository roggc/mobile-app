import { render, screen } from "@testing-library/react";
import HeaderCart from "../header-cart";
import { useCart } from "@/app/context/cart";
import { usePathname } from "next/navigation";
import "@testing-library/jest-dom";

jest.mock("next/image", () => {
  const MockImage = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  );
  MockImage.displayName = "NextImageMock";
  return MockImage;
});

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("@/app/context/cart", () => ({
  useCart: jest.fn(),
}));

describe("HeaderCart Component", () => {
  it("renders the inactive cart icon when no items are in the cart", () => {
    (useCart as jest.Mock).mockReturnValue({ items: [], detailItemId: null });
    (usePathname as jest.Mock).mockReturnValue("/");

    render(<HeaderCart />);

    expect(screen.getByAltText("Inactive Cart Icon")).toHaveAttribute(
      "src",
      "/bag-icon-inactive.svg"
    );
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("renders the active cart icon when the detailItemId is in the cart and matches the URL", () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [{ id: "1", name: "Product 1" }],
      detailItemId: "1",
    });
    (usePathname as jest.Mock).mockReturnValue("/1");

    render(<HeaderCart />);

    expect(screen.getByAltText("Inactive Cart Icon")).toHaveAttribute(
      "src",
      "/bag-icon-active.svg"
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders the inactive cart icon when the detailItemId is not in the cart", () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [{ id: "2", name: "Product 2" }],
      detailItemId: "1",
    });
    (usePathname as jest.Mock).mockReturnValue("/1");

    render(<HeaderCart />);

    expect(screen.getByAltText("Inactive Cart Icon")).toHaveAttribute(
      "src",
      "/bag-icon-inactive.svg"
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
