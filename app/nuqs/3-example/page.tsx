import SelectCart from "@/app/nuqs/_components/SelectCart";
import { filterSearchParamsCache } from "@/app/nuqs/_core/filter.search-params";
import BackButton from "@/components/BackButton";
import { ROUTES } from "@/config/routes.config";
import { SearchParams } from "nuqs";
import { Suspense } from "react";

type Example3PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Example3Page(props: Example3PageProps) {
  const searchParams = await props.searchParams;
  const { carType } = filterSearchParamsCache.parse(searchParams);
  return (
    <div className="w-full gap-4 flex flex-col mx-auto max-w-3xl">
      <BackButton href={ROUTES.nuqs.self.path} />
      <h1 className="text-2xl font-semibold underline">
        Sincronizar valor seleccionado de un desplegable en la URL
      </h1>
      <p>
        Un desplegable con parámetro <code className="underline">type</code> en
        la URL.
      </p>
      
      <Suspense>
        <SelectCart />
      </Suspense>

      {carType ? (
        <p className="text-green-500">Valor seleccionado: {carType}</p>
      ) : (
        <p className="text-red-500">Aún no se ha seleccionado un valor</p>
      )}
    </div>
  );
}
