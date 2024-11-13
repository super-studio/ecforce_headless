/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from "@/env";
import { getProduct, listProducts } from "./products/endpoints";
import { NotFoundError } from "../errors/not-found-error";

/**
 * API仕様書: https://apidoc.ec-force.com/apidoc/v2/admin/index.html
 */
export async function callEcforceApi<T>(
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
  const url = `${env.ECF_API_ENDPOINT}${path}`;
  console.log("callEcforceApi", method, url, headers, data);
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

  if (!response.ok) {
    if (response.status === 404) {
      throw new NotFoundError();
    }
    console.error(
      "API request failed",
      response.status,
      response.statusText,
      await response.text()
    );
    throw new Error(`API request failed: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
}

export const ecforceApi = {
  products: {
    list: listProducts,
    get: getProduct,
  },
};
