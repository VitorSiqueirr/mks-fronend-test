import Cart from "@/components/Cart";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

jest.mock("../src/hooks/useSelectedProduct", () => ({
  useSelectedProduct: jest.fn().mockImplementation(() => ({
    selectedProduct: [
      {
        product: {
          id: 1,
          photo:
            "https://fastly.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA",
          brand: "Nike",
          name: "<NAME>",
          price: 100,
          description: "Nike Shoes",
        },
        quantity: 1,
        total: 100,
      },
    ],
  })),
}));

const enableCart = jest.fn();

jest.mock("../src/hooks/useShowCart", () => ({
  useShowCart: jest.fn().mockImplementation(() => ({
    enableCart: enableCart,
  })),
}));

describe("Cart", () => {
  const user = userEvent.setup();
  it("renders correctly", () => {
    render(<Cart />);

    expect(
      screen.getByRole("heading", {
        name: /carrinho de compras/i,
      })
    ).toBeInTheDocument();
  });
});
