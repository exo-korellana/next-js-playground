import CodeBlock from "@/components/CodeBlock";

export default function ComponentTestExample() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">
        3. Test de componente: interacción de usuario
      </h2>
      <p>
        Con <code>@testing-library/react</code> renderizamos el componente
        real y con <code>userEvent</code> simulamos clics como lo haría una
        persona.
      </p>
      <CodeBlock
        title="app/zustand/1-example/_components/Counter.test.tsx"
        code={`import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { useCounterStore } from "@/app/zustand/_stores/counter.store";
import Counter from "./Counter";

describe("Counter", () => {
  beforeEach(() => {
    useCounterStore.setState({ count: 0 });
  });

  it("suma 1 al pulsar 'Sumar'", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole("button", { name: "Sumar" }));

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});`}
      />
    </section>
  );
}
