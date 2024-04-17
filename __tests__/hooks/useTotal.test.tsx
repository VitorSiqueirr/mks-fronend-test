import { SelectProductProvider } from "@/context/provider/selectProductProvider";
import { useTotal } from "@/hooks/useTotal";
import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";

const wrapper = ({ children }: { children: ReactNode }) => {
  return <SelectProductProvider>{children}</SelectProductProvider>;
};

const Setup = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { result } = renderHook(() => useTotal(), { wrapper });
  return result;
};

describe("useTotal", () => {
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
        renderHook(() => useTotal());
      }).toThrow(
        "useSelectedProduct must be used within a SelectProductProvider"
      );
    });
  });

  it("starts with the total equal to 0", () => {
    const result = Setup();
    expect(result.current).toBe(0);
  });
});
