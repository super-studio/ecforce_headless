import { getProduct, listProducts } from "./products/endpoints";

export const admin = {
  products: {
    list: listProducts,
    get: getProduct,
  },
};
