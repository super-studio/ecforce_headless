import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SignUp() {
  return (
    <section className="relative py-24 px-4">
      <Image
        src="https://d1ogj02ptc5x6g.cloudfront.net/demo38/uploads/themes/ec_force_basic_theme_20240815170418/ec_force/assets/images/signup.jpg"
        alt="Sign-up background"
        width={1200}
        height={400}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 max-w-md mx-auto">
        <div className="text-center text-white">
          <div className="text-2xl">SIGN UP</div>
          <div className="text-xl mb-6">会員登録</div>
          <div className="text-sm my-4">
            ご利用には会員登録が必要です。下記より会員登録へお進みください。
          </div>
        </div>
        <form className="flex gap-2 h-10">
          <input
            type="email"
            placeholder="例）○○○@example.com"
            className="flex-grow px-4 h-full rounded"
          />
          <Button className="h-full">登録</Button>
        </form>
      </div>
    </section>
  );
}
