import { render, screen } from "@testing-library/react";
import { CartProvider, useCart } from "../cart";
import { act } from "react";

function TestComponent() {
  const { items, addItem, removeItem, detailItemId, setDetailItemId } =
    useCart();

  return (
    <div>
      <span data-testid="item-count">{items.length}</span>
      <button
        onClick={() =>
          addItem({
            id: "1",
            name: "Test Phone",
            color: "black",
            storage: "128GB",
            imageUrl: "/test.jpg",
            price: 999,
          })
        }
      >
        Add Item
      </button>
      <button onClick={() => removeItem("1")}>Remove Item</button>
      <button onClick={() => setDetailItemId("1")}>Set Detail Item</button>
      <span data-testid="detail-id">{detailItemId}</span>
    </div>
  );
}

describe("CartContext", () => {
  test("provides default values", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(screen.getByTestId("item-count").textContent).toBe("0");
    expect(screen.getByTestId("detail-id").textContent).toBe("");
  });

  test("adds an item to the cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    act(() => {
      screen.getByText("Add Item").click();
    });

    expect(screen.getByTestId("item-count").textContent).toBe("1");
  });

  test("removes an item from the cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    act(() => {
      screen.getByText("Add Item").click();
      screen.getByText("Remove Item").click();
    });

    expect(screen.getByTestId("item-count").textContent).toBe("0");
  });

  test("sets detail item ID", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    act(() => {
      screen.getByText("Set Detail Item").click();
    });

    expect(screen.getByTestId("detail-id").textContent).toBe("1");
  });
});
