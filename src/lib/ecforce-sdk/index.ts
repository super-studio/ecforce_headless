/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from "@/env";

/**
 * API仕様書: https://apidoc.ec-force.com/apidoc/v2/admin/index.html
 */
async function callEcforceApi<T>(
  {
    path,
    method,
    headers,
    data,
  }: {
    path: string;
    method: string;
    headers?: Record<string, string>;
    data?: Record<string, unknown>;
  },
  fetchOptions?: RequestInit
): Promise<T> {
  console.log("callEcforceApi", path, method, headers, data);
  const url = `${env.ECF_API_ENDPOINT}${path}`;
  const response = await fetch(url, {
    method,
    headers: {
      ...headers,
      Authorization: `Token token="${env.ECF_API_TOKEN}"`,
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
    ...fetchOptions,
  });

  const responseData = await response.json();
  return responseData;
}

async function listProducts(fetchOptions?: RequestInit) {
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

export const ecforceApi = {
  products: {
    list: listProducts,
  },
};
