import Products from "@/components/Products";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const addProduct = jest.fn();

const productData = {
  products: [
    {
      id: 1,
      photo:
        "https://fastly.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA",
      brand: "Nike",
      name: "Air Jordan 1",
      price: 100,
      description: "Nike Shoes",
    },
  ],
  count: 1,
};

jest.mock("../src/hooks/useSelectedProduct", () => ({
  useSelectedProduct: jest.fn().mockImplementation(() => ({
    addProduct,
  })),
}));

describe("Product", () => {
  const user = userEvent.setup();

  it("renders correctly", () => {
    render(<Products ProductData={productData} />);

    expect(screen.getAllByTestId("products")).toHaveLength(1);
    expect(
      screen.getByRole("img", {
        name: /this is a image of the product air jordan 1/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/air jordan 1/i)).toBeInTheDocument();
    expect(screen.getByText(/nike shoes/i)).toBeInTheDocument();
    expect(screen.getByText(/r\$100/i)).toBeInTheDocument();
    expect(screen.getByTestId("buyIcon")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /comprar/i,
      })
    ).toBeInTheDocument();
  });

  describe("when clicking the buy button", () => {
    it("calls the addProduct function", async () => {
      render(<Products ProductData={productData} />);

      const buyButton = screen.getByRole("button", {
        name: /comprar/i,
      });

      expect(addProduct).not.toHaveBeenCalled();

      await user.click(buyButton);

      expect(addProduct).toHaveBeenCalledTimes(1);
    });
  });
});
