import CodeBlock from "@/components/CodeBlock";

export default function BestPractices() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Buenas prácticas</h2>
      <ul className="list-disc pl-6 flex flex-col gap-1">
        <li>
          <strong>Usa siempre selectores.</strong> No desestructures el store
          completo (ver ejemplo abajo).
        </li>
        <li>
          <strong>Nunca mutes el estado directamente.</strong> Usa{" "}
          <code>set</code> dentro de las acciones.
        </li>
        <li>
          <strong>Pon las acciones dentro del store,</strong> no en los
          componentes.
        </li>
        <li>
          <strong>Un store por dominio</strong> (carrito, sesión, UI…), no un
          único store gigante.
        </li>
        <li>
          <strong>Cuidado con Next.js:</strong> un store definido a nivel de
          módulo es un singleton. En el servidor se comparte entre peticiones,
          así que <strong>no guardes datos específicos de un usuario</strong>{" "}
          inicializándolos en el servidor. Úsalo solo en Client Components y
          para estado de cliente.
        </li>
        <li>
          Zustand es para <strong>estado de cliente</strong> compartido. Los
          datos que vienen del servidor no van aquí: se piden en Server
          Components o con una librería de fetching.
        </li>
      </ul>
      <CodeBlock
        code={`// Mal: se suscribe a TODO el store y re-renderiza con cualquier cambio
const { count, increment } = useCounterStore();
`}
      />
      <CodeBlock
        code={`// Bien: un selector por cada valor que necesitas
const count = useCounterStore((state) => state.count);
const increment = useCounterStore((state) => state.increment);
`}
      />
    </section>
  );
}
