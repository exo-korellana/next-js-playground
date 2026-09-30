"use client";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PARAMS } from "@/config/params.confing";
import { parseAsString, useQueryState } from "nuqs";
import { useTransition } from "react";

export default function FilterInputWithoutDebounced() {
  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = useQueryState(
    PARAMS.filters.queryWithoutDebounce,
    parseAsString.withDefault("").withOptions({
      startTransition,
      shallow: false, //false => hace que server components se re-rendericen al cambiar el query.
    }),
  );

  return (
    <div className="p-2 bg-blue-300/30 rounded-md">
      <Field>
        <FieldLabel htmlFor="input-field-username">Nombre (sin usar debounce)</FieldLabel>
        <Input
          className="border-2 border-blue-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          id="input-field-username"
          placeholder="Escribe tu nombre"
        />
        <FieldDescription>Escribe tu nombre completo. (Mira como se actualiza la URL al escribir)</FieldDescription>
      </Field>
    </div>
  );
}
