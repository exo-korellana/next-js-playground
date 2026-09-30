import { useCounterStore } from "@/app/zustand/_stores/counter.store";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  beforeEach(() => {
    useCounterStore.setState({ count: 0 });
  });

  it("muestra 0 al renderizar por primera vez", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("suma 1 al pulsar 'Sumar'", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole("button", { name: "Sumar" }));

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("resetea a 0 al pulsar 'Borrar todo'", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole("button", { name: "Sumar" }));
    await user.click(screen.getByRole("button", { name: "Sumar" }));
    await user.click(screen.getByRole("button", { name: "Borrar todo" }));

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
