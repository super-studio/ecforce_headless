"use server";

import {
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
} from "@/server/auth";
import { CredentialsSignin } from "next-auth";
import { z } from "zod";

const SignInSchema = z.object({
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください" }),
  password: z.string().min(1, { message: "パスワードは必須です" }),
});

export async function signIn(
  _prevState: unknown,
  formData: FormData
): Promise<{
  success?: boolean;
  errors?: {
    email?: string[];
    password?: string[];
  };
}> {
  const validatedFields = SignInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await nextAuthSignIn("credentials", {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    });
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return {
        errors: {
          password: ["メールアドレスまたはパスワードが間違っています"],
        },
      };
    }

    throw error;
  }

  return { success: true };
}

export async function signOut() {
  await nextAuthSignOut({
    redirectTo: "/",
  });
}
