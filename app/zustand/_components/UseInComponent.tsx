import CodeBlock from "@/components/CodeBlock";

export default function UseInComponent() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">2. Usarlo en un componente</h2>
      <p>
        Se usa como cualquier hook. Como usa hooks de React, el componente debe
        ser Client Component (<code>&quot;use client&quot;</code>).
      </p>
      <CodeBlock
        code={`"use client";

import { useCounterStore } from "@/app/zustand/_stores/counter.store";
import { Button } from "@/components/ui/button";

export default function Counter() {
  // Selectores: el componente solo se re-renderiza si cambia "count"
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);

  return (
    <>
      <Button className="bg-green-500/80" onClick={increment}>
        Incrementar
      </Button>
      <span className="text-lg font-semibold">Contador: {count}</span>
      <Button className="bg-red-500/80" onClick={reset}>
        Resetear
      </Button>
    </>
  );
}
`}
      />
    </section>
  );
}
