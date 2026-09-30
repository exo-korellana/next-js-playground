import { beforeEach, describe, expect, it } from "vitest";
import { useCounterStore } from "./counter.store";

// describe: agrupa tests relacionados (en este caso, los tests del store de contador)
// if o test: un caso concreto, con un nombre en lenguaje natural que describe que se espera.
// Patrón Arrange–Act–Assert: preparas el estado, ejecutas la acción, y compruebas (expect) el resultado.
// beforeEach: se ejecuta antes de cada it, útil para dejar el estado limpio (evita que un test afecte a otro).

describe("useCounterStore", () => {
  // El store es un singleton: si no lo reseteamos, un test afecta a los siguientes.
  beforeEach(() => {
    useCounterStore.setState({ count: 0 });
  });

  it("empieza en 0", () => {
    expect(useCounterStore.getState().count).toBe(0);
  });

  it("increment() suma 1", () => {
    useCounterStore.getState().increment();
    expect(useCounterStore.getState().count).toBe(1);
  });

  it("decrement() resta 1", () => {
    useCounterStore.getState().increment(); // count = 1
    useCounterStore.getState().decrement(); // count = 0
    expect(useCounterStore.getState().count).toBe(0);
  });

  it("reset() vuelve a 0 tras varios incrementos", () => {
    useCounterStore.getState().increment();
    useCounterStore.getState().increment();
    useCounterStore.getState().reset();
    expect(useCounterStore.getState().count).toBe(0);
  });
});
