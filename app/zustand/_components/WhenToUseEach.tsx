export default function WhenToUseEach() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">¿Cuándo usar cada cosa?</h2>
      <ul className="list-disc pl-6 flex flex-col gap-1">
        <li>
          <code>useState</code>: estado local de un solo componente.
        </li>
        <li>
          <strong>Zustand:</strong> estado compartido entre varios componentes
          o páginas.
        </li>
        <li>
          <code>useContext</code>: solo si necesitas inyectar una dependencia
          o configuración por subárbol.
        </li>
      </ul>
    </section>
  );
}
