import { useProducts } from "@/hooks/useProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { ReactNode } from "react";

const Setup = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { result } = renderHook(() => useProducts(), { wrapper });
  return result;
};

jest.mock("@/api/fetch", () => ({
  fetchProducts: jest.fn().mockResolvedValue({
    products: [{ id: 1 }],
    count: 1,
  }),
}));

describe("useProduct", () => {
  it("returns the results of the fetch", async () => {
    const result = Setup();

    expect(result.current.isLoading).toEqual(true);

    await waitFor(() => {
      expect(result.current.data).toEqual({
        products: [{ id: 1 }],
        count: 1,
      });

      expect(result.current.error).toEqual(null);
    });
  });
});
