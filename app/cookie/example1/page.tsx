import CookieExample1Wrapper from "@/app/cookie/example1/_components/CookieExample1Wrapper";
import BackButton from "@/components/BackButton";
import DeleteCookies from "@/components/DeleteCookies";
import { COOKIES } from "@/config/cookies.config";
import { ROUTES } from "@/config/routes.config";

export default function CookieExample1Page() {
  return (
    <div className="w-full gap-4 flex flex-col mx-auto max-w-3xl">
      <BackButton href={ROUTES.cookie.self.path} />
      <DeleteCookies cookies={[COOKIES.example1.data]} />
      <CookieExample1Wrapper />
    </div>
  );
}
