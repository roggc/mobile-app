import { render, screen } from "@testing-library/react";
import ProductList from "../product-list";
import { Product } from "@/app/utils/api/types";
import "@testing-library/jest-dom";

jest.mock(
  "next/link",
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children
);

jest.mock("../product-card", () => ({
  __esModule: true,
  default: ({ product }: { product: Product }) => (
    <div data-testid="product-card">{product.name}</div>
  ),
}));

describe("ProductList Component", () => {
  const mockProducts: Product[] = [
    {
      id: "1",
      name: "Product 1",
      basePrice: 100,
      brand: "foo",
      imageUrl: "bar",
    },
    {
      id: "2",
      name: "Product 2",
      basePrice: 200,
      brand: "foo",
      imageUrl: "bar",
    },
  ];

  it("renders in horizontal layout when isHorizontal is true", () => {
    render(<ProductList products={mockProducts} isHorizontal />);

    const container = screen.getByTestId("product-list");
    expect(container).not.toHaveClass("flex-col");
    expect(container).toHaveClass("flex-row");
  });

  it("renders in grid layout when isHorizontal is false", () => {
    render(<ProductList products={mockProducts} isHorizontal={false} />);

    const container = screen.getByTestId("product-list");
    expect(container).toHaveClass("md:grid");
    expect(container).toHaveClass("md:grid-cols-2");
  });
});
