import Counter from "@/app/zustand/1-example/_components/Counter";
import BackButton from "@/components/BackButton";
import { ROUTES } from "@/config/routes.config";

export default function Example1Page() {
  return (
    <div className="w-full gap-4 flex flex-col mx-auto max-w-3xl">
      <BackButton href={ROUTES.zustand.self.path} />
      <h1 className="text-2xl font-semibold underline">Contador</h1>
      <p>
        Ejemplo de un contador con Zustand. La lógica de estado vive en el
        store, mientras que el contador y los botones se implementan como
        componentes independientes que consumen ese store mediante selectores.
        Aquí ambos están al mismo nivel (hermanos), aunque podrían ubicarse en
        cualquier punto del árbol de componentes.
      </p>
      <Counter />
    </div>
  );
}
