export default function WhatIsZustand() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">¿Qué es Zustand?</h2>
      <p>
        Zustand es una librería pequeña para manejar{" "}
        <strong>estado global</strong> en React. Defines un <em>store</em> (un
        hook) con el estado y las acciones que lo modifican, y cualquier
        componente puede usarlo directamente, sin providers.
      </p>
    </section>
  );
}
