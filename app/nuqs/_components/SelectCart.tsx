"use client";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PARAMS } from "@/config/params.confing";
import { parseAsString, useQueryState } from "nuqs";
import { useTransition } from "react";

const carTypes = [
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "hatchback", label: "Hatchback" },
  { value: "convertible", label: "Convertible" },
  { value: "coupe", label: "Coupe" },
  { value: "minivan", label: "Minivan" },
  { value: "pickup", label: "Pickup" },
  { value: "van", label: "Van" },
  { value: "wagon", label: "Wagon" },
  { value: "electric", label: "Electric" },
  { value: "hybrid", label: "Hybrid" },
  { value: "luxury", label: "Luxury" },
  { value: "sports", label: "Sports" },
  { value: "offroad", label: "Offroad" },
  { value: "diesel", label: "Diesel" },
  { value: "crossover", label: "Crossover" },
];

export default function SelectCart() {
  const [, startTransition] = useTransition();

  const [selectedCarType, setSelectedCarType] = useQueryState(
    PARAMS.filters.carType,
    parseAsString.withDefault("").withOptions({
      startTransition,
      shallow: false,
    }),
  );

  return (
    <Field>
      <FieldLabel>Selecciona un tipo de coche</FieldLabel>
      <Select value={selectedCarType} onValueChange={setSelectedCarType}>
        <SelectTrigger className="w-full max-w-full">
          <SelectValue placeholder="Selecciona un tipo de coche" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipos de coche</SelectLabel>
            {carTypes.map((car) => (
              <SelectItem key={car.value} value={car.value}>
                {car.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>
        Selecciona un tipo de coche. (Mira como se actualiza la URL al
        seleccionar)
      </FieldDescription>
    </Field>
  );
}
