import BackButton from "@/components/BackButton";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes.config";
import Image from "next/image";
import Link from "next/link";

export const nuqsOptions = [
  "Cómo crear una search param.",
  "Cómo obtener un search param.",
  "Cómo eliminar un search param.",
];

export default function NuqsPage() {
  return (
    <div className="w-full gap-4 flex flex-col mx-auto max-w-3xl">
      <BackButton href={ROUTES.home.self.path} />
      <h1 className="text-2xl font-semibold underline">Nuqs Page</h1>
      <p>
        En esta sección veremos el manejo de los search params desde varios
        puntos:
      </p>

      <ol className="list-decimal space-y-2 pl-5">
        {nuqsOptions.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>

      <p>A tener en cuenta antes de realizar esta prueba:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          Instalación y configuración del <code>NuqsAdapter</code> (puede estar
          en el layout principal ó en algunos desarrollos en un componente{" "}
          <code>Providers.tsx</code>)
          <CodeBlock code={`Ver layout.tsx principal`} />
        </li>
        <li>
          Crear el search param. Se define un parser reutilizable, típicamente
          en un archivo <code>*.search-params.ts</code> (p.e{" "}
          <code>/activities/_core/activities.search-params.ts</code>)
          <CodeBlock code={`Ver el componente filter.search-params.ts`} />
        </li>
        <li>
          Crear en el <code>/config/params.config.ts</code> el nombre del
          parametro
        </li>
        <li>
          Consumirlo en un client component (crear/actualizar el valor) Aquí es
          donde el usuario escribe y la URL se actualiza.
          <CodeBlock code={`Ver el componente <FilterInput />`} />
          Debes tener en cuenta que al utilizar un Input de búsqueda, es
          recomendable que consuma el hook de useDebouncedCallback. Este es un
          error común, mira la imagen a continuación y ves por cada letra que
          escribes cómo se dispara la actualización del query (llamadas al
          backend).
          <Image
            src="/nuqs-error-without-debounce.png"
            alt="Ejemplo de debounce en input de búsqueda"
            width={800}
            height={400}
          />
        </li>
      </ol>
      <hr className="w-full" />

      <h2 className="text-xl font-semibold">Ejemplos</h2>
      <div className="flex flex-col gap-2">
        <Button asChild>
          <Link href={ROUTES.nuqs.example1.self.path}>Input sin debounced</Link>
        </Button>
        <Button asChild>
          <Link href={ROUTES.nuqs.example2.self.path}>Input con debounced</Link>
        </Button>
        <Button asChild>
          <Link href={ROUTES.nuqs.example3.self.path}>
            Desplegable sincronizado con la URL y obtener su valor.
          </Link>
        </Button>
      </div>
    </div>
  );
}
