import CodeBlock from "@/components/CodeBlock";

export default function CreateStore() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">1. Crear un store</h2>
      <p>
        Un store es un hook creado con{" "}
        <code className="underline text-purple-500">create</code>. Contiene el
        estado y las acciones. Guárdalo en la carpeta de stores del proyecto ó
        en la propia sección en donde estes trabajando (si sabes que no se
        utilizará de manera global).
      </p>
      <CodeBlock
        code={`// stores/counter.store.ts
import { create } from "zustand";

type CounterStateT = {
  count: number;
  increment: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStateT>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));`}
      />
    </section>
  );
}
