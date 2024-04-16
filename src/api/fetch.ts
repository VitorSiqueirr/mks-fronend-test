const BASE_URL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC";

export const fetchProducts = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};
