/* eslint-disable @typescript-eslint/no-explicit-any */
import { callEcforceApi } from "..";
import { Product } from "./types";

export async function listProducts(fetchOptions?: RequestInit) {
  return (
    await callEcforceApi<any>(
      {
        path: "/admin/products",
        method: "GET",
      },
      fetchOptions
    )
  ).data;
}

export async function getProduct(id: string, fetchOptions?: RequestInit) {
  return (
    await callEcforceApi<{ data: Product }>(
      {
        path: `/admin/products/${id}`,
        method: "GET",
      },
      fetchOptions
    )
  ).data;
}
