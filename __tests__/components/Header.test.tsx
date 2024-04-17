import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

jest.mock("../../src/hooks/useSelectedProduct", () => ({
  useSelectedProduct: jest.fn().mockImplementation(() => ({
    selectedProduct: [{ product: { id: 1 }, quantity: 1, total: 100 }],
  })),
}));

const enableCart = jest.fn();

jest.mock("../../src/hooks/useShowCart", () => ({
  useShowCart: jest.fn().mockImplementation(() => ({
    enableCart: enableCart,
  })),
}));

describe("Header", () => {
  const user = userEvent.setup();
  it("renders correctly and responds to click events", async () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", {
        name: /mks sistemas/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByTestId("cartIcon")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();

    await user.click(screen.getByTestId("cartButton"));

    expect(enableCart).toHaveBeenCalled();
  });
});
