import CodeBlock from "@/components/CodeBlock";

export default function UnitTestExample() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">
        2. Test unitario: lógica pura (store de Zustand)
      </h2>
      <p>
        Se coloca junto al archivo que prueba, con sufijo{" "}
        <code>.test.ts</code>. Aquí no renderizamos nada, solo comprobamos el
        estado.
      </p>
      <CodeBlock
        title="app/zustand/_stores/counter.store.test.ts"
        code={`import { beforeEach, describe, expect, it } from "vitest";
import { useCounterStore } from "./counter.store";

describe("useCounterStore", () => {
  beforeEach(() => {
    useCounterStore.setState({ count: 0 });
  });

  it("increment() suma 1", () => {
    useCounterStore.getState().increment();
    expect(useCounterStore.getState().count).toBe(1);
  });
});`}
      />
    </section>
  );
}
