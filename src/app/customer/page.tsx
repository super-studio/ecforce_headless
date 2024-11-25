"use client";

import { useActionState, useState } from "react";
import { signIn, signOut } from "../actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SessionProvider, useSession } from "next-auth/react";
import type { Session } from "next-auth";

export default function Page() {
  return (
    <SessionProvider>
      <PageWrapper />
    </SessionProvider>
  );
}

function PageWrapper() {
  const session = useSession();

  if (session.status === "loading") {
    return null;
  }

  return (
    <>
      {session.data ? <CustomerPage session={session.data} /> : <SignInPage />}
    </>
  );
}

function CustomerPage(props: { session: Session }) {
  return (
    <div className="flex items-center justify-center my-40">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">ようこそ</CardTitle>
          <CardDescription>{props.session.user?.email}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button
            className="w-full"
            onClick={async () => {
              await signOut();
            }}
          >
            サインアウト
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [state, formAction] = useActionState(signIn, null);

  return (
    <div className="flex items-center justify-center my-40">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">サインイン</CardTitle>
          <CardDescription>
            メールアドレスとパスワードを入力してサインインしてください
          </CardDescription>
        </CardHeader>
        <form
          action={async (formData) => {
            setIsLoading(true);
            await formAction(formData);
            setIsLoading(false);
          }}
        >
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input id="email" name="email" type="email" required />
              {state?.errors?.email && (
                <p className="text-sm text-red-500">{state.errors.email[0]}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">パスワード</Label>
              <Input id="password" name="password" type="password" required />
              {state?.errors?.password && (
                <p className="text-sm text-red-500">
                  {state.errors.password[0]}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isLoading}>
              サインイン
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
