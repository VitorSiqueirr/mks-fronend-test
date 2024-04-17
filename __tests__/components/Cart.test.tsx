import Cart from "@/components/Cart";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const removeProduct = jest.fn();
const decrementQuantity = jest.fn();
const incrementQuantity = jest.fn();
const clearProducts = jest.fn();

jest.mock("../../src/hooks/useSelectedProduct", () => ({
  useSelectedProduct: jest.fn().mockImplementation(() => ({
    selectedProduct: [
      {
        product: {
          id: 1,
          photo:
            "https://fastly.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA",
          brand: "Nike",
          name: "Air Jordan 1",
          price: 100,
          description: "Nike Shoes",
        },
        quantity: 1,
        total: 100,
      },
    ],
    removeProduct,
    incrementQuantity,
    decrementQuantity,
    clearProducts,
  })),
}));

const disableCart = jest.fn();

jest.mock("../../src/hooks/useShowCart", () => ({
  useShowCart: jest.fn().mockImplementation(() => ({
    disableCart,
  })),
}));

describe("Cart", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const user = userEvent.setup();
  it("renders correctly", () => {
    render(<Cart />);

    const view = screen.getByText(/total:/i);
    const quantity = screen.getByTestId("productQuantity");
    const productTotal = screen.getByTestId("productTotal");

    expect(screen.queryByTestId("cartProducts")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /carrinho de compras/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByTestId("closeCartIcon")).toBeInTheDocument();
    expect(screen.getByTestId("deleteProductIcon")).toBeInTheDocument();
    expect(screen.getByText(/air jordan 1/i)).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(quantity).toHaveTextContent("1");
    expect(
      screen.getByRole("button", {
        name: /\-/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /\+/i,
      })
    ).toBeInTheDocument();
    expect(productTotal).toBeInTheDocument();
    expect(productTotal).toHaveTextContent("R$100");
    expect(within(view).getByText(/r\$100/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /finalizar compra/i,
      })
    ).toBeInTheDocument();
  });

  describe("when clicking the + button", () => {
    it("calls the incrementQuantity function", async () => {
      render(<Cart />);

      const plusButton = screen.getByRole("button", {
        name: /\+/i,
      });

      expect(incrementQuantity).not.toHaveBeenCalled();

      await user.click(plusButton);

      expect(incrementQuantity).toHaveBeenCalledTimes(1);
    });
  });

  describe("when clicking the - button", () => {
    it("calls the decrementQuantity function", async () => {
      render(<Cart />);

      const minusButton = screen.getByRole("button", {
        name: /\-/i,
      });

      expect(decrementQuantity).not.toHaveBeenCalled();

      await user.click(minusButton);

      expect(decrementQuantity).toHaveBeenCalledTimes(1);
    });
  });

  describe("when clicking the delete product icon", () => {
    it("calls the removeProduct function", async () => {
      render(<Cart />);

      const deleteProductIcon = screen.getByTestId("deleteProductIcon");

      expect(removeProduct).not.toHaveBeenCalled();

      await user.click(deleteProductIcon);

      expect(removeProduct).toHaveBeenCalledTimes(1);
    });
  });

  describe("when clicking the close cart icon", () => {
    it("calls the disableCart function", async () => {
      render(<Cart />);

      const closeCartIcon = screen.getByTestId("closeCartIcon");

      expect(disableCart).not.toHaveBeenCalled();

      await user.click(closeCartIcon);

      expect(disableCart).toHaveBeenCalledTimes(1);
    });
  });

  describe("when clicking the finalize purchase button", () => {
    it("calls the disableCart and clearProducts functions", async () => {
      render(<Cart />);

      const finalizePurchaseButton = screen.getByRole("button", {
        name: /finalizar compra/i,
      });
      const closeCartIcon = screen.getByTestId("closeCartIcon");

      expect(clearProducts).not.toHaveBeenCalled();
      expect(disableCart).not.toHaveBeenCalled();

      await user.click(finalizePurchaseButton);

      expect(disableCart).toHaveBeenCalledTimes(1);
      expect(clearProducts).toHaveBeenCalledTimes(1);
    });
  });
});
