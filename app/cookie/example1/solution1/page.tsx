import { CookieExample1T } from "@/app/cookie/example1/_core/cookie.example1.defintions";
import BackButton from "@/components/BackButton";
import { COOKIES } from "@/config/cookies.config";
import { ROUTES } from "@/config/routes.config";
import { parseJSONCookie } from "@/lib/cookies.lib";
import { getCookie } from "cookies-next/server";
import { cookies } from "next/headers";

export default async function Cookie1Solution1Page() {
  const dataCookie = parseJSONCookie<CookieExample1T[]>(
    await getCookie(COOKIES.example1.data, { cookies }),
  );

  if (!dataCookie || dataCookie.length === 0) {
    return <div>No hay datos en la cookie.</div>;
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <BackButton
        href={ROUTES.cookie.example1.self.path}
        label="Volver al ejemplo 1"
      />
      <pre>{JSON.stringify(dataCookie, null, 2)}</pre>
    </div>
  );
}
