import { ecforceApi } from "@/lib/ecforce-sdk";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import "next-auth/jwt";
import { raise } from "@/lib/utils";

type User = {
  id: string;
  email: string;
};

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const res = await ecforceApi.customer.session.signIn({
            customer: {
              email: credentials.email as string,
              password: credentials.password as string,
            },
          });
          if (res) {
            return {
              id: res.id.toString(),
              email: res.email,
            };
          } else {
            return null;
          }
        } catch {
          console.log("Sign in error");
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id ?? raise("User ID is required"),
          email: user.email ?? raise("User email is required"),
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = {
          ...session.user,
          ...token.user,
        };
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
