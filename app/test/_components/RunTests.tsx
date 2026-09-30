import CodeBlock from "@/components/CodeBlock";

export default function RunTests() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">4. Ejecutar los tests</h2>
      <CodeBlock
        title="Terminal"
        code={`pnpm test        # modo watch, se re-ejecutan al guardar
pnpm test:run    # una sola ejecución (útil en CI)
pnpm vitest run app/zustand   # solo los tests de una carpeta`}
      />
      <p>Salida esperada al pasar todos los tests:</p>
      <CodeBlock
        title="Terminal"
        code={`✓ app/zustand/_stores/counter.store.test.ts (4)
✓ app/zustand/1-example/_components/Counter.test.tsx (3)

Test Files  2 passed (2)
     Tests  7 passed (7)`}
      />
    </section>
  );
}
