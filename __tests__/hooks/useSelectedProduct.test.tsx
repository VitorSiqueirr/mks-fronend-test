import { SelectProductProvider } from "@/context/provider/selectProductProvider";
import { useSelectedProduct } from "@/hooks/useSelectedProduct";
import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { act } from "react-dom/test-utils";

const Setup = () => {
  const wrapper = ({ children }: { children: ReactNode }) => {
    return <SelectProductProvider>{children}</SelectProductProvider>;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { result } = renderHook(() => useSelectedProduct(), { wrapper });
  return result;
};

describe("useSelectedProduct", () => {
  describe("when not used within a SelectProductProvider", () => {
    let originalError: any;

    beforeEach(() => {
      originalError = console.error;
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = originalError;
    });

    it("throw an error", () => {
      expect(() => {
        renderHook(() => useSelectedProduct());
      }).toThrow(
        "useSelectedProduct must be used within a SelectProductProvider"
      );
    });
  });

  it("starts with empty selected products", () => {
    const result = Setup();
    expect(result.current.selectedProduct).toEqual([]);
  });

  describe("when using the function addProduct", () => {
    it("adds a product to the selectedProduct", () => {
      const result = Setup();
      const productData = {
        id: 1,
        photo:
          "https://fastly.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA",
        brand: "Nike",
        name: "Air Jordan 1",
        price: 100,
        description: "Nike Shoes",
      };

      act(() => {
        result.current.addProduct(productData);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData,
          quantity: 1,
          total: 100,
        },
      ]);
    });
  });

  describe("when using the function removeProduct", () => {
    it("remove a product from the selectedProduct variable", () => {
      const result = Setup();
      const productData = {
        id: 1,
        photo:
          "https://fastly.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA",
        brand: "Nike",
        name: "Air Jordan 1",
        price: 100,
        description: "Nike Shoes",
      };

      act(() => {
        result.current.addProduct(productData);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData,
          quantity: 1,
          total: 100,
        },
      ]);

      act(() => {
        result.current.removeProduct(productData.id);
      });

      expect(result.current.selectedProduct).toEqual([]);
    });
  });

  describe("when using the function incrementQuantity", () => {
    it("increment 1 to the quantity of a product from the selectedProduct variable", () => {
      const result = Setup();
      const productData = {
        id: 1,
        photo:
          "https://fastly.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA",
        brand: "Nike",
        name: "Air Jordan 1",
        price: 100,
        description: "Nike Shoes",
      };

      act(() => {
        result.current.addProduct(productData);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData,
          quantity: 1,
          total: productData.price * 1,
        },
      ]);

      act(() => {
        result.current.incrementQuantity(productData.id);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData,
          quantity: 2,
          total: productData.price * 2,
        },
      ]);
    });
  });

  describe("when using the function decrementQuantity", () => {
    it("decrement 1 to the quantity of a product from the selectedProduct variable", () => {
      const result = Setup();
      const productData = {
        id: 1,
        photo:
          "https://fastly.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA",
        brand: "Nike",
        name: "Air Jordan 1",
        price: 100,
        description: "Nike Shoes",
      };

      act(() => {
        result.current.addProduct(productData);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData,
          quantity: 1,
          total: productData.price * 1,
        },
      ]);

      act(() => {
        result.current.incrementQuantity(productData.id);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData,
          quantity: 2,
          total: productData.price * 2,
        },
      ]);

      act(() => {
        result.current.decrementQuantity(productData.id);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData,
          quantity: 1,
          total: productData.price * 1,
        },
      ]);
    });

    it("cannot have the quantity be less than zero", () => {
      const result = Setup();
      const productData = {
        id: 1,
        photo:
          "https://fastly.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA",
        brand: "Nike",
        name: "Air Jordan 1",
        price: 100,
        description: "Nike Shoes",
      };

      act(() => {
        result.current.addProduct(productData);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData,
          quantity: 1,
          total: productData.price * 1,
        },
      ]);

      act(() => {
        result.current.decrementQuantity(productData.id);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData,
          quantity: 0,
          total: productData.price * 0,
        },
      ]);

      act(() => {
        result.current.decrementQuantity(productData.id);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData,
          quantity: 0,
          total: productData.price * 0,
        },
      ]);
    });
  });

  describe("when using the function clearProducts", () => {
    it("clears all the products in the selectedProduct variable", () => {
      const result = Setup();
      const productData1 = {
        id: 1,
        photo:
          "https://fastly.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA",
        brand: "Nike",
        name: "Air Jordan 1",
        price: 100,
        description: "Nike Shoes",
      };
      const productData2 = {
        id: 2,
        photo:
          "https://fastly.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA",
        brand: "Nike 2",
        name: "Air Jordan 2",
        price: 200,
        description: "Nike Shoes 2",
      };

      act(() => {
        result.current.addProduct(productData1);
      });
      act(() => {
        result.current.addProduct(productData2);
      });

      expect(result.current.selectedProduct).toEqual([
        {
          product: productData1,
          quantity: 1,
          total: productData1.price * 1,
        },
        {
          product: productData2,
          quantity: 1,
          total: productData2.price * 1,
        },
      ]);

      act(() => {
        result.current.clearProducts();
      });

      expect(result.current.selectedProduct).toEqual([]);
    });
  });
});
