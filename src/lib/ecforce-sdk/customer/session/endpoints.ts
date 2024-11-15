import { callEcforceApi } from "@/lib/ecforce-sdk/shared";
import type { SignInRequest, SignInResponse, ErrorResponse } from "./types";

export async function signIn(
  data: SignInRequest,
  fetchOptions?: RequestInit
): Promise<SignInResponse> {
  try {
    const response = await callEcforceApi<SignInResponse>(
      {
        path: "/customers/sign_in",
        method: "POST",
        data,
      },
      fetchOptions
    );
    return response;
  } catch (error) {
    if (error instanceof Error) {
      const errorResponse: ErrorResponse = JSON.parse(error.message);
      throw new Error(errorResponse.errors.map((e) => e.message).join(", "));
    }
    throw error;
  }
}
