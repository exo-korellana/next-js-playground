"use client";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PARAMS } from "@/config/params.confing";
import { parseAsString, useQueryState } from "nuqs";
import { useEffect, useState, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function FilterInputWithDebounced() {
  const [isPending, startTransition] = useTransition();

  const [selectedQuery, setSelectedQuery] = useQueryState(
    PARAMS.filters.queryWithDebounce,
    parseAsString.withDefault("").withOptions({
      startTransition,
      shallow: false, //false => hace que server components se re-rendericen al cambiar el query.
    }),
  );

  // Estado local para que el input responda de inmediato mientras se escribe
  const [query, setQuery] = useState(selectedQuery);

  // Sincroniza el input si la URL cambia por otra vía (ej. limpiar filtros)
  useEffect(() => {
    setSelectedQuery(selectedQuery);
  }, [selectedQuery]);

const debouncedSetSelectedQuery = useDebouncedCallback(setSelectedQuery, 300);

  return (
    <div className="p-2 bg-blue-300/30 rounded-md">
      <Field>
        <FieldLabel htmlFor="input-field-username">
          Nombre (usando debounce)
        </FieldLabel>
        <Input
          className="border-2 border-blue-300"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            debouncedSetSelectedQuery(value);
          }}
          type="search"
          id="input-field-username"
          placeholder="Escribe tu nombre"
        />
        <FieldDescription>
          Escribe tu nombre completo. (Mira como se actualiza la URL despues de
          un tiempo)
        </FieldDescription>
      </Field>
    </div>
  );
}
