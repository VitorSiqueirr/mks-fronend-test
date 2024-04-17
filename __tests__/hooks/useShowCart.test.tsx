import { ShowCartProvider } from "@/context/provider/showCartProvider";
import { useShowCart } from "@/hooks/useShowCart";
import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { act } from "react-dom/test-utils";

const Setup = () => {
  const wrapper = ({ children }: { children: ReactNode }) => {
    return <ShowCartProvider>{children}</ShowCartProvider>;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { result } = renderHook(() => useShowCart(), { wrapper });
  return result;
};

describe("useShowCart", () => {
  describe("when not used within a ShowCartProvider", () => {
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
        renderHook(() => useShowCart());
      }).toThrow("useShowCart must be used within a ShowCartProvider");
    });
  });

  it("starts with the showCart false", () => {
    const result = Setup();
    expect(result.current.showCart).toBeFalsy();
  });

  describe("when using the enableCart function", () => {
    it("turns the showCart variable to true", () => {
      const result = Setup();
      act(() => {
        result.current.enableCart();
      });
      expect(result.current.showCart).toBeTruthy();
    });
  });

  describe("when using the disableCart function", () => {
    it("turns the showCart variable to false", () => {
      const result = Setup();
      act(() => {
        result.current.enableCart();
      });
      expect(result.current.showCart).toBeTruthy();
      act(() => {
        result.current.disableCart();
      });
      expect(result.current.showCart).toBeFalsy();
    });
  });
});
