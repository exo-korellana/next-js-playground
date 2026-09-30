"use client";

import CounterData from "@/app/zustand/1-example/_components/CounterData";
import { useCounterStore } from "@/app/zustand/_stores/counter.store";
import { Button } from "@/components/ui/button";

export default function Counter() {
  // Selectores: el componente solo se re-renderiza si cambia "count"
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="flex flex-col gap-2 p-2 rounded-md bg-secondary">
      <div className="flex flex-row gap-2 w-full justify-between">
        <Button variant="default" className="flex-1" onClick={increment}>
          Sumar
        </Button>
        <CounterData />
        <Button variant="destructive" className="flex-1" onClick={decrement}>
          Restar
        </Button>
      </div>
      <Button variant="destructive" onClick={reset}>
        Borrar todo
      </Button>
    </div>
  );
}
