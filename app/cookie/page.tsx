import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes.config";
import Link from "next/link";

export const cookieOptions = [
  "Cómo crear cookies.",
  "Cómo obtener cookies.",
  "Cómo eliminar cookies.",
];

export default function CookiesPage() {
  return (
    <div className="w-full gap-4 flex flex-col mx-auto max-w-3xl">
      <BackButton href={ROUTES.home.self.path} />
      <h1 className="text-2xl font-semibold underline">Cookies Page</h1>
      <p>
        En esta sección veremos el manejo de las cookies desde varios puntos:
      </p>

      <ol className="list-decimal space-y-2 pl-5">
        {cookieOptions.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>

      <h2 className="text-xl font-semibold">Ejemplos</h2>
      <div className="flex flex-col gap-2">
        <Button asChild>
          <Link href={ROUTES.cookie.example1.self.path}>Ejemplo 1</Link>
        </Button>
      </div>
    </div>
  );
}
