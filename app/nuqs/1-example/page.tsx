import FilterInputWithoutDebounced from "@/app/nuqs/_components/FilterInputWithoutDebounced";
import BackButton from "@/components/BackButton";
import { ROUTES } from "@/config/routes.config";
import { Suspense } from "react";

export default function Example1Page() {
  return (
    <div className="w-full gap-4 flex flex-col mx-auto max-w-3xl">
      <BackButton href={ROUTES.nuqs.self.path} />
      <h1 className="text-2xl font-semibold underline">Búscador</h1>
      <p>
        Un búscador con parámetro <code className="underline">query</code> en la
        URL.
      </p>

      <Suspense>
        <FilterInputWithoutDebounced />
      </Suspense>
    </div>
  );
}
